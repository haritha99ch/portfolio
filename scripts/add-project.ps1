# Get user inputs
$projectName = Read-Host -Prompt "Enter project name"
$projectDescription = Read-Host -Prompt "Enter project description"
$projectGithubUrl = Read-Host -Prompt "Enter project Github URL"
$projectImagePath = Read-Host -Prompt "Enter project image path"
$projectTechStack = Read-Host -Prompt "Enter project tech stack (comma-separated)"

# Create project directory
$projectDir = "./public/userData/projects/$projectName"

if (Test-Path $projectDir) {
    $overwrite = Read-Host -Prompt "Project directory already exists. Overwrite? (y/n)"
    if ($overwrite -ne 'y') {
        Write-Output "Operation cancelled."
        exit
    }
} else {
    New-Item -ItemType Directory -Force -Path $projectDir
}

# Copy image to project directory
$imageFileName = Split-Path $projectImagePath -Leaf
Copy-Item -Path $projectImagePath -Destination "$projectDir/$imageFileName"

# Create JSON file
$projectJson = @{
    name = $projectName
    description = $projectDescription
    imagePath = "userData/projects/$projectName/$imageFileName"
    techStack = $projectTechStack.Split(',')
    githubUrl = $projectGithubUrl
} | ConvertTo-Json

Set-Content -Path "$projectDir/project.json" -Value $projectJson

# Update root-level JSON file with project path
$rootJsonFile = "./public/userData/projects/projects.json"
if (Test-Path $rootJsonFile) {
    $rootJson = Get-Content $rootJsonFile | ConvertFrom-Json
} else {
    $rootJson = @{}
}

$newProject = @{
    project = "userData/projects/$projectName/project.json"
}

if ($null -eq $rootJson.projects) {
    $rootJson.projects = @()
}

$rootJson.projects += $newProject

$rootJson | ConvertTo-Json -Depth 10 | Set-Content $rootJsonFile
