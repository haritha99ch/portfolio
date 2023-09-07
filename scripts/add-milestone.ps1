# Get user inputs
$milestoneType = Read-Host -Prompt "Is this a job or education milestone? (job/education)"
$milestoneWhat = Read-Host -Prompt "What is the milestone?"
$milestoneWhere = Read-Host -Prompt "Where did it take place?"
$milestoneWhen = Read-Host -Prompt "When did it start? (YYYY-MM-DD)"
$milestoneEnd = Read-Host -Prompt "When did it end? (YYYY-MM-DD, leave blank if ongoing)"
$milestoneDescription = Read-Host -Prompt "Enter a description of the milestone"

# Create milestone directory
$milestoneDir = "./public/userData"
if (-not (Test-Path $milestoneDir)) {
    New-Item -ItemType Directory -Force -Path $milestoneDir
}

# Load existing milestones from JSON file
$milestonesFile = "$milestoneDir/milestones.json"
if (Test-Path $milestonesFile) {
    $milestonesJson = Get-Content $milestonesFile | ConvertFrom-Json
} else {
    $milestonesJson = @{}
}

# Create a new milestone object
$newMilestone = @{
    type = $milestoneType
    what = $milestoneWhat
    where = $milestoneWhere
    start = $milestoneWhen
    end = $milestoneEnd
    description = $milestoneDescription
}

# Add the new milestone to the milestones array
if ($null -eq $milestonesJson.milestones) {
    $milestonesJson.milestones = @()
}

$milestonesJson.milestones += $newMilestone

# Save updated milestones to JSON file
$milestonesJson | ConvertTo-Json | Set-Content $milestonesFile
