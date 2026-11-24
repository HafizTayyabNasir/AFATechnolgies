const https = require('https');
https.get('https://accelerec.com/', { headers: {'User-Agent':'Mozilla/5.0'} }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const urls = d.match(/https?:\/\/[^\s"'<>]+\.(?:svg|png|webp)/gi) || [];
    console.log('URLs:', [...new Set(urls)].filter(u => /ring|circle|radar|bg|spin|hud|graphic|hero|orbit/i.test(u)));
    // Also check for inline svg or class names
    const classes = d.match(/class=["'][^"']*(?:circle|radar|orbit|spin|rotate|bg-)[^"']*["']/gi) || [];
    console.log('Classes:', [...new Set(classes)].slice(0, 10));
  });
}).on('error', err => console.log('Error:', err.message));
