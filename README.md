<svg xmlns="http://www.w3.org/2000/svg" width="900" height="200" viewBox="0 0 900 200">
  <defs>
    <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6ee7b7;stop-opacity:1">
        <animate attributeName="stop-opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
      </stop>
      <stop offset="50%" style="stop-color:#818cf8;stop-opacity:1">
        <animate attributeName="stop-opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" style="stop-color:#fbbf24;stop-opacity:1">
        <animate attributeName="stop-opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="900" height="200" fill="#0b0b12"/>
  <rect x="50" y="95" width="800" height="2" fill="url(#glowGrad)" rx="1">
    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
  </rect>
  <text x="450" y="70" text-anchor="middle" fill="#6ee7b7" font-family="monospace" font-size="38" font-weight="bold" filter="url(#glow)">
    Anthony Faria Dos Santos
    <animate attributeName="opacity" values="0;1" dur="1.5s" fill="freeze"/>
  </text>
  <text x="450" y="130" text-anchor="middle" fill="#8b8b99" font-family="monospace" font-size="18">
    <tspan>
      <animate attributeName="opacity" values="0;0;1" dur="2s" fill="freeze"/>
    </tspan>$ <tspan fill="#818cf8">SOC Analyst</tspan> • <tspan fill="#6ee7b7">Security Engineer</tspan> • <tspan fill="#fbbf24">Builder</tspan><tspan fill="#6ee7b7" font-weight="bold">
      <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
    _</tspan>
  </text>
  <text x="450" y="165" text-anchor="middle" fill="#1e1e2a" font-family="monospace" font-size="12">
    <animate attributeName="fill" values="#1e1e2a;#8b8b99" dur="3s" fill="freeze"/>
    Transforming signals into security insights
  </text>
  <circle cx="80" cy="100" r="3" fill="#6ee7b7">
    <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="820" cy="100" r="3" fill="#818cf8">
    <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite"/>
  </circle>
</svg>

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-anthony--faria--dos--santos.github.io-6ee7b7?style=for-the-badge&logo=googlechrome&logoColor=6ee7b7&labelColor=0b0b12)](https://anthony-faria-dos-santos.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-818cf8?style=for-the-badge&logo=linkedin&logoColor=818cf8&labelColor=0b0b12)](https://linkedin.com/in/anthony-faria-dos-santos)
[![Email](https://img.shields.io/badge/Email-Contact-fbbf24?style=for-the-badge&logo=gmail&logoColor=fbbf24&labelColor=0b0b12)](mailto:Anthony.devfsjs@gmail.com)

</div>

---

## `$ whoami`

```yaml
name: Anthony Faria Dos Santos
location: France
status: Reconversion professionnelle → Cybersécurité
background: 18 ans d'expérience en électrotechnique industrielle
current_focus: Construction d'un SOC from scratch
lines_of_production_code: 18400+
seeking: Alternance Développement Sécurisé / Cybersécurité / Sys&Réseaux (Sept 2026)
philosophy: "signal > noise"
```

> **De l'électrotechnique à la cybersécurité** — 18 années à diagnostiquer des systèmes industriels complexes m'ont appris une chose : chaque anomalie raconte une histoire. Aujourd'hui, j'applique cette rigueur analytique à la détection des menaces et à l'ingénierie de sécurité.

---

## `$ cat tech_stack.yaml`

<details open>
<summary><b>🛡️ Cybersécurité & SOC</b></summary>
<br>

![Suricata](https://img.shields.io/badge/Suricata-IDS/IPS-6ee7b7?style=flat-square&logoColor=6ee7b7&labelColor=0b0b12)
![ELK](https://img.shields.io/badge/ELK_Stack-SIEM-6ee7b7?style=flat-square&logo=elasticstack&logoColor=6ee7b7&labelColor=0b0b12)
![MISP](https://img.shields.io/badge/MISP-CTI/IoC-6ee7b7?style=flat-square&logoColor=6ee7b7&labelColor=0b0b12)
![TheHive](https://img.shields.io/badge/TheHive-DFIR-6ee7b7?style=flat-square&logoColor=6ee7b7&labelColor=0b0b12)
![OWASP](https://img.shields.io/badge/OWASP-Top_10-6ee7b7?style=flat-square&logoColor=6ee7b7&labelColor=0b0b12)
![MITRE](https://img.shields.io/badge/MITRE-ATT%26CK-6ee7b7?style=flat-square&logoColor=6ee7b7&labelColor=0b0b12)
![Kali](https://img.shields.io/badge/Kali-Linux-6ee7b7?style=flat-square&logo=kalilinux&logoColor=6ee7b7&labelColor=0b0b12)
![Wireshark](https://img.shields.io/badge/Wireshark-Analysis-6ee7b7?style=flat-square&logo=wireshark&logoColor=6ee7b7&labelColor=0b0b12)

</details>

<details open>
<summary><b>⚡ Développement Fullstack</b></summary>
<br>

![TypeScript](https://img.shields.io/badge/TypeScript-818cf8?style=flat-square&logo=typescript&logoColor=818cf8&labelColor=0b0b12)
![JavaScript](https://img.shields.io/badge/JavaScript-818cf8?style=flat-square&logo=javascript&logoColor=818cf8&labelColor=0b0b12)
![React](https://img.shields.io/badge/React-818cf8?style=flat-square&logo=react&logoColor=818cf8&labelColor=0b0b12)
![Next.js](https://img.shields.io/badge/Next.js-818cf8?style=flat-square&logo=nextdotjs&logoColor=818cf8&labelColor=0b0b12)
![Node.js](https://img.shields.io/badge/Node.js-818cf8?style=flat-square&logo=nodedotjs&logoColor=818cf8&labelColor=0b0b12)
![Python](https://img.shields.io/badge/Python-818cf8?style=flat-square&logo=python&logoColor=818cf8&labelColor=0b0b12)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-818cf8?style=flat-square&logo=postgresql&logoColor=818cf8&labelColor=0b0b12)
![Docker](https://img.shields.io/badge/Docker-818cf8?style=flat-square&logo=docker&logoColor=818cf8&labelColor=0b0b12)

</details>

<details open>
<summary><b>🔧 Systèmes & Réseaux</b></summary>
<br>

![Linux](https://img.shields.io/badge/Linux-Debian/Ubuntu/Kali-fbbf24?style=flat-square&logo=linux&logoColor=fbbf24&labelColor=0b0b12)
![Cisco](https://img.shields.io/badge/Cisco-IOS-fbbf24?style=flat-square&logo=cisco&logoColor=fbbf24&labelColor=0b0b12)
![Containerlab](https://img.shields.io/badge/Containerlab-fbbf24?style=flat-square&logoColor=fbbf24&labelColor=0b0b12)
![GNS3](https://img.shields.io/badge/GNS3-fbbf24?style=flat-square&logoColor=fbbf24&labelColor=0b0b12)
![Bash](https://img.shields.io/badge/Bash-fbbf24?style=flat-square&logo=gnubash&logoColor=fbbf24&labelColor=0b0b12)
![Git](https://img.shields.io/badge/Git-fbbf24?style=flat-square&logo=git&logoColor=fbbf24&labelColor=0b0b12)

</details>

---

## `$ ls -la ./projects/`

| Status | Project | Description | Stack |
|:------:|:--------|:------------|:------|
| 🟢 | **Mini SOC** | Plateforme SIEM Blue Team L1/L2 — détection, CTI, DFIR | `Suricata` `ELK` `MISP` `TheHive` |
| 🔓 | [**CVE Signal Dashboard**](https://github.com/Anthony-Faria-dos-santos/cve-signal-Dashboard) | Dashboard CVE NVD — scoring contextuel CVSS×CPE×KEV | `Next.js` `Prisma` `TypeScript` |
| 🔓 | [**WWM Calculator**](https://github.com/Anthony-Faria-dos-santos/WWM_Ultimate_calculator) | 18 400 lignes, 412 tests, CI/CD — [**Live Demo**](https://anthony-faria-dos-santos.github.io/WWM_Ultimate_calculator/) | `TypeScript` `Next.js` `PostgreSQL` |
| 🔒 | **Virtual Lab** | Infra réseau multi-sites — routage, ACL, compromission | `Containerlab` `Cisco IOS` `GNS3` |
| 🔓 | [**MISP Analysis**](https://github.com/Anthony-Faria-dos-santos/MISP-Personnal-Student-Project) | Analyse SOC d'une campagne de phishing via MISP | `MISP` `Shell` `CTI` |
| 🔓 | [**Motion Detection**](https://github.com/Anthony-Faria-dos-santos/Project-Motion-Detection-System) | Migration pipeline MOG2 → YOLO → DeepSORT | `Python` `YOLO` `DeepSORT` |

<sub>🟢 Featured &nbsp;│&nbsp; 🔓 Open Source &nbsp;│&nbsp; 🔒 Private</sub>

---

## `$ cat stats.log`

<div align="center">
  
<a href="https://github.com/Anthony-Faria-dos-santos">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=Anthony-Faria-dos-santos&show_icons=true&bg_color=0b0b12&title_color=6ee7b7&text_color=8b8b99&icon_color=818cf8&border_color=1e1e2a&hide_border=false&include_all_commits=true&count_private=true"/>
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Anthony-Faria-dos-santos&layout=compact&bg_color=0b0b12&title_color=6ee7b7&text_color=8b8b99&icon_color=818cf8&border_color=1e1e2a&hide_border=false"/>
</a>

<br><br>

<img src="https://github-readme-streak-stats.herokuapp.com/?user=Anthony-Faria-dos-santos&background=0b0b12&border=1e1e2a&stroke=1e1e2a&ring=6ee7b7&fire=fbbf24&currStreakNum=6ee7b7&sideNums=818cf8&currStreakLabel=6ee7b7&sideLabels=8b8b99&dates=8b8b99"/>

</div>

---

## `$ certifications --status`

| Certification | Status | Timeline |
|:--------------|:------:|:---------|
| [![CCNA](https://img.shields.io/badge/CCNA-200--301-6ee7b7?style=flat-square&logo=cisco&logoColor=6ee7b7&labelColor=0b0b12)](https://github.com/Anthony-Faria-dos-santos/CCNA-exam-prep-support-material) | 📚 En préparation | 2025-2026 |
| ![CCNP](https://img.shields.io/badge/CCNP-Enterprise-818cf8?style=flat-square&logo=cisco&logoColor=818cf8&labelColor=0b0b12) | 🎯 Objectif | 2026-2027 |

---

<div align="center">

<svg xmlns="http://www.w3.org/2000/svg" width="400" height="80" viewBox="0 0 400 80">
  <rect width="400" height="80" fill="#0b0b12"/>
  <line x1="20" y1="40" x2="60" y2="40" stroke="#1e1e2a" stroke-width="1">
    <animate attributeName="x2" values="60;100;60" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="stroke" values="#1e1e2a;#6ee7b7;#1e1e2a" dur="2s" repeatCount="indefinite"/>
  </line>
  <text x="200" y="45" text-anchor="middle" fill="#8b8b99" font-family="monospace" font-size="16">
    <tspan fill="#6ee7b7">signal</tspan> <tspan fill="#818cf8">&gt;</tspan> <tspan fill="#fbbf24">noise</tspan>
  </text>
  <line x1="340" y1="40" x2="380" y2="40" stroke="#1e1e2a" stroke-width="1">
    <animate attributeName="x1" values="340;300;340" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="stroke" values="#1e1e2a;#818cf8;#1e1e2a" dur="2s" repeatCount="indefinite"/>
  </line>
  <circle cx="200" cy="65" r="2" fill="#6ee7b7">
    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite"/>
  </circle>
</svg>

<br>

![Visitors](https://komarev.com/ghpvc/?username=Anthony-Faria-dos-santos&color=6ee7b7&style=flat-square&label=Profile+Views)

<sub>Crafted with precision • Secured by design • Built to detect</sub>

**[🌐 Explore my full portfolio →](https://anthony-faria-dos-santos.github.io)**

</div>