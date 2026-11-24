const fs = require('fs');

let html = fs.readFileSync('AFA-Technologies-Website.html', 'utf8');

// 1. Remove glow from CSS in <style>
const oldCssSnippet = `.cyber-circle-radial-glow {
  position: absolute;
  inset: 15%;
  border-radius: 50%;
  background: radial-gradient(circle at 45% 45%, rgba(16, 185, 129, 0.28) 0%, rgba(0, 189, 242, 0.22) 35%, rgba(37, 99, 235, 0.12) 65%, transparent 75%);
  filter: blur(55px);
  animation: cyberGlowBreathe 7s ease-in-out infinite alternate;
}

@keyframes cyberGlowBreathe {
  0% { transform: scale(0.92); opacity: 0.65; }
  100% { transform: scale(1.08); opacity: 0.95; }
}

.cyber-circle-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
  filter: drop-shadow(0 0 16px rgba(0, 189, 242, 0.35)) drop-shadow(0 0 24px rgba(16, 185, 129, 0.22));
}

.cyber-circle-bg--subtle {
  opacity: 0.28;
  filter: hue-rotate(15deg);
}`;

const newCssSnippet = `.cyber-circle-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}`;

if (html.includes(oldCssSnippet)) {
  html = html.replace(oldCssSnippet, newCssSnippet);
  console.log('Removed glow CSS from AFA-Technologies-Website.html');
}

// 2. Remove radial glow div from HTML
html = html.replace('<div class="cyber-circle-radial-glow"></div>', '');

// 3. Remove radialGradient id="hudCoreGlow" and circle fill="url(#hudCoreGlow)"
const glowGradientPattern = /\s*<radialGradient id="hudCoreGlow"[\s\S]*?<\/radialGradient>\s*<\/defs>\s*<circle cx="450" cy="450" r="420" fill="url\(#hudCoreGlow\)" \/>/;

if (glowGradientPattern.test(html)) {
  html = html.replace(glowGradientPattern, '\n      </defs>');
  console.log('Removed hudCoreGlow SVG gradient and circle from AFA-Technologies-Website.html');
}

fs.writeFileSync('AFA-Technologies-Website.html', html, 'utf8');
console.log('Successfully updated AFA-Technologies-Website.html');
