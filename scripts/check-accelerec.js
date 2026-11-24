const fs = require('fs');

const buf = fs.readFileSync('public/logos/accelerec-logo.png');
// Check sample bytes
console.log('Buffer length:', buf.length);
// Let's check accelerec.com background
const https = require('https');
https.get('https://accelerec.com/', { headers: {'User-Agent':'Mozilla/5.0'} }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const m = d.match(/<header[^>]*>[\s\S]*?<\/header>/i);
    if (m) console.log('Header:\n', m[0].substring(0, 600));
  });
});