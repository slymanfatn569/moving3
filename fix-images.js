const fs = require('fs');
const path = require('path');

// Chemin du répertoire des images
const imagesDir = path.join(__dirname, 'public', 'images');

// Correspondances entre les noms d'images manquantes et les images existantes à copier
const imageMapping = {
  'experienced_movers_team.jpeg': 'expert_furniture_movers.jpeg',
  'professional_movers_company.jpeg': 'office_moving_company.jpeg',
  'furniture_shipping_service.jpeg': 'furniture_moving_service.jpeg',
  'commercial_moving_service.jpeg': 'moving_and_storage_service.jpeg',
};

// Copier et renommer les images
Object.entries(imageMapping).forEach(([targetName, sourceName]) => {
  const sourcePath = path.join(imagesDir, sourceName);
  const targetPath = path.join(imagesDir, targetName);
  
  // Vérifier si l'image source existe
  if (fs.existsSync(sourcePath)) {
    // Vérifier si l'image cible existe déjà
    if (!fs.existsSync(targetPath)) {
      try {
        // Copier l'image
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`✅ Copié ${sourceName} vers ${targetName}`);
      } catch (error) {
        console.error(`❌ Erreur lors de la copie de ${sourceName}: ${error.message}`);
      }
    } else {
      console.log(`⚠️ ${targetName} existe déjà, pas de copie effectuée`);
    }
  } else {
    console.error(`❌ Fichier source ${sourceName} introuvable`);
  }
});

console.log('Opération terminée!'); 