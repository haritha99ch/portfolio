# Define the fields to prompt for
$fields = @("Greeting Quote", "Your Name", "About You (Short)", "Email", "LinkedIn Profile", "Github Profile", "About you more")

# Create an empty hashtable to store the user's input
$userInput = @{}

# Loop through each field and prompt the user for input
foreach ($field in $fields) {
    $userInput[$field] = Read-Host -Prompt $field
}

# Prompt the user for a paragraph for the "About you more" field
Write-Host "About you more (press ENTER twice when finished):"
$aboutYouMore = ""
do {
    $line = Read-Host
    $aboutYouMore += "$line`r`n"
} while ($line -ne "")
$userInput["About you more"] = $aboutYouMore.Trim()

$userDataDir = "./public/userData"
if (-not (Test-Path $userDataDir)) {
    New-Item -ItemType Directory -Force -Path $userDataDir
}

# Prompt the user for their CV path and copy it to ./public/assets/cv.pdf
$cvPath = Read-Host -Prompt "Your CV"
if (Test-Path -Path $cvPath) {
    $cvFileName = Split-Path $cvPath -Leaf
    Copy-Item -Path $cvPath -Destination "$userDataDir/$cvFileName" -Force
    $userInput["Your CV"] = "userData/$cvFileName"
} else {
    Write-Host "The specified CV path does not exist. Please try again."
}

# Prompt the user for their profile picture path and copy it to ./public/assets/profile.jpg
$profilePicPath = Read-Host -Prompt "Your Profile Picture"
if (Test-Path -Path $profilePicPath) {
    $imageFileName = Split-Path $profilePicPath -Leaf
    Copy-Item -Path $profilePicPath -Destination "$userDataDir/$imageFileName" -Force
    $userInput["Your Profile Picture"] = "userData/$imageFileName"
} else {
    Write-Host "The specified profile picture path does not exist. Please try again."
}

# Convert the hashtable to a JSON object
$json = $userInput | ConvertTo-Json

# Write the JSON object to a file
Set-Content -Path "$userDataDir/userDetails.json" -Value $json
