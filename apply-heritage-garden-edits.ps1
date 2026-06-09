$ErrorActionPreference = 'Stop'
$path = "$PSScriptRoot\src\pages\About.tsx"
$content = [System.IO.File]::ReadAllText($path)

$emDash    = [char]0x2014
$paragraph = [char]0x00A7

# --- 1) Add HeritageGardenSection import (no-op if already present) -----
if ($content -notmatch 'HeritageGardenSection') {
  $importAnchor = 'import GardenCtaPair from "@/components/sections/GardenCtaPair";'
  $importNew    = $importAnchor + "`r`n" + 'import HeritageGardenSection from "@/components/sections/HeritageGardenSection";'
  $content = $content.Replace($importAnchor, $importNew)
}

# --- 2) Replace the old Historie - Founder pedigree section -------------
$startMarker = "      {/* ${paragraph}5 Historie ${emDash} Founder pedigree */}"
$endMarker   = "      {/* ${paragraph}5 Historie ${emDash} Timeline (existing block, moved here) */}"

$startIdx = $content.IndexOf($startMarker)
$endIdx   = $content.IndexOf($endMarker)

if ($startIdx -lt 0 -or $endIdx -lt 0 -or $endIdx -le $startIdx) {
  throw "Markers not found (start=$startIdx end=$endIdx). Cannot proceed."
}

$replacement = "      {/* ${paragraph}1 Heritage ${emDash} immersive garden re-imagining of founder pedigree */}`r`n" +
               "      <HeritageGardenSection`r`n" +
               "        isDe={isDe}`r`n" +
               "        companies={heritageCompanies}`r`n" +
               "        founders={namedFounders}`r`n" +
               "        registerRows={heritageRegisterRows}`r`n" +
               "        founderInitials={founderInitials}`r`n" +
               "      />`r`n`r`n"

$newContent = $content.Substring(0, $startIdx) + $replacement + $content.Substring($endIdx)

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($path, $newContent, $utf8NoBom)

Write-Host "OK: rewrote $path"
Write-Host "Old size: $($content.Length)  New size: $($newContent.Length)"
