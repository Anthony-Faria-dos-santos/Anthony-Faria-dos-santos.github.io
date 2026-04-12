const fs = require("fs");
const path = require("path");

// Création du dossier assets s'il n'existe pas
const assetsDir = path.join(__dirname, "assets");
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Définition de tous les fichiers et de leur contenu
const files = {
  "assets/header.svg": `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 120" width="800" height="120">
  <text x="400" y="60" font-family="monospace" font-size="32" fill="#f1f5f9" font-weight="bold" text-anchor="middle">Anthony Faria Dos Santos</text>
  <text x="400" y="90" font-family="monospace" font-size="14" fill="#6ee7b7" text-anchor="middle">&gt; Fullstack JS | Cybersécurité | ESIEE-IT 2026 _</text>
</svg>
  `,

  "assets/about.svg": `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" width="800" height="240">
  <text x="400" y="30" font-family="monospace" font-size="14" fill="#64748b" text-anchor="middle" letter-spacing="2">ABOUT_ME</text>
  <rect x="40" y="50" width="720" height="170" rx="8" fill="#161b27" stroke="#334155" stroke-width="1" opacity="0.9"/>
  <text x="70" y="85" font-family="monospace" font-size="13" fill="#818cf8">const</text>
  <text x="115" y="85" font-family="monospace" font-size="13" fill="#f1f5f9">profil</text>
  <text x="165" y="85" font-family="monospace" font-size="13" fill="#818cf8">=</text>
  <text x="180" y="85" font-family="monospace" font-size="13" fill="#f1f5f9">{</text>
  <text x="90" y="115" font-family="monospace" font-size="13" fill="#6ee7b7">status:</text>
  <text x="160" y="115" font-family="monospace" font-size="13" fill="#fbbf24">"Reconversion après 18 ans en industrie"</text>
  <text x="485" y="115" font-family="monospace" font-size="13" fill="#f1f5f9">,</text>
  <text x="90" y="140" font-family="monospace" font-size="13" fill="#6ee7b7">recherche:</text>
  <text x="180" y="140" font-family="monospace" font-size="13" fill="#fbbf24">"Alternance 1 an (Septembre 2026)"</text>
  <text x="450" y="140" font-family="monospace" font-size="13" fill="#f1f5f9">,</text>
  <text x="90" y="165" font-family="monospace" font-size="13" fill="#6ee7b7">atouts:</text>
  <text x="155" y="165" font-family="monospace" font-size="13" fill="#f1f5f9">[</text>
  <text x="165" y="165" font-family="monospace" font-size="13" fill="#fbbf24">"RQTH : Aides maximales"</text>
  <text x="360" y="165" font-family="monospace" font-size="13" fill="#f1f5f9">, </text>
  <text x="375" y="165" font-family="monospace" font-size="13" fill="#fbbf24">"Expérience terrain"</text>
  <text x="535" y="165" font-family="monospace" font-size="13" fill="#f1f5f9">]</text>
  <text x="70" y="200" font-family="monospace" font-size="13" fill="#f1f5f9">};</text>
</svg>
  `,

  "assets/skills.svg": `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 280" width="800" height="280">
  <text x="400" y="30" font-family="monospace" font-size="14" fill="#64748b" text-anchor="middle" letter-spacing="2">TECHNICAL_STACK</text>
  <rect x="40" y="60" width="720" height="50" rx="8" fill="#161b27" stroke="#6ee7b7" stroke-width="1" opacity="0.9"/>
  <text x="60" y="90" font-family="monospace" font-size="12" fill="#6ee7b7">Cybersécurité</text>
  <text x="180" y="90" font-family="monospace" font-size="12" fill="#94a3b8">| Linux · Kali · Suricata · Wireshark · ELK · MISP · TheHive</text>
  <rect x="40" y="130" width="720" height="50" rx="8" fill="#161b27" stroke="#818cf8" stroke-width="1" opacity="0.9"/>
  <text x="60" y="160" font-family="monospace" font-size="12" fill="#818cf8">Développement</text>
  <text x="180" y="160" font-family="monospace" font-size="12" fill="#94a3b8">| TypeScript · React · Next.js · Node.js · Prisma · Docker</text>
  <rect x="40" y="200" width="720" height="50" rx="8" fill="#161b27" stroke="#fbbf24" stroke-width="1" opacity="0.9"/>
  <text x="60" y="230" font-family="monospace" font-size="12" fill="#fbbf24">Sys &amp; Réseaux</text>
  <text x="180" y="230" font-family="monospace" font-size="12" fill="#94a3b8">| Bash · Git · Cisco IOS · Containerlab · GNS3</text>
</svg>
  `,

  "assets/certs.svg": `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 160" width="800" height="160">
  <text x="400" y="30" font-family="monospace" font-size="14" fill="#64748b" text-anchor="middle" letter-spacing="2">CERTIFICATIONS</text>
  <rect x="40" y="60" width="340" height="80" rx="8" fill="#161b27" stroke="#6ee7b7" stroke-width="1" opacity="0.9"/>
  <text x="60" y="90" font-family="monospace" font-size="14" fill="#f1f5f9" font-weight="bold">CCNA 200-301</text>
  <text x="60" y="115" font-family="monospace" font-size="11" fill="#94a3b8">En préparation · Été 2026</text>
  <rect x="280" y="75" width="80" height="20" rx="10" fill="#052e1a"/>
  <text x="320" y="89" font-family="monospace" font-size="9" fill="#6ee7b7" text-anchor="middle">IN_PROG</text>
  <rect x="420" y="60" width="340" height="80" rx="8" fill="#161b27" stroke="#818cf8" stroke-width="1" opacity="0.9"/>
  <text x="440" y="90" font-family="monospace" font-size="14" fill="#f1f5f9" font-weight="bold">CCNP Enterprise</text>
  <text x="440" y="115" font-family="monospace" font-size="11" fill="#94a3b8">Infrastructure &amp; Sécurité</text>
  <rect x="670" y="75" width="70" height="20" rx="10" fill="#1a1040"/>
  <text x="705" y="89" font-family="monospace" font-size="9" fill="#818cf8" text-anchor="middle">OBJ_2027</text>
</svg>
  `,

  "assets/proj_soc.svg": `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 120" width="390" height="120">
  <rect x="5" y="5" width="380" height="110" rx="8" fill="#161b27" stroke="#6ee7b7" stroke-width="1" opacity="0.9"/>
  <text x="20" y="30" font-family="monospace" font-size="14" fill="#f1f5f9" font-weight="bold">🔴 Mini SOC</text>
  <text x="20" y="50" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Infra de détection from scratch.</text>
  <text x="20" y="65" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Logs réseau → corrélation → réponse.</text>
  <text x="20" y="95" font-family="monospace" font-size="10" fill="#6ee7b7">#Suricata #ELK #MISP #TheHive</text>
</svg>
  `,

  "assets/proj_cve.svg": `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 120" width="390" height="120">
  <rect x="5" y="5" width="380" height="110" rx="8" fill="#161b27" stroke="#818cf8" stroke-width="1" opacity="0.9"/>
  <text x="20" y="30" font-family="monospace" font-size="14" fill="#f1f5f9" font-weight="bold">🟣 CVE Signal Dashboard</text>
  <text x="20" y="50" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Dashboard de scoring et filtrage</text>
  <text x="20" y="65" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">de vulnérabilités selon le contexte.</text>
  <text x="20" y="95" font-family="monospace" font-size="10" fill="#818cf8">#Next.js #Prisma #TypeScript</text>
</svg>
  `,

  "assets/proj_wwm.svg": `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 120" width="390" height="120">
  <rect x="5" y="5" width="380" height="110" rx="8" fill="#161b27" stroke="#fbbf24" stroke-width="1" opacity="0.9"/>
  <text x="20" y="30" font-family="monospace" font-size="14" fill="#f1f5f9" font-weight="bold">🟡 WWM Calculator</text>
  <text x="20" y="50" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Projet fin de formation CI/CD.</text>
  <text x="20" y="65" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">18 400 lignes, 412 tests de couverture.</text>
  <text x="20" y="95" font-family="monospace" font-size="10" fill="#fbbf24">#TypeScript #Next.js #Jest</text>
</svg>
  `,

  "assets/proj_misp.svg": `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 120" width="390" height="120">
  <rect x="5" y="5" width="380" height="110" rx="8" fill="#161b27" stroke="#818cf8" stroke-width="1" opacity="0.9"/>
  <text x="20" y="30" font-family="monospace" font-size="14" fill="#f1f5f9" font-weight="bold">🔵 Analyse Phishing MISP</text>
  <text x="20" y="50" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Reconstitution de campagne de phishing.</text>
  <text x="20" y="65" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Enrichissement IOCs &amp; partage CTI.</text>
  <text x="20" y="95" font-family="monospace" font-size="10" fill="#818cf8">#MISP #Python #CTI</text>
</svg>
  `,

  "assets/proj_motion.svg": `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 120" width="390" height="120">
  <rect x="5" y="5" width="380" height="110" rx="8" fill="#161b27" stroke="#64748b" stroke-width="1" opacity="0.9"/>
  <text x="20" y="30" font-family="monospace" font-size="14" fill="#f1f5f9" font-weight="bold">⚪ Motion Detection</text>
  <text x="20" y="50" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Pipeline Computer Vision (MOG2 → YOLO).</text>
  <text x="20" y="65" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Système de détection et tracking pur.</text>
  <text x="20" y="95" font-family="monospace" font-size="10" fill="#64748b">#Python #YOLOv8 #DeepSORT</text>
</svg>
  `,

  "README.md": `
<div align="center">

<!-- HEADER -->
<img src="./assets/header.svg" alt="Anthony Faria Dos Santos" />

<!-- BADGES SOCIAUX -->
[![Portfolio](https://img.shields.io/badge/Portfolio-afds--wine.vercel.app-6ee7b7?style=flat&logo=vercel&logoColor=6ee7b7&labelColor=0b0b12)](https://afds-wine.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profil-818cf8?style=flat&logo=linkedin&logoColor=818cf8&labelColor=0b0b12)](https://linkedin.com/in/anthony-faria-dos-santos)
[![Email](https://img.shields.io/badge/Email-Contact-fbbf24?style=flat&logo=gmail&logoColor=fbbf24&labelColor=0b0b12)](mailto:Anthony.devfsjs@gmail.com)

<br>

<!-- A PROPOS & STACK -->
<img src="./assets/about.svg" alt="À propos" />
<img src="./assets/skills.svg" alt="Compétences" />

<br><br>

<!-- PROJETS (Grille 2x2 cliquable) -->
<img src="https://raw.githubusercontent.com/Anthony-Faria-dos-santos/Anthony-Faria-dos-santos.github.io/main/assets/blank.png" width="800" height="1" />
<h3 align="center" style="font-family: monospace; color: #64748b; letter-spacing: 2px;">PROJECTS</h3>

<a href="#"><img src="./assets/proj_soc.svg" alt="Mini SOC"/></a>
<a href="https://github.com/Anthony-Faria-dos-santos/cve-signal-Dashboard"><img src="./assets/proj_cve.svg" alt="CVE Dashboard"/></a>

<a href="https://github.com/Anthony-Faria-dos-santos/WWM_Ultimate_calculator"><img src="./assets/proj_wwm.svg" alt="WWM Calculator"/></a>
<a href="https://github.com/Anthony-Faria-dos-santos/MISP-Personnal-Student-Project"><img src="./assets/proj_misp.svg" alt="MISP Phishing"/></a>

<a href="https://github.com/Anthony-Faria-dos-santos/Project-Motion-Detection-System"><img src="./assets/proj_motion.svg" alt="Motion Detection"/></a>

<br><br>

<!-- CERTIFICATIONS & TIMELINE -->
<img src="./assets/certs.svg" alt="Certifications" />

<img src="https://raw.githubusercontent.com/Anthony-Faria-dos-santos/Anthony-Faria-dos-santos.github.io/main/assets/timeline.svg" alt="Parcours" />

<br><br>

<!-- STATS GITHUB (Theme Tokyonight) -->
[![](https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Anthony-Faria-dos-santos&theme=tokyonight)](https://github.com/Anthony-Faria-dos-santos)

[![](https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Anthony-Faria-dos-santos&theme=tokyonight)](https://github.com/Anthony-Faria-dos-santos)
[![](https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Anthony-Faria-dos-santos&theme=tokyonight)](https://github.com/Anthony-Faria-dos-santos)

![Visitors](https://komarev.com/ghpvc/?username=Anthony-Faria-dos-santos&color=6ee7b7&style=flat&label=Visiteurs)

</div>
  `,
};

// Écriture de chaque fichier
for (const [filepath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filepath);
  fs.writeFileSync(fullPath, content.trim(), "utf8");
  console.log(` Créé : ${filepath}`);
}

console.log(" Tout est prêt ! Tu peux maintenant commit et push tes fichiers.");
