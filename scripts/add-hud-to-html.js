const fs = require('fs');

let html = fs.readFileSync('AFA-Technologies-Website.html', 'utf8');

const hudCss = `
/* ========================================================
   FUTURISTIC ROTATING CYBER HUD / CIRCULAR RADAR BG
   ======================================================== */
.cyber-circle-bg-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(620px, 65vw, 960px);
  height: clamp(620px, 65vw, 960px);
  pointer-events: none;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.88;
  overflow: visible;
}

.cyber-circle-radial-glow {
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
}

/* Multi-Layer Continuous Rotation Keyframes */
@keyframes hudSpinClockwise {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes hudSpinCounterClockwise {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

.hud-layer {
  transform-origin: 450px 450px;
  will-change: transform;
}

.hud-layer--outer-cw {
  animation: hudSpinClockwise 55s linear infinite;
}

.hud-layer--ticks-ccw {
  animation: hudSpinCounterClockwise 38s linear infinite;
}

.hud-layer--middle-cw {
  animation: hudSpinClockwise 26s linear infinite;
}

.hud-layer--inner-ccw {
  animation: hudSpinCounterClockwise 18s linear infinite;
}

.hud-layer--core-cw {
  animation: hudSpinClockwise 12s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .hud-layer--outer-cw,
  .hud-layer--ticks-ccw,
  .hud-layer--middle-cw,
  .hud-layer--inner-ccw,
  .hud-layer--core-cw {
    animation: none;
  }
}
`;

// Insert CSS after .partners-ambient-aurora { ... filter: blur(40px); }
const auroraTarget = `  filter: blur(40px);\n}`;
if (!html.includes('.cyber-circle-bg-container')) {
  html = html.replace(auroraTarget, auroraTarget + '\n' + hudCss);
  console.log('Added HUD CSS to AFA-Technologies-Website.html');
}

const hudSvgMarkup = `
  <!-- Rotating Cyber Circular Radar HUD Background -->
  <div class="cyber-circle-bg-container" aria-hidden="true">
    <div class="cyber-circle-radial-glow"></div>
    <svg class="cyber-circle-svg" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hudGradEmeraldCyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.85" />
          <stop offset="35%" stop-color="#00f5ff" stop-opacity="0.9" />
          <stop offset="70%" stop-color="#00bdf2" stop-opacity="0.75" />
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0.4" />
        </linearGradient>
        <linearGradient id="hudGradCyanBlue" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#00f5ff" stop-opacity="0.8" />
          <stop offset="45%" stop-color="#0284c7" stop-opacity="0.65" />
          <stop offset="80%" stop-color="#10b981" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient id="hudGradAccent" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.9" />
          <stop offset="50%" stop-color="#10b981" stop-opacity="0.75" />
          <stop offset="100%" stop-color="#00bdf2" stop-opacity="0.3" />
        </linearGradient>
        <radialGradient id="hudCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.22" />
          <stop offset="35%" stop-color="#00bdf2" stop-opacity="0.12" />
          <stop offset="70%" stop-color="#2563eb" stop-opacity="0.05" />
          <stop offset="100%" stop-color="transparent" stop-opacity="0" />
        </radialGradient>
      </defs>
      <circle cx="450" cy="450" r="420" fill="url(#hudCoreGlow)" />
      <g class="hud-layer hud-layer--outer-cw">
        <circle cx="450" cy="450" r="425" stroke="rgba(0, 189, 242, 0.15)" stroke-width="1.5" stroke-dasharray="4 8" />
        <circle cx="450" cy="450" r="408" stroke="url(#hudGradEmeraldCyan)" stroke-width="14" stroke-dasharray="180 50 70 30 240 60 90 40 140 70" stroke-linecap="round" />
        <circle cx="450" cy="450" r="392" stroke="rgba(16, 185, 129, 0.55)" stroke-width="3" stroke-dasharray="8 24 16 32 30 40" />
      </g>
      <g class="hud-layer hud-layer--ticks-ccw">
        <circle cx="450" cy="450" r="365" stroke="url(#hudGradCyanBlue)" stroke-width="10" stroke-dasharray="2.5 5.5" stroke-opacity="0.75" />
        <circle cx="450" cy="450" r="348" stroke="rgba(0, 245, 255, 0.6)" stroke-width="6" stroke-dasharray="1.8 4.2" />
        <circle cx="450" cy="450" r="374" stroke="rgba(37, 99, 235, 0.35)" stroke-width="1" />
        <circle cx="450" cy="450" r="339" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1" />
      </g>
      <g class="hud-layer hud-layer--middle-cw">
        <circle cx="450" cy="450" r="310" stroke="url(#hudGradAccent)" stroke-width="18" stroke-dasharray="140 40 210 55 60 35 110 45" stroke-linecap="round" />
        <circle cx="450" cy="450" r="288" stroke="rgba(0, 189, 242, 0.5)" stroke-width="2.5" stroke-dasharray="40 12 80 18 20 10" />
        <circle cx="450" cy="450" r="272" stroke="rgba(0, 245, 255, 0.45)" stroke-width="4" stroke-dasharray="6 14" />
      </g>
      <g class="hud-layer hud-layer--inner-ccw">
        <circle cx="450" cy="450" r="240" stroke="url(#hudGradEmeraldCyan)" stroke-width="8" stroke-dasharray="2 4" stroke-opacity="0.8" />
        <circle cx="450" cy="450" r="215" stroke="url(#hudGradCyanBlue)" stroke-width="12" stroke-dasharray="90 30 140 45 50 25" stroke-linecap="round" />
        <circle cx="450" cy="450" r="192" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1.5" stroke-dasharray="25 15 50 20" />
      </g>
      <g class="hud-layer hud-layer--core-cw">
        <circle cx="450" cy="450" r="160" stroke="url(#hudGradAccent)" stroke-width="6" stroke-dasharray="60 25 90 35 40 20" stroke-linecap="round" />
        <circle cx="450" cy="450" r="135" stroke="rgba(0, 245, 255, 0.6)" stroke-width="2" stroke-dasharray="4 8" />
        <line x1="450" y1="300" x2="450" y2="330" stroke="rgba(0, 189, 242, 0.55)" stroke-width="2" />
        <line x1="450" y1="570" x2="450" y2="600" stroke="rgba(0, 189, 242, 0.55)" stroke-width="2" />
        <line x1="300" y1="450" x2="330" y2="450" stroke="rgba(0, 189, 242, 0.55)" stroke-width="2" />
        <line x1="570" y1="450" x2="600" y2="450" stroke="rgba(0, 189, 242, 0.55)" stroke-width="2" />
        <circle cx="450" cy="450" r="18" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" stroke-width="2" />
        <circle cx="450" cy="450" r="6" fill="#00f5ff" />
      </g>
    </svg>
  </div>`;

// Insert into Section 2 (.partners-bar)
const partnersTarget = `<div class="partners-ambient-aurora" aria-hidden="true"></div>`;
if (!html.includes('class="cyber-circle-bg-container"')) {
  html = html.replace(partnersTarget, partnersTarget + '\n' + hudSvgMarkup);
  console.log('Added HUD SVG markup into .partners-bar in AFA-Technologies-Website.html');
}

fs.writeFileSync('AFA-Technologies-Website.html', html, 'utf8');
console.log('Successfully saved AFA-Technologies-Website.html');
