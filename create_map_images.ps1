# Script pour générer des images de carte pour les différentes zones
$sourceImage = ".\public\images\map_jeddah.jpg"

# Zones de Jeddah
$jeddahAreas = @(
    "al-rawdah",
    "al-hamra",
    "al-andalus",
    "al-zahra",
    "al-salamah",
    "al-shati",
    "al-safa",
    "al-khalidiyah",
    "al-rihab",
    "al-nahdah",
    "al-worood",
    "al-marwah",
    "al-naseem",
    "al-basateen",
    "al-faisaliyah"
)

# Zones de Riyadh
$riyadhAreas = @(
    "al-olaya",
    "al-malaz",
    "al-narjis",
    "hittin",
    "al-yasmin"
)

# Zones de Dammam
$dammamAreas = @(
    "al-faisaliyah-dammam",
    "al-shatea",
    "al-aziziyah-dammam",
    "uhud"
)

# Créer les dossiers si nécessaires
$mapFolder = ".\public\images\maps"
if (-not (Test-Path $mapFolder)) {
    New-Item -ItemType Directory -Path $mapFolder
}

# Copier l'image source pour chaque zone de Jeddah
foreach ($area in $jeddahAreas) {
    $destinationFile = "$mapFolder\map_jeddah_$area.jpg"
    Copy-Item -Path $sourceImage -Destination $destinationFile
    Write-Host "Créé $destinationFile"
}

# Copier l'image source pour chaque zone de Riyadh
foreach ($area in $riyadhAreas) {
    $destinationFile = "$mapFolder\map_riyadh_$area.jpg"
    Copy-Item -Path $sourceImage -Destination $destinationFile
    Write-Host "Créé $destinationFile"
}

# Copier l'image source pour chaque zone de Dammam
foreach ($area in $dammamAreas) {
    $destinationFile = "$mapFolder\map_dammam_$area.jpg"
    Copy-Item -Path $sourceImage -Destination $destinationFile
    Write-Host "Créé $destinationFile"
}

Write-Host "Terminé: Images de cartes générées pour toutes les zones" 