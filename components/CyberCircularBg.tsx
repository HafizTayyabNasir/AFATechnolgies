import React from "react";

export default function CyberCircularBg({ className = "" }: { className?: string }) {
  return (
    <div className={`cyber-circle-bg-container ${className}`} aria-hidden="true">
      {/* Ambient background glow */}
      <div className="cyber-circle-radial-glow" />

      <svg
        className="cyber-circle-svg"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Futuristic Emerald to Cyan to Azure Gradients matching reference */}
          <linearGradient id="hudGradEmeraldCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#00f5ff" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#00bdf2" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="hudGradCyanBlue" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#0284c7" stopOpacity="0.65" />
            <stop offset="80%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="hudGradAccent" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#00bdf2" stopOpacity="0.3" />
          </linearGradient>

          <radialGradient id="hudCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
            <stop offset="35%" stopColor="#00bdf2" stopOpacity="0.12" />
            <stop offset="70%" stopColor="#2563eb" stopOpacity="0.05" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Core Radial Atmosphere Glow */}
        <circle cx="450" cy="450" r="420" fill="url(#hudCoreGlow)" />

        {/* LAYER 1: Outermost Telemetry Track (Clockwise, 60s) */}
        <g className="hud-layer hud-layer--outer-cw">
          {/* Outer thin guide track */}
          <circle
            cx="450"
            cy="450"
            r="425"
            stroke="rgba(0, 189, 242, 0.15)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />

          {/* Segmented Heavy Blocks */}
          <circle
            cx="450"
            cy="450"
            r="408"
            stroke="url(#hudGradEmeraldCyan)"
            strokeWidth="14"
            strokeDasharray="180 50 70 30 240 60 90 40 140 70"
            strokeLinecap="round"
          />

          {/* Satellite Data Markers */}
          <circle
            cx="450"
            cy="450"
            r="392"
            stroke="rgba(16, 185, 129, 0.55)"
            strokeWidth="3"
            strokeDasharray="8 24 16 32 30 40"
          />
        </g>

        {/* LAYER 2: High-Density Radial Tick-Mark Comb Dial (Counter-Clockwise, 40s) */}
        <g className="hud-layer hud-layer--ticks-ccw">
          {/* Dense Comb Marks Ring 1 (Radius 365) */}
          <circle
            cx="450"
            cy="450"
            r="365"
            stroke="url(#hudGradCyanBlue)"
            strokeWidth="10"
            strokeDasharray="2.5 5.5"
            strokeOpacity="0.75"
          />

          {/* Secondary Comb Marks Ring 2 (Radius 348) */}
          <circle
            cx="450"
            cy="450"
            r="348"
            stroke="rgba(0, 245, 255, 0.6)"
            strokeWidth="6"
            strokeDasharray="1.8 4.2"
          />

          {/* Outer Boundary Guide */}
          <circle
            cx="450"
            cy="450"
            r="374"
            stroke="rgba(37, 99, 235, 0.35)"
            strokeWidth="1"
          />
          <circle
            cx="450"
            cy="450"
            r="339"
            stroke="rgba(16, 185, 129, 0.3)"
            strokeWidth="1"
          />
        </g>

        {/* LAYER 3: Middle Segmented Arc Blocks & Circuit Dashes (Clockwise, 28s) */}
        <g className="hud-layer hud-layer--middle-cw">
          {/* Bold Emerald/Cyan Curved Blocks */}
          <circle
            cx="450"
            cy="450"
            r="310"
            stroke="url(#hudGradAccent)"
            strokeWidth="18"
            strokeDasharray="140 40 210 55 60 35 110 45"
            strokeLinecap="round"
          />

          {/* Fine telemetry track */}
          <circle
            cx="450"
            cy="450"
            r="288"
            stroke="rgba(0, 189, 242, 0.5)"
            strokeWidth="2.5"
            strokeDasharray="40 12 80 18 20 10"
          />

          {/* Dotted Accent Orbit */}
          <circle
            cx="450"
            cy="450"
            r="272"
            stroke="rgba(0, 245, 255, 0.45)"
            strokeWidth="4"
            strokeDasharray="6 14"
          />
        </g>

        {/* LAYER 4: Inner Radar Comb & Precision Telemetry (Counter-Clockwise, 20s) */}
        <g className="hud-layer hud-layer--inner-ccw">
          {/* Dense Inner Radial Ticks */}
          <circle
            cx="450"
            cy="450"
            r="240"
            stroke="url(#hudGradEmeraldCyan)"
            strokeWidth="8"
            strokeDasharray="2 4"
            strokeOpacity="0.8"
          />

          {/* Segmented Data Blocks */}
          <circle
            cx="450"
            cy="450"
            r="215"
            stroke="url(#hudGradCyanBlue)"
            strokeWidth="12"
            strokeDasharray="90 30 140 45 50 25"
            strokeLinecap="round"
          />

          {/* Fine Guide Line */}
          <circle
            cx="450"
            cy="450"
            r="192"
            stroke="rgba(16, 185, 129, 0.4)"
            strokeWidth="1.5"
            strokeDasharray="25 15 50 20"
          />
        </g>

        {/* LAYER 5: Core Targeting Reticle & Nodes (Clockwise, 14s) */}
        <g className="hud-layer hud-layer--core-cw">
          {/* Inner Arc Cluster */}
          <circle
            cx="450"
            cy="450"
            r="160"
            stroke="url(#hudGradAccent)"
            strokeWidth="6"
            strokeDasharray="60 25 90 35 40 20"
            strokeLinecap="round"
          />

          {/* Fine Core Orbit */}
          <circle
            cx="450"
            cy="450"
            r="135"
            stroke="rgba(0, 245, 255, 0.6)"
            strokeWidth="2"
            strokeDasharray="4 8"
          />

          {/* Central Crosshairs (Axis ticks) */}
          <line x1="450" y1="300" x2="450" y2="330" stroke="rgba(0, 189, 242, 0.55)" strokeWidth="2" />
          <line x1="450" y1="570" x2="450" y2="600" stroke="rgba(0, 189, 242, 0.55)" strokeWidth="2" />
          <line x1="300" y1="450" x2="330" y2="450" stroke="rgba(0, 189, 242, 0.55)" strokeWidth="2" />
          <line x1="570" y1="450" x2="600" y2="450" stroke="rgba(0, 189, 242, 0.55)" strokeWidth="2" />

          {/* Center Beacon Node */}
          <circle cx="450" cy="450" r="18" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" strokeWidth="2" />
          <circle cx="450" cy="450" r="6" fill="#00f5ff" />
        </g>
      </svg>
    </div>
  );
}
