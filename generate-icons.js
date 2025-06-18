const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Icon sizes needed according to manifest
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Ensure directories exist
const iconDirs = ['public/icons', 'public'];
iconDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate each icon
iconSizes.forEach(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#051937'; // Primary color from the website
  ctx.fillRect(0, 0, size, size);
  
  // Create a gradient for the center
  const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
  gradient.addColorStop(0, '#00C6FB');
  gradient.addColorStop(1, '#005BEA');
  
  // Draw a circle
  ctx.beginPath();
  ctx.arc(size/2, size/2, size/2 - 10, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();
  
  // Add text (if size is big enough)
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
  
  // Save the file
  const buffer = canvas.toBuffer('image/png');
  
  // Save to /icons folder
  fs.writeFileSync(path.join('public', 'icons', `icon-${size}x${size}.png`), buffer);
  console.log(`Generated: public/icons/icon-${size}x${size}.png`);
  
  // Also save with underscore format as alternative
  fs.writeFileSync(path.join('public', 'icons', `icon_${size}x${size}.png`), buffer);
  console.log(`Generated: public/icons/icon_${size}x${size}.png`);
  
  // Save the main icons to the public root as well
  if (size === 192 || size === 512) {
    fs.writeFileSync(path.join('public', `icon-${size}x${size}.png`), buffer);
    console.log(`Generated: public/icon-${size}x${size}.png`);
  }
  
  // Generate special icons for shortcuts
  if (size === 192) {
    // Contact icon (with a different gradient)
    const contactCanvas = createCanvas(size, size);
    const contactCtx = contactCanvas.getContext('2d');
    contactCtx.fillStyle = '#051937';
    contactCtx.fillRect(0, 0, size, size);
    
    const contactGradient = contactCtx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
    contactGradient.addColorStop(0, '#FF9A8B');
    contactGradient.addColorStop(1, '#FF6A88');
    
    contactCtx.beginPath();
    contactCtx.arc(size/2, size/2, size/2 - 10, 0, Math.PI * 2);
    contactCtx.fillStyle = contactGradient;
    contactCtx.fill();
    
    contactCtx.fillStyle = 'white';
    contactCtx.font = `bold ${size/4}px Arial`;
    contactCtx.textAlign = 'center';
    contactCtx.textBaseline = 'middle';
    contactCtx.fillText('اتصل', size/2, size/2);
    
    const contactBuffer = contactCanvas.toBuffer('image/png');
    fs.writeFileSync(path.join('public', 'icons', `contact-icon-${size}x${size}.png`), contactBuffer);
    console.log(`Generated: public/icons/contact-icon-${size}x${size}.png`);
    
    // Services icon (with a different gradient)
    const servicesCanvas = createCanvas(size, size);
    const servicesCtx = servicesCanvas.getContext('2d');
    servicesCtx.fillStyle = '#051937';
    servicesCtx.fillRect(0, 0, size, size);
    
    const servicesGradient = servicesCtx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
    servicesGradient.addColorStop(0, '#84FAB0');
    servicesGradient.addColorStop(1, '#8FD3F4');
    
    servicesCtx.beginPath();
    servicesCtx.arc(size/2, size/2, size/2 - 10, 0, Math.PI * 2);
    servicesCtx.fillStyle = servicesGradient;
    servicesCtx.fill();
    
    servicesCtx.fillStyle = 'white';
    servicesCtx.font = `bold ${size/4}px Arial`;
    servicesCtx.textAlign = 'center';
    servicesCtx.textBaseline = 'middle';
    servicesCtx.fillText('خدمات', size/2, size/2);
    
    const servicesBuffer = servicesCanvas.toBuffer('image/png');
    fs.writeFileSync(path.join('public', 'icons', `services-icon-${size}x${size}.png`), servicesBuffer);
    console.log(`Generated: public/icons/services-icon-${size}x${size}.png`);
  }
});

console.log('All icons generated successfully!'); 