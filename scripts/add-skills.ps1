Write-Host "Enter your technical skills, separated by commas (e.g. C#, .NET, Python):"
$skills = Read-Host

$skillsArray = $skills -split "," | ForEach-Object { $_.Trim() }

$userDataDir = "./public/userData"
if (-not (Test-Path $userDataDir)) {
    New-Item -ItemType Directory -Force -Path $userDataDir
}

$json = $skillsArray | ConvertTo-Json

Set-Content -Path "$userDataDir/skills.json" -Value $json

Write-Host "Skills saved to skills.json"
