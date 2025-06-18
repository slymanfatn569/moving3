// Este script verifica y regenera los iconos si es necesario
// Para ser ejecutado en el navegador si es necesario

function createFallbackIcon(size) {
  // Crear un canvas
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  // Fondo
  ctx.fillStyle = '#051937';
  ctx.fillRect(0, 0, size, size);
  
  // Crear un gradiente para el centro
  const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
  gradient.addColorStop(0, '#00C6FB');
  gradient.addColorStop(1, '#005BEA');
  
  // Dibujar un círculo
  ctx.beginPath();
  ctx.arc(size/2, size/2, size/2 - 10, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();
  
  // Añadir texto si el tamaño es suficientemente grande
  if (size >= 72) {
    ctx.fillStyle = 'white';
    const fontSize = Math.max(size/4, 12);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    if (size >= 144) {
      ctx.fillText('فخر', size/2, size/2 - fontSize/2);
      ctx.fillText('الخليج', size/2, size/2 + fontSize/2);
    } else {
      ctx.fillText('FK', size/2, size/2);
    }
  }
  
  return canvas.toDataURL('image/png');
}

// Función para descargar una imagen como archivo
function downloadIcon(dataUrl, filename) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Regenerar los iconos problemáticos
function regenerateIcons() {
  console.log('Regenerando iconos...');
  
  const sizes = [16, 32, 72, 96, 128, 144, 152, 192, 384, 512];
  
  sizes.forEach(size => {
    const dataUrl = createFallbackIcon(size);
    downloadIcon(dataUrl, `icon-${size}x${size}.png`);
  });
  
  console.log('Iconos regenerados. Por favor, sube estos archivos a la carpeta /icons/');
}

// Ejecutar si es necesario
// regenerateIcons(); 