// High-fidelity vector SVGs for character portraits
export const PORTRAIT_SVGS = {
  peter: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 380" width="100%" height="100%">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%23c8cbd0"/>
        <stop offset="100%" stop-color="%239da2aa"/>
      </linearGradient>
      <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%23eed1be"/>
        <stop offset="100%" stop-color="%23d6a892"/>
      </linearGradient>
      <linearGradient id="hair" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%233b261b"/>
        <stop offset="100%" stop-color="%231e130c"/>
      </linearGradient>
      <linearGradient id="suit" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%231a1e24"/>
        <stop offset="100%" stop-color="%230c0e12"/>
      </linearGradient>
    </defs>
    <rect width="300" height="380" fill="url(%23bg)"/>
    <!-- Suit Shoulders & Jacket -->
    <path d="M40 380 C40 300 70 270 110 260 L125 380 Z" fill="url(%23suit)"/>
    <path d="M260 380 C260 300 230 270 190 260 L175 380 Z" fill="url(%23suit)"/>
    <!-- White Dress Shirt -->
    <path d="M110 260 L150 330 L190 260 L170 230 L130 230 Z" fill="%23f8fafc"/>
    <path d="M130 230 L150 290 L170 230 Z" fill="%23e2e8f0"/>
    <!-- Suit Lapels -->
    <path d="M90 380 L115 255 L145 320 L135 380 Z" fill="%2313171d"/>
    <path d="M210 380 L185 255 L155 320 L165 380 Z" fill="%2313171d"/>
    <!-- Neck -->
    <path d="M126 210 L126 260 C138 272 162 272 174 260 L174 210 Z" fill="url(%23skin)"/>
    <path d="M132 230 C145 242 155 242 168 230 L168 250 C155 258 145 258 132 250 Z" fill="%23c49079" opacity="0.6"/>
    <!-- Head Base -->
    <path d="M102 145 C102 85 198 85 198 145 C198 195 185 235 150 238 C115 235 102 195 102 145 Z" fill="url(%23skin)"/>
    <!-- Ears -->
    <ellipse cx="98" cy="160" rx="9" ry="16" fill="%23d6a892"/>
    <ellipse cx="202" cy="160" rx="9" ry="16" fill="%23d6a892"/>
    <!-- Eyes & Eyebrows -->
    <path d="M118 142 Q132 136 142 140" stroke="%232b1b12" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M158 140 Q168 136 182 142" stroke="%232b1b12" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="130" cy="152" rx="6" ry="4.5" fill="%23ffffff"/>
    <circle cx="130" cy="152" r="3.2" fill="%233e2718"/>
    <circle cx="131" cy="151" r="1.1" fill="%23000"/>
    <circle cx="129" cy="150" r="0.9" fill="%23fff"/>
    <ellipse cx="170" cy="152" rx="6" ry="4.5" fill="%23ffffff"/>
    <circle cx="170" cy="152" r="3.2" fill="%233e2718"/>
    <circle cx="171" cy="151" r="1.1" fill="%23000"/>
    <circle cx="169" cy="150" r="0.9" fill="%23fff"/>
    <!-- Nose -->
    <path d="M149 148 L147 178 L154 179" stroke="%23b87d65" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- Mouth -->
    <path d="M136 198 Q150 203 164 198" stroke="%239d5648" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M142 205 Q150 208 158 205" stroke="%23b87d65" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <!-- Signature Tousled Hair (Andrew Garfield style) -->
    <path d="M96 140 C92 90 110 50 150 45 C195 40 215 80 206 140 C216 110 208 65 178 50 C140 40 108 70 96 140 Z" fill="url(%23hair)"/>
    <path d="M102 120 C110 80 140 55 170 58 C185 60 200 75 198 100 C190 75 165 65 140 68 C120 70 106 90 102 120 Z" fill="%23533726"/>
    <path d="M96 145 C92 125 102 95 125 85 C140 90 120 105 110 125 C105 135 100 145 96 145 Z" fill="%232b1b12"/>
    <path d="M190 120 C205 110 205 85 190 70 C195 85 185 105 175 115 Z" fill="%232b1b12"/>
  </svg>`,

  osborn: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 380" width="100%" height="100%">
    <defs>
      <linearGradient id="bg_o" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%231a231f"/>
        <stop offset="100%" stop-color="%230f1412"/>
      </linearGradient>
      <linearGradient id="skin_o" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%23e8caa8"/>
        <stop offset="100%" stop-color="%23cb9e7b"/>
      </linearGradient>
      <linearGradient id="suit_o" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%23161c24"/>
        <stop offset="100%" stop-color="%230b0e12"/>
      </linearGradient>
    </defs>
    <rect width="300" height="380" fill="url(%23bg_o)"/>
    <!-- Subtle Emerald Halo -->
    <circle cx="150" cy="150" r="110" fill="%23059669" opacity="0.12"/>
    <!-- Executive Pinstripe Suit -->
    <path d="M30 380 C30 290 65 260 110 250 L125 380 Z" fill="url(%23suit_o)"/>
    <path d="M270 380 C270 290 235 260 190 250 L175 380 Z" fill="url(%23suit_o)"/>
    <!-- Crisp White Collar and Emerald Tie -->
    <path d="M115 250 L150 310 L185 250 L170 225 L130 225 Z" fill="%23ffffff"/>
    <path d="M142 245 L158 245 L154 380 L146 380 Z" fill="%23047857"/>
    <!-- Lapels -->
    <path d="M85 380 L115 245 L142 305 L135 380 Z" fill="%23222b35"/>
    <path d="M215 380 L185 245 L158 305 L165 380 Z" fill="%23222b35"/>
    <!-- Neck -->
    <path d="M128 200 L128 250 C140 260 160 260 172 250 L172 200 Z" fill="url(%23skin_o)"/>
    <!-- Head Base with angular jaw -->
    <path d="M104 140 C104 75 196 75 196 140 C196 195 180 232 150 234 C120 232 104 195 104 140 Z" fill="url(%23skin_o)"/>
    <!-- Distinctive Osborn Cheekbones and Creases -->
    <path d="M115 165 Q125 185 130 198" stroke="%23b87d65" stroke-width="2" fill="none" opacity="0.6"/>
    <path d="M185 165 Q175 185 170 198" stroke="%23b87d65" stroke-width="2" fill="none" opacity="0.6"/>
    <!-- Eyes - Piercing and focused -->
    <path d="M116 138 Q130 128 144 135" stroke="%233a2818" stroke-width="3" fill="none"/>
    <path d="M156 135 Q170 128 184 138" stroke="%233a2818" stroke-width="3" fill="none"/>
    <ellipse cx="130" cy="148" rx="5" ry="4" fill="%23fff"/>
    <circle cx="130" cy="148" r="3" fill="%233d5a45"/>
    <circle cx="130" cy="148" r="1.2" fill="%23000"/>
    <ellipse cx="170" cy="148" rx="5" ry="4" fill="%23fff"/>
    <circle cx="170" cy="148" r="3" fill="%233d5a45"/>
    <circle cx="170" cy="148" r="1.2" fill="%23000"/>
    <!-- Nose - Sharp bridge -->
    <path d="M150 140 L146 172 L155 174" stroke="%23ad7052" stroke-width="2.5" fill="none"/>
    <!-- Smile / Smirk -->
    <path d="M132 195 Q150 198 168 192" stroke="%23853b31" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <!-- Brushed back reddish-brown hair with graying temples -->
    <path d="M102 135 C98 80 115 42 150 40 C190 42 204 80 198 135 C208 95 190 55 150 50 C110 55 98 95 102 135 Z" fill="%234a2e1b"/>
    <path d="M100 130 C106 100 125 70 150 68 C175 70 194 100 200 130 C192 90 170 78 150 78 C130 78 108 90 100 130 Z" fill="%23684126"/>
    <!-- Silver highlights on temples -->
    <path d="M103 135 C102 115 110 100 118 90" stroke="%2394a3b8" stroke-width="2" fill="none" opacity="0.6"/>
    <path d="M197 135 C198 115 190 100 182 90" stroke="%2394a3b8" stroke-width="2" fill="none" opacity="0.6"/>
  </svg>`,

  octavius: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 380" width="100%" height="100%">
    <defs>
      <linearGradient id="bg_oct" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%2324201c"/>
        <stop offset="100%" stop-color="%23141210"/>
      </linearGradient>
      <linearGradient id="skin_oct" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%23ebd3bd"/>
        <stop offset="100%" stop-color="%23cba386"/>
      </linearGradient>
      <linearGradient id="coat" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%232b2621"/>
        <stop offset="100%" stop-color="%23171412"/>
      </linearGradient>
    </defs>
    <rect width="300" height="380" fill="url(%23bg_oct)"/>
    <!-- Heavy Leather Trenchcoat -->
    <path d="M30 380 C30 280 70 250 110 245 L115 380 Z" fill="url(%23coat)"/>
    <path d="M270 380 C270 280 230 250 190 245 L185 380 Z" fill="url(%23coat)"/>
    <!-- Dark Turtle Neck / Inner Smock -->
    <path d="M110 245 L150 285 L190 245 L180 215 L120 215 Z" fill="%23191c22"/>
    <!-- Head & Neck -->
    <path d="M125 195 L125 240 C140 250 160 250 175 240 L175 195 Z" fill="url(%23skin_oct)"/>
    <!-- Rounder facial structure -->
    <path d="M102 145 C102 85 198 85 198 145 C198 200 182 235 150 238 C118 235 102 200 102 145 Z" fill="url(%23skin_oct)"/>
    <!-- Classic Round Goggles / Spectacles -->
    <circle cx="130" cy="150" r="16" stroke="%23d97706" stroke-width="3" fill="%23ffffff" fill-opacity="0.2"/>
    <circle cx="170" cy="150" r="16" stroke="%23d97706" stroke-width="3" fill="%23ffffff" fill-opacity="0.2"/>
    <path d="M146 150 L154 150" stroke="%23d97706" stroke-width="3"/>
    <path d="M114 150 L102 148" stroke="%23d97706" stroke-width="2"/>
    <path d="M186 150 L198 148" stroke="%23d97706" stroke-width="2"/>
    <!-- Eyes behind glass -->
    <circle cx="130" cy="150" r="4" fill="%23332115"/>
    <circle cx="131" cy="149" r="1.2" fill="%23fff"/>
    <circle cx="170" cy="150" r="4" fill="%23332115"/>
    <circle cx="171" cy="149" r="1.2" fill="%23fff"/>
    <!-- Nose & Mouth -->
    <path d="M150 148 L147 176 L155 178" stroke="%23b87d65" stroke-width="2.5" fill="none"/>
    <path d="M136 198 Q150 200 164 198" stroke="%23853b31" stroke-width="2.5" fill="none"/>
    <!-- Thick dark brown bowl/wavy hair -->
    <path d="M96 145 C94 90 110 50 150 48 C190 50 206 90 204 145 C208 120 196 68 150 62 C104 68 94 120 96 145 Z" fill="%232b1b12"/>
    <path d="M98 120 C108 90 130 75 150 75 C170 75 192 90 202 120 C190 95 170 85 150 85 C130 85 110 95 98 120 Z" fill="%23422a1b"/>
  </svg>`,

  connors: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 380" width="100%" height="100%">
    <defs>
      <linearGradient id="bg_c" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%231e2924"/>
        <stop offset="100%" stop-color="%23101814"/>
      </linearGradient>
      <linearGradient id="skin_c" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%23f0d5c0"/>
        <stop offset="100%" stop-color="%23cca184"/>
      </linearGradient>
      <linearGradient id="labcoat" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%23f1f5f9"/>
        <stop offset="100%" stop-color="%23cbd5e1"/>
      </linearGradient>
    </defs>
    <rect width="300" height="380" fill="url(%23bg_c)"/>
    <!-- White Oscorp Lab Coat -->
    <path d="M30 380 C30 280 65 250 110 245 L115 380 Z" fill="url(%23labcoat)"/>
    <path d="M270 380 C270 280 235 250 190 245 L185 380 Z" fill="url(%23labcoat)"/>
    <!-- Blue Collared Shirt and Dark Tie -->
    <path d="M115 245 L150 310 L185 245 L170 220 L130 220 Z" fill="%2338bdf8"/>
    <path d="M144 240 L156 240 L153 380 L147 380 Z" fill="%231e293b"/>
    <!-- Head & Neck -->
    <path d="M126 195 L126 245 C140 255 160 255 174 245 L174 195 Z" fill="url(%23skin_c)"/>
    <path d="M104 140 C104 80 196 80 196 140 C196 195 180 230 150 234 C120 230 104 195 104 140 Z" fill="url(%23skin_c)"/>
    <!-- Intellectual, slightly weary expression -->
    <path d="M116 138 Q130 132 144 136" stroke="%23473123" stroke-width="2.8" fill="none"/>
    <path d="M156 136 Q170 132 184 138" stroke="%23473123" stroke-width="2.8" fill="none"/>
    <ellipse cx="130" cy="148" rx="5" ry="4" fill="%23fff"/>
    <circle cx="130" cy="148" r="3" fill="%233f5242"/>
    <circle cx="130" cy="148" r="1.1" fill="%23000"/>
    <ellipse cx="170" cy="148" rx="5" ry="4" fill="%23fff"/>
    <circle cx="170" cy="148" r="3" fill="%233f5242"/>
    <circle cx="170" cy="148" r="1.1" fill="%23000"/>
    <path d="M150 144 L146 172 L154 175" stroke="%23a86c4f" stroke-width="2.4" fill="none"/>
    <path d="M135 196 Q150 198 165 196" stroke="%23853b31" stroke-width="2.2" fill="none"/>
    <!-- Dirty Blonde / Light Brown Receding Hair -->
    <path d="M102 135 C98 85 118 45 150 45 C182 45 202 85 198 135 C204 100 188 60 150 58 C112 60 96 100 102 135 Z" fill="%236e5239"/>
    <path d="M102 120 C112 85 130 70 150 70 C170 70 188 85 198 120 C186 95 168 85 150 85 C132 85 114 95 102 120 Z" fill="%238a6a4d"/>
  </svg>`,

  stacy: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 380" width="100%" height="100%">
    <defs>
      <linearGradient id="bg_s" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%23cbd5e1"/>
        <stop offset="100%" stop-color="%2394a3b8"/>
      </linearGradient>
      <linearGradient id="skin_s" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%23fce7d2"/>
        <stop offset="100%" stop-color="%23e8be9e"/>
      </linearGradient>
      <linearGradient id="hair_s" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%23fef08a"/>
        <stop offset="100%" stop-color="%23eab308"/>
      </linearGradient>
    </defs>
    <rect width="300" height="380" fill="url(%23bg_s)"/>
    <!-- Lab coat over purple blouse -->
    <path d="M35 380 C35 285 70 255 110 250 L115 380 Z" fill="%23f8fafc"/>
    <path d="M265 380 C265 285 230 255 190 250 L185 380 Z" fill="%23f8fafc"/>
    <path d="M110 250 L150 315 L190 250 L170 225 L130 225 Z" fill="%237c3aed"/>
    <!-- Neck & Face -->
    <path d="M130 200 L130 245 C140 252 160 252 170 245 L170 200 Z" fill="url(%23skin_s)"/>
    <path d="M106 145 C106 88 194 88 194 145 C194 195 178 230 150 234 C122 230 106 195 106 145 Z" fill="url(%23skin_s)"/>
    <!-- Blue Eyes -->
    <path d="M120 142 Q132 136 142 140" stroke="%23854d0e" stroke-width="2.5" fill="none"/>
    <path d="M158 140 Q168 136 180 142" stroke="%23854d0e" stroke-width="2.5" fill="none"/>
    <ellipse cx="131" cy="151" rx="5.5" ry="4.5" fill="%23fff"/>
    <circle cx="131" cy="151" r="3.2" fill="%230284c7"/>
    <circle cx="131" cy="151" r="1.1" fill="%23000"/>
    <circle cx="130" cy="150" r="0.9" fill="%23fff"/>
    <ellipse cx="169" cy="151" rx="5.5" ry="4.5" fill="%23fff"/>
    <circle cx="169" cy="151" r="3.2" fill="%230284c7"/>
    <circle cx="169" cy="151" r="1.1" fill="%23000"/>
    <circle cx="168" cy="150" r="0.9" fill="%23fff"/>
    <!-- Nose & Smile -->
    <path d="M150 148 L147 172 L154 174" stroke="%23c48560" stroke-width="2.2" fill="none"/>
    <path d="M136 195 Q150 202 164 195" stroke="%23e11d48" stroke-width="2.4" fill="none"/>
    <!-- Blonde Hair with Bangs & Headband -->
    <path d="M92 155 C90 90 105 45 150 45 C195 45 210 90 208 155 C216 195 212 250 200 270 C194 250 196 170 192 145 C180 80 120 80 108 145 C104 170 106 250 100 270 C88 250 84 195 92 155 Z" fill="url(%23hair_s)"/>
    <!-- Black Headband -->
    <path d="M98 120 C108 80 192 80 202 120" stroke="%230f172a" stroke-width="7" fill="none"/>
    <!-- Straight Bangs -->
    <path d="M110 115 C118 135 140 136 150 134 C160 136 182 135 190 115 C175 125 155 126 150 125 C145 126 125 125 110 115 Z" fill="%23ca8a04"/>
  </svg>`,

  custom: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 380" width="100%" height="100%">
    <defs>
      <linearGradient id="bg_custom" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%231e242d"/>
        <stop offset="100%" stop-color="%230f1318"/>
      </linearGradient>
      <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%2310b981" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="%23059669" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="380" fill="url(%23bg_custom)"/>
    <circle cx="150" cy="160" r="90" fill="url(%23glow)"/>
    <!-- Tactical Silhouette -->
    <path d="M50 380 C50 300 80 265 150 260 C220 265 250 300 250 380 Z" fill="%23334155"/>
    <circle cx="150" cy="170" r="55" fill="%23334155"/>
    <!-- High-tech crosshair & scanning lines -->
    <circle cx="150" cy="170" r="75" stroke="%2310b981" stroke-dasharray="8 6" stroke-width="1.5" fill="none" opacity="0.6"/>
    <line x1="150" y1="70" x2="150" y2="90" stroke="%2310b981" stroke-width="2"/>
    <line x1="150" y1="250" x2="150" y2="270" stroke="%2310b981" stroke-width="2"/>
    <line x1="50" y1="170" x2="70" y2="170" stroke="%2310b981" stroke-width="2"/>
    <line x1="230" y1="170" x2="250" y2="170" stroke="%2310b981" stroke-width="2"/>
    <text x="150" y="340" fill="%2364748b" font-family="monospace" font-size="12" text-anchor="middle" letter-spacing="3">OPERATIVE PHOTO REQUIRED</text>
  </svg>`
};
