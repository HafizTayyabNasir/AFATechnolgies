const fs = require('fs');

const fSvg = `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Fortanixor Logo" style="height:28px;width:auto;aspect-ratio:5/6;display:block;"><path d="M50 115C50 115 10 95 10 50V15L50 5L90 15V50C90 95 50 115 50 115Z" fill="#4D79FF"/><path d="M50 105C50 105 18 88 18 50V22L50 14L82 22V50C82 88 50 105 50 105Z" fill="#0a0814"/><circle cx="50" cy="52" r="22" fill="#00BCD4"/></svg>`;
const kSvg = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Keystone Logo" style="height:26px;width:auto;display:block;"><path d="M22 80V45C22 29.5 34.5 17 50 17C65.5 17 78 29.5 78 45V80H64V45C64 37.3 57.7 31 50 31C42.3 31 36 37.3 36 45V80H22Z" fill="#D97706" opacity="0.45"/><polygon points="38 15 62 15 57 40 43 40" fill="#D97706"/><rect x="22" y="76" width="56" height="8" rx="2" fill="#D97706"/></svg>`;

const nBase64 = 'data:image/png;base64,' + fs.readFileSync('public/logos/najoomi-logo.png').toString('base64');
const aBase64 = 'data:image/png;base64,' + fs.readFileSync('public/logos/accelerec-logo.png').toString('base64');

const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; font-family: sans-serif; background: #fff; }
  .section-preview { padding: 40px 20px; border-bottom: 2px solid #ccc; }
  .title { text-align: center; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.06em; text-transform: uppercase; color: #475569; margin-bottom: 20px; }
  .row { display: flex; justify-content: center; align-items: center; gap: 50px; }
  .brand-text { font-weight: 700; font-size: 1.3rem; color: #0a1e38; }
  img { height: 28px; width: auto; object-fit: contain; }
  .cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1100px; margin: 30px auto 0; }
  .card { background: #fff; padding: 20px; border-radius: 16px; border: 1px solid rgba(10,30,56,0.08); box-shadow: 0 4px 16px rgba(10,30,56,0.05); }
  .num { font-size: 1.8rem; font-weight: 800; color: #0a1e38; }
  .desc { font-size: 0.85rem; color: #475569; margin-top: 6px; }

  /* Option 1: Soft Slate Pearl (#e5eef7 to #d9e7f4) */
  .opt-1 { background: linear-gradient(180deg, #e7eff7 0%, #dce8f4 100%); border-top: 1px solid #c9ddec; border-bottom: 1.5px solid #bdd3e4; }

  /* Option 2: Clean Tech Inset Capsule Bar */
  .opt-2 { background: #f0f4f9; border-top: 1px solid #dbe4ee; border-bottom: 1px solid #dbe4ee; }
  .opt-2 .marquee-capsule { background: #ffffff; border: 1px solid #dbe4ee; border-radius: 16px; padding: 16px 30px; max-width: 1000px; margin: 0 auto; box-shadow: 0 4px 14px rgba(10,30,56,0.04); }

  /* Option 3: Cool Frost Azure (#e2ecf7) */
  .opt-3 { background: #e3edf7; border-top: 1px solid #cbdbee; border-bottom: 1px solid #cbdbee; }
</style>
</head>
<body>
  <h2>Section below it is: #f6faff (Client Impact)</h2>

  <div class="section-preview opt-1">
    <h3>Option 1: Soft Slate Pearl (#e7eff7 to #dce8f4)</h3>
    <div class="title">Trusted by high-growth technology and innovation leaders</div>
    <div class="row">
      <div style="display:flex;align-items:center;gap:10px;">${fSvg}<span class="brand-text">Fortanixor</span></div>
      <div><img src="${nBase64}"></div>
      <div style="display:flex;align-items:center;gap:10px;">${kSvg}<span class="brand-text" style="letter-spacing:0.08em;font-size:1.1rem;">KEYSTONE</span></div>
      <div><img src="${aBase64}"></div>
    </div>
    <div class="cards">
      <div class="card"><div class="num">14 days</div><div class="desc">Velocity SLA</div></div>
      <div class="card"><div class="num">Up to 60%</div><div class="desc">Cost Efficiency</div></div>
      <div class="card"><div class="num">3 regions</div><div class="desc">Global Coverage</div></div>
      <div class="card"><div class="num">4 partners</div><div class="desc">Scale-Up Trust</div></div>
    </div>
  </div>

  <div class="section-preview opt-2">
    <h3>Option 2: Dedicated Inset Capsule Bar on #f0f4f9</h3>
    <div class="title">Trusted by high-growth technology and innovation leaders</div>
    <div class="marquee-capsule">
      <div class="row">
        <div style="display:flex;align-items:center;gap:10px;">${fSvg}<span class="brand-text">Fortanixor</span></div>
        <div><img src="${nBase64}"></div>
        <div style="display:flex;align-items:center;gap:10px;">${kSvg}<span class="brand-text" style="letter-spacing:0.08em;font-size:1.1rem;">KEYSTONE</span></div>
        <div><img src="${aBase64}"></div>
      </div>
    </div>
    <div class="cards">
      <div class="card"><div class="num">14 days</div><div class="desc">Velocity SLA</div></div>
      <div class="card"><div class="num">Up to 60%</div><div class="desc">Cost Efficiency</div></div>
      <div class="card"><div class="num">3 regions</div><div class="desc">Global Coverage</div></div>
      <div class="card"><div class="num">4 partners</div><div class="desc">Scale-Up Trust</div></div>
    </div>
  </div>
</body>
</html>
`;

fs.writeFileSync('public/logos/test-separation.html', html);
console.log('Saved test-separation.html');
