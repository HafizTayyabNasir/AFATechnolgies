const fs = require('fs');

let html = fs.readFileSync('AFA-Technologies-Website.html', 'utf8');

const headerPattern = /<a class="brand" href="#home" aria-label="AFA Technologies, back to top">[\s\S]*?<img src="data:image\/webp;base64,[^"]+" alt="" width="58" height="44">[\s\S]*?<span class="brand-name">AFA<small>Technologies<\/small><\/span>[\s\S]*?<\/a>/;

const footerPattern = /<a class="footer-brand-logo" href="#home" aria-label="AFA Technologies">[\s\S]*?<img src="data:image\/webp;base64,[^"]+" alt="AFA Technologies" width="178" height="36" class="footer-logo-img" \/>[\s\S]*?<\/a>/;

console.log('Header pattern test:', headerPattern.test(html));
console.log('Footer pattern test:', footerPattern.test(html));

if (headerPattern.test(html) && footerPattern.test(html)) {
  html = html.replace(headerPattern, `<a class="brand" href="#home" aria-label="AFA Technologies, back to top">
      <img src="images/logo.webp" alt="AFA Technologies" width="160" height="46" class="logo-img">
    </a>`);

  html = html.replace(footerPattern, `<a class="footer-brand-logo" href="#home" aria-label="AFA Technologies">
          <img src="images/logo-footer.webp" alt="AFA Technologies" width="160" height="46" class="footer-logo-img" />
        </a>`);

  fs.writeFileSync('AFA-Technologies-Website.html', html, 'utf8');
  console.log('Updated AFA-Technologies-Website.html successfully!');
} else {
  console.log('Pattern test failed, inspecting lines around line 2530...');
}
