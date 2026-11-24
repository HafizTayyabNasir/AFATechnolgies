const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processLogos() {
  const inputPath = 'C:/Users/Hafiz Tayyab/.gemini/antigravity/brain/bd462636-0d45-4f67-a805-8d000d749ba8/.user_uploaded/media_1795526838921_e9fbb12e.jpg';
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  
  const bgR = 247, bgG = 247, bgB = 247;
  const isBg = new Uint8Array(info.width * info.height);
  const queue = [];
  
  // Outer perimeter
  for (let x = 0; x < info.width; x++) {
    queue.push(x);
    queue.push((info.height - 1) * info.width + x);
  }
  for (let y = 0; y < info.height; y++) {
    queue.push(y * info.width);
    queue.push(y * info.width + (info.width - 1));
  }
  
  // Internal negative space seeds (inside letter 'A' and loops)
  const innerSeeds = [
    500 + 490 * info.width,
    510 + 510 * info.width,
    490 + 500 * info.width,
    500 + 540 * info.width,
    535 + 460 * info.width,
    470 + 460 * info.width
  ];
  for (const s of innerSeeds) queue.push(s);

  const thresh = 18;
  let head = 0;
  while(head < queue.length) {
    const p = queue[head++];
    if (isBg[p]) continue;
    
    const x = p % info.width;
    const y = Math.floor(p / info.width);
    const idx = p * info.channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    
    const diff = Math.sqrt((r - bgR)**2 + (g - bgG)**2 + (b - bgB)**2);
    if (diff <= thresh) {
      isBg[p] = 1;
      if (x > 0 && !isBg[p - 1]) queue.push(p - 1);
      if (x < info.width - 1 && !isBg[p + 1]) queue.push(p + 1);
      if (y > 0 && !isBg[p - info.width]) queue.push(p - info.width);
      if (y < info.height - 1 && !isBg[p + info.width]) queue.push(p + info.width);
    }
  }

  // Create RGBA buffer
  const rgba = Buffer.alloc(info.width * info.height * 4);
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const p = y * info.width + x;
      const sIdx = p * info.channels;
      const dIdx = p * 4;
      const r = data[sIdx], g = data[sIdx+1], b = data[sIdx+2];
      
      if (isBg[p]) {
        rgba[dIdx] = 0;
        rgba[dIdx+1] = 0;
        rgba[dIdx+2] = 0;
        rgba[dIdx+3] = 0;
      } else {
        const diff = Math.sqrt((r - bgR)**2 + (g - bgG)**2 + (b - bgB)**2);
        let alpha = 1.0;
        if (diff < 42) {
          alpha = Math.max(0, Math.min(1, (diff - 4) / 38));
        }
        
        if (alpha <= 0.02) {
          rgba[dIdx] = 0;
          rgba[dIdx+1] = 0;
          rgba[dIdx+2] = 0;
          rgba[dIdx+3] = 0;
        } else {
          const unR = Math.max(0, Math.min(255, Math.round((r - (1 - alpha) * bgR) / alpha)));
          const unG = Math.max(0, Math.min(255, Math.round((g - (1 - alpha) * bgG) / alpha)));
          const unB = Math.max(0, Math.min(255, Math.round((b - (1 - alpha) * bgB) / alpha)));
          
          rgba[dIdx] = unR;
          rgba[dIdx+1] = unG;
          rgba[dIdx+2] = unB;
          rgba[dIdx+3] = Math.round(alpha * 255);
        }
      }
    }
  }

  // Find exact tight bounding box of all content
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const p = y * info.width + x;
      if (rgba[p * 4 + 3] > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  const fullWidth = maxX - minX + 1;
  const fullHeight = maxY - minY + 1;
  console.log('Tight BBox:', { minX, maxX, minY, maxY, w: fullWidth, h: fullHeight });
  
  // 1. Stacked logo (PNG & WebP)
  const pad = 16;
  const extractRect = {
    left: Math.max(0, minX - pad),
    top: Math.max(0, minY - pad),
    width: Math.min(info.width, fullWidth + pad * 2),
    height: Math.min(info.height, fullHeight + pad * 2)
  };
  
  await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract(extractRect)
    .webp({ quality: 95, lossless: true })
    .toFile('public/images/logo-stacked.webp');
  console.log('Saved public/images/logo-stacked.webp');

  // 2. Emblem only
  let eMinX = info.width, eMaxX = 0, eMinY = info.height, eMaxY = 0;
  for (let y = 220; y <= 605; y++) {
    for (let x = 0; x < info.width; x++) {
      const p = y * info.width + x;
      if (rgba[p * 4 + 3] > 10) {
        if (x < eMinX) eMinX = x;
        if (x > eMaxX) eMaxX = x;
        if (y < eMinY) eMinY = y;
        if (y > eMaxY) eMaxY = y;
      }
    }
  }
  const eW = eMaxX - eMinX + 1;
  const eH = eMaxY - eMinY + 1;
  
  const emblemPngBuffer = await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract({ left: eMinX, top: eMinY, width: eW, height: eH })
    .png()
    .toBuffer();
    
  await sharp(emblemPngBuffer)
    .webp({ quality: 95, lossless: true })
    .toFile('public/images/logo-icon.webp');
  console.log('Saved public/images/logo-icon.webp');

  // 3. Text only (AFA + TECHNOLOGIES)
  let tMinX = info.width, tMaxX = 0, tMinY = info.height, tMaxY = 0;
  for (let y = 620; y <= 770; y++) {
    for (let x = 0; x < info.width; x++) {
      const p = y * info.width + x;
      if (rgba[p * 4 + 3] > 10) {
        if (x < tMinX) tMinX = x;
        if (x > tMaxX) tMaxX = x;
        if (y < tMinY) tMinY = y;
        if (y > tMaxY) tMaxY = y;
      }
    }
  }
  const tW = tMaxX - tMinX + 1;
  const tH = tMaxY - tMinY + 1;
  
  const textPngBuffer = await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract({ left: tMinX, top: tMinY, width: tW, height: tH })
    .png()
    .toBuffer();

  // 4. Create Horizontal Lockup (logo.webp) for Header / General Use
  // Emblem height = 180, Text height = 110, Canvas height = 200
  const emblemResized = await sharp(emblemPngBuffer).resize({ height: 180, fit: 'contain' }).png().toBuffer({ resolveWithObject: true });
  const textResized = await sharp(textPngBuffer).resize({ height: 110, fit: 'contain' }).png().toBuffer({ resolveWithObject: true });
  
  const gap = 20;
  const padH = 12;
  const totalW = emblemResized.info.width + gap + textResized.info.width + padH * 2;
  const totalH = 200;
  
  const emblemTop = Math.round((totalH - emblemResized.info.height) / 2);
  const textTop = Math.round((totalH - textResized.info.height) / 2) + 2;
  
  await sharp({
    create: {
      width: totalW,
      height: totalH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: emblemResized.data, left: padH, top: emblemTop },
    { input: textResized.data, left: padH + emblemResized.info.width + gap, top: textTop }
  ])
  .webp({ quality: 95, lossless: true })
  .toFile('public/images/logo.webp');
  console.log('Saved public/images/logo.webp (horizontal lockup:', totalW, 'x', totalH, ')');

  // Also save PNG version for maximum compatibility
  await sharp({
    create: {
      width: totalW,
      height: totalH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: emblemResized.data, left: padH, top: emblemTop },
    { input: textResized.data, left: padH + emblemResized.info.width + gap, top: textTop }
  ])
  .png()
  .toFile('public/images/logo.png');
  console.log('Saved public/images/logo.png');

  // 5. Create White/Light Text Version for Footer (logo-footer.webp)
  // Convert dark text pixels to crisp white/light silver (#ffffff & #00bdf2)
  const textRaw = await sharp(textPngBuffer).raw().toBuffer({ resolveWithObject: true });
  const footerTextData = Buffer.from(textRaw.data);
  for (let i = 0; i < footerTextData.length; i += 4) {
    const a = footerTextData[i + 3];
    if (a > 15) {
      const r = footerTextData[i];
      const g = footerTextData[i+1];
      const b = footerTextData[i+2];
      
      // If it's dark navy or charcoal text, brighten it to clean white/light slate for dark background
      if (r < 80 && g < 110 && b < 150) {
        footerTextData[i] = 255;
        footerTextData[i+1] = 255;
        footerTextData[i+2] = 255;
      }
    }
  }
  
  const footerTextResized = await sharp(footerTextData, {
    raw: { width: textRaw.info.width, height: textRaw.info.height, channels: 4 }
  }).resize({ height: 110, fit: 'contain' }).png().toBuffer({ resolveWithObject: true });

  await sharp({
    create: {
      width: totalW,
      height: totalH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: emblemResized.data, left: padH, top: emblemTop },
    { input: footerTextResized.data, left: padH + emblemResized.info.width + gap, top: textTop }
  ])
  .webp({ quality: 95, lossless: true })
  .toFile('public/images/logo-footer.webp');
  console.log('Saved public/images/logo-footer.webp');
}

processLogos().catch(console.error);
