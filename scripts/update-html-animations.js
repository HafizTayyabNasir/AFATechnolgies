const fs = require('fs');

let html = fs.readFileSync('AFA-Technologies-Website.html', 'utf8');

// 1. Add scroll-progress-bar right after <body>
if (!html.includes('id="scroll-progress-bar"')) {
  html = html.replace('<body>', '<body>\n<div id="scroll-progress-bar" class="scroll-progress-bar" aria-hidden="true"></div>');
}

// 2. Update CSS in <style>
const oldCssBlock = `/* Entrance Scroll Reveal */
.reveal{
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.reveal.is-visible{
  opacity: 1;
  transform: translateY(0);
}

.reveal-scale{
  opacity: 0;
  transform: scale(0.94);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.reveal-scale.is-visible{
  opacity: 1;
  transform: scale(1);
}

/* Stagger Children Delays */
.reveal-stagger > *:nth-child(1){ transition-delay: 0.04s; }
.reveal-stagger > *:nth-child(2){ transition-delay: 0.12s; }
.reveal-stagger > *:nth-child(3){ transition-delay: 0.20s; }
.reveal-stagger > *:nth-child(4){ transition-delay: 0.28s; }
.reveal-stagger > *:nth-child(5){ transition-delay: 0.36s; }
.reveal-stagger > *:nth-child(6){ transition-delay: 0.44s; }`;

const newCssBlock = `/* Slim Executive Scroll Progress Indicator */
.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: linear-gradient(90deg, #00bdf2 0%, #2563eb 50%, #00f5ff 100%);
  box-shadow: 0 0 10px rgba(0, 189, 242, 0.7);
  z-index: 9999;
  transition: width 0.08s ease-out;
  pointer-events: none;
}

/* Hero Initial Page-Load Slide Animations */
@keyframes heroSlideInLeft {
  0% { opacity: 0; transform: translateX(-48px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes heroSlideInRight {
  0% { opacity: 0; transform: translateX(48px); }
  100% { opacity: 1; transform: translateX(0); }
}
.hero-slide-in-left {
  animation: heroSlideInLeft 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.hero-slide-in-right {
  animation: heroSlideInRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
}

/* Entrance Scroll Reveal */
.reveal{
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}
.reveal.is-visible{
  opacity: 1;
  transform: translateY(0);
}
.reveal-slide-up{
  opacity: 0;
  transform: translateY(42px);
  transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}
.reveal-slide-up.is-visible{
  opacity: 1;
  transform: translateY(0);
}
.reveal-scale{
  opacity: 0;
  transform: scale(0.92) translateY(20px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}
.reveal-scale.is-visible{
  opacity: 1;
  transform: scale(1) translateY(0);
}
.reveal-slide-left{
  opacity: 0;
  transform: translateX(-48px);
  transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}
.reveal-slide-left.is-visible{
  opacity: 1;
  transform: translateX(0);
}
.reveal-slide-right{
  opacity: 0;
  transform: translateX(48px);
  transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}
.reveal-slide-right.is-visible{
  opacity: 1;
  transform: translateX(0);
}

/* Stagger Children Entrance */
.reveal-stagger > * {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
  will-change: opacity, transform;
}
.reveal-stagger.is-visible > * {
  opacity: 1;
  transform: translateY(0);
}
.reveal-stagger > *:nth-child(1){ transition-delay: 0.06s; }
.reveal-stagger > *:nth-child(2){ transition-delay: 0.16s; }
.reveal-stagger > *:nth-child(3){ transition-delay: 0.26s; }
.reveal-stagger > *:nth-child(4){ transition-delay: 0.36s; }
.reveal-stagger > *:nth-child(5){ transition-delay: 0.46s; }
.reveal-stagger > *:nth-child(6){ transition-delay: 0.56s; }
.reveal-stagger > *:nth-child(7){ transition-delay: 0.66s; }
.reveal-stagger > *:nth-child(8){ transition-delay: 0.76s; }

/* Continuous Animated Laser on Process Timeline */
.process-track-base {
  position: absolute;
  inset: 0;
  background: #cbd5e1;
  border-radius: 999px;
  overflow: hidden;
}
.process-track-base::after {
  content: '';
  position: absolute;
  top: 0;
  left: -25%;
  width: 25%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #00bdf2, #2563eb, transparent);
  box-shadow: 0 0 10px #00bdf2;
  animation: processLaserTrack 3.4s ease-in-out infinite;
}
@keyframes processLaserTrack {
  0% { left: -25%; }
  100% { left: 125%; }
}`;

if (html.includes(oldCssBlock)) {
  html = html.replace(oldCssBlock, newCssBlock);
  console.log('Replaced old CSS block');
} else {
  console.log('Old CSS block not matched verbatim, checking...');
}

// 3. Remove duplicate reveal-slide-left and update reduced motion
const oldSlideBlock = `/* Sliding Scroll Reveal Variations */
.reveal-slide-left{
  opacity: 0;
  transform: translateX(-35px);
  transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}
.reveal-slide-left.is-visible{
  opacity: 1;
  transform: translateX(0);
}

.reveal-slide-right{
  opacity: 0;
  transform: translateX(35px);
  transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}
.reveal-slide-right.is-visible{
  opacity: 1;
  transform: translateX(0);
}

/* Reduced Motion */
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important;animation:none!important}.reveal, .reveal-scale{opacity:1!important;transform:none!important}}`;

const newReducedMotion = `/* Reduced Motion */
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important;animation:none!important}.reveal, .reveal-scale, .reveal-slide-left, .reveal-slide-right, .reveal-slide-up, .reveal-stagger > *{opacity:1!important;transform:none!important}}`;

if (html.includes(oldSlideBlock)) {
  html = html.replace(oldSlideBlock, newReducedMotion);
  console.log('Replaced old slide & reduced motion block');
}

// 4. Update script at bottom
const oldScript = `  /* Scroll reveal animations (Accelerec / Najoomi style) */
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var revealObserver = new IntersectionObserver(function(entries, obs){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {rootMargin: '0px 0px -50px 0px', threshold: 0.1});
    document.querySelectorAll('.reveal, .reveal-scale').forEach(function(el){
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal, .reveal-scale').forEach(function(el){
      el.classList.add('is-visible');
    });
  }`;

const newScript = `  /* Top Scroll Progress Tracker */
  window.addEventListener('scroll', function(){
    var st = window.scrollY || document.documentElement.scrollTop;
    var sh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var p = sh > 0 ? (st / sh) * 100 : 0;
    var bar = document.getElementById('scroll-progress-bar');
    if(bar) bar.style.width = p + '%';
  }, {passive: true});

  /* Scroll reveal animations (Accelerec / Najoomi style) */
  var revealSelectors = '.reveal, .reveal-scale, .reveal-slide-left, .reveal-slide-right, .reveal-slide-up, .reveal-stagger';
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var revealObserver = new IntersectionObserver(function(entries, obs){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {rootMargin: '0px 0px -40px 0px', threshold: 0.08});
    document.querySelectorAll(revealSelectors).forEach(function(el){
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll(revealSelectors).forEach(function(el){
      el.classList.add('is-visible');
    });
  }`;

if (html.includes(oldScript)) {
  html = html.replace(oldScript, newScript);
  console.log('Replaced old script block');
}

// 5. Update component classes in HTML
// Hero
html = html.replace('<div class="hero-copy">', '<div class="hero-copy hero-slide-in-left">');
html = html.replace('<div class="hero-form-card"', '<div class="hero-form-card hero-slide-in-right"');

// Proof
html = html.replace('<div class="partners-bar-header reveal">', '<div class="partners-bar-header reveal-slide-up">');
html = html.replace('<div class="partners-live-capabilities reveal">', '<div class="partners-live-capabilities reveal-slide-up">');

// Client Impact
html = html.replace('<div class="section-head reveal">\n        <h2>Real partners', '<div class="section-head reveal-slide-up">\n        <h2>Real partners');
html = html.replace('<aside class="accel-tablist-sidebar">', '<aside class="accel-tablist-sidebar reveal-slide-left">');
html = html.replace('<div class="accel-showcase-container">', '<div class="accel-showcase-container reveal-slide-right">');

// Process
html = html.replace('<div class="section-head text-center reveal">\n        <h2>From kickoff', '<div class="section-head text-center reveal-slide-up">\n        <h2>From kickoff');
html = html.replace('<div class="process-cta-wrap reveal">', '<div class="process-cta-wrap reveal-slide-up">');

// Advantage
html = html.replace('<div class="section-head text-center reveal">\n        <h2>Scaling B2B', '<div class="section-head text-center reveal-slide-up">\n        <h2>Scaling B2B');
html = html.replace('<div class="battle-vs-badge" aria-hidden="true">VS</div>', '<div class="battle-vs-badge reveal-scale" aria-hidden="true">VS</div>');
html = html.replace('<div class="battle-card battle-card--traditional">', '<div class="battle-card battle-card--traditional reveal-slide-left">');
html = html.replace('<div class="battle-card battle-card--afa">', '<div class="battle-card battle-card--afa reveal-slide-right">');
html = html.replace('<div class="battle-banner reveal">', '<div class="battle-banner reveal-slide-up">');

// Why AFA
html = html.replace('<aside class="cover reveal-scale"', '<aside class="cover reveal-slide-right"');

// About
html = html.replace('<div class="about-office-card reveal-scale">', '<div class="about-office-card reveal-scale">');
html = html.replace('<ul class="principles reveal reveal-stagger">', '<ul class="principles reveal-slide-right reveal-stagger">');

// Contact
html = html.replace('<div class="contact-copy reveal">', '<div class="contact-copy reveal-slide-left">');
html = html.replace('<div class="form-card reveal-scale">', '<div class="form-card reveal-slide-right">');

fs.writeFileSync('AFA-Technologies-Website.html', html, 'utf8');
console.log('Successfully updated animations in AFA-Technologies-Website.html');
