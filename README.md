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
    </tspan>$ <tspan fill="#818cf8">Fullstack JS</tspan> · <tspan fill="#6ee7b7">Cybersecurite</tspan> · <tspan fill="#fbbf24">Systemes &amp; Reseaux</tspan><tspan fill="#6ee7b7" font-weight="bold">
      <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
    _</tspan>
  </text>
  <text x="450" y="165" text-anchor="middle" fill="#1e1e2a" font-family="monospace" font-size="12">
    <animate attributeName="fill" values="#1e1e2a;#8b8b99" dur="3s" fill="freeze"/>
    Alternant DSNS | ESIEE-IT | En recherche pour septembre 2026
  </text>
  <circle cx="80" cy="100" r="3" fill="#6ee7b7">
    <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="820" cy="100" r="3" fill="#818cf8">
    <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite"/>
  </circle>
</svg>

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-anthony--faria--dos--santos.github.io-6ee7b7?style=for-the-badge&logo=googlechrome&logoColor=6ee7b7&labelColor=0b0b12)](https://anthony-faria-dos-santos.github.io](https://afds-wine.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profil-818cf8?style=for-the-badge&logo=linkedin&logoColor=818cf8&labelColor=0b0b12)](https://linkedin.com/in/anthony-faria-dos-santos)
[![Email](https://img.shields.io/badge/Email-Contact-fbbf24?style=for-the-badge&logo=gmail&logoColor=fbbf24&labelColor=0b0b12)](mailto:Anthony.devfsjs@gmail.com)

</div>

---

## A propos

```yaml
nom: Anthony Faria Dos Santos
age: 39 ans
localisation: Paris / Ile-de-France / Oise
mobilite: Permis B, vehicule
statut: Reconversion professionnelle apres 18 ans en electrotechnique industrielle
formation: Bachelor 3 DSNS (admis) → Master E3IN Expert Cybersecurite | ESIEE-IT
recherche: Alternance 1 an (rythme 1 sem / 1 sem) a partir de septembre 2026
domaines: Developpement securise · Blue Team / SOC · Systemes & Reseaux
```

A 39 ans, apres 18 ans sur le terrain en electrotechnique industrielle, j'ai pris l'habitude de comprendre les choses en m'y confrontant directement. Chaque projet renforce ma comprehension du metier, et chaque obstacle renforce ma determination.

Reconnu **RQTH**, en m'embauchant en contrat d'apprentissage, votre entreprise beneficie des aides maximales a l'embauche, sans limite d'age ni de niveau.

---

## Stack technique

<table>
<tr>
<td valign="top" width="33%">

**Cybersecurite**

![Suricata](https://img.shields.io/badge/Suricata-IDS/IPS-6ee7b7?style=flat-square&logoColor=6ee7b7&labelColor=0b0b12)
![ELK](https://img.shields.io/badge/ELK_Stack-SIEM-6ee7b7?style=flat-square&logo=elasticstack&logoColor=6ee7b7&labelColor=0b0b12)
![MISP](https://img.shields.io/badge/MISP-CTI-6ee7b7?style=flat-square&logoColor=6ee7b7&labelColor=0b0b12)
![TheHive](https://img.shields.io/badge/TheHive-DFIR-6ee7b7?style=flat-square&logoColor=6ee7b7&labelColor=0b0b12)
![OWASP](https://img.shields.io/badge/OWASP-Top_10-6ee7b7?style=flat-square&logoColor=6ee7b7&labelColor=0b0b12)
![MITRE](https://img.shields.io/badge/MITRE-ATT%26CK-6ee7b7?style=flat-square&logoColor=6ee7b7&labelColor=0b0b12)
![Kali](https://img.shields.io/badge/Kali-Linux-6ee7b7?style=flat-square&logo=kalilinux&logoColor=6ee7b7&labelColor=0b0b12)
![Wireshark](https://img.shields.io/badge/Wireshark-Analyse-6ee7b7?style=flat-square&logo=wireshark&logoColor=6ee7b7&labelColor=0b0b12)

</td>
<td valign="top" width="33%">

**Developpement**

![TypeScript](https://img.shields.io/badge/TypeScript-818cf8?style=flat-square&logo=typescript&logoColor=818cf8&labelColor=0b0b12)
![JavaScript](https://img.shields.io/badge/JavaScript-818cf8?style=flat-square&logo=javascript&logoColor=818cf8&labelColor=0b0b12)
![React](https://img.shields.io/badge/React-818cf8?style=flat-square&logo=react&logoColor=818cf8&labelColor=0b0b12)
![Next.js](https://img.shields.io/badge/Next.js-818cf8?style=flat-square&logo=nextdotjs&logoColor=818cf8&labelColor=0b0b12)
![Node.js](https://img.shields.io/badge/Node.js-818cf8?style=flat-square&logo=nodedotjs&logoColor=818cf8&labelColor=0b0b12)
![Python](https://img.shields.io/badge/Python-818cf8?style=flat-square&logo=python&logoColor=818cf8&labelColor=0b0b12)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-818cf8?style=flat-square&logo=postgresql&logoColor=818cf8&labelColor=0b0b12)
![Docker](https://img.shields.io/badge/Docker-818cf8?style=flat-square&logo=docker&logoColor=818cf8&labelColor=0b0b12)

</td>
<td valign="top" width="33%">

**Systemes & Reseaux**

![Linux](https://img.shields.io/badge/Linux-fbbf24?style=flat-square&logo=linux&logoColor=fbbf24&labelColor=0b0b12)
![Cisco](https://img.shields.io/badge/Cisco-IOS-fbbf24?style=flat-square&logo=cisco&logoColor=fbbf24&labelColor=0b0b12)
![Containerlab](https://img.shields.io/badge/Containerlab-fbbf24?style=flat-square&logoColor=fbbf24&labelColor=0b0b12)
![GNS3](https://img.shields.io/badge/GNS3-fbbf24?style=flat-square&logoColor=fbbf24&labelColor=0b0b12)
![Bash](https://img.shields.io/badge/Bash-fbbf24?style=flat-square&logo=gnubash&logoColor=fbbf24&labelColor=0b0b12)
![Git](https://img.shields.io/badge/Git-fbbf24?style=flat-square&logo=git&logoColor=fbbf24&labelColor=0b0b12)

</td>
</tr>
</table>

---

## Projets

| | Projet | Description | Stack |
|:-:|:-------|:-----------|:------|
| ★ | **Mini SOC** | Infrastructure SIEM complete : detection, CTI, analyse d'incidents | `Suricata` `ELK` `MISP` `TheHive` `Docker` |
| [![GitHub](https://img.shields.io/badge/-0b0b12?logo=github&logoColor=white&style=flat-square)](https://github.com/Anthony-Faria-dos-santos/cve-signal-Dashboard) | **CVE Signal Dashboard** | Suivi et scoring contextuel des vulnerabilites CVE | `Next.js` `Prisma` `TypeScript` |
| [![GitHub](https://img.shields.io/badge/-0b0b12?logo=github&logoColor=white&style=flat-square)](https://github.com/Anthony-Faria-dos-santos/WWM_Ultimate_calculator) | **WWM Calculator** | 18 400 lignes, 412 tests, CI/CD | `TypeScript` `Next.js` |
| | **Virtual Lab** | Environnement reseau multi-sites pour tests et apprentissage | `Containerlab` `Cisco IOS` `GNS3` |
| [![GitHub](https://img.shields.io/badge/-0b0b12?logo=github&logoColor=white&style=flat-square)](https://github.com/Anthony-Faria-dos-santos/MISP-Personnal-Student-Project) | **MISP Analyse phishing** | Analyse SOC d'une campagne de phishing via MISP | `MISP` `Python` |
| [![GitHub](https://img.shields.io/badge/-0b0b12?logo=github&logoColor=white&style=flat-square)](https://github.com/Anthony-Faria-dos-santos/Project-Motion-Detection-System) | **Motion Detection** | Migration pipeline MOG2 vers YOLO vers DeepSORT | `Python` `YOLO` `DeepSORT` |

---

## Certifications

| Certification | Statut | Ressources |
|:-------------|:------:|:----------:|
| ![CCNA](https://img.shields.io/badge/CCNA-200--301-6ee7b7?style=flat-square&logo=cisco&logoColor=6ee7b7&labelColor=0b0b12) | En preparation (ete 2026) | [![Notes](https://img.shields.io/badge/Notes-GitHub-818cf8?style=flat-square&logo=github&logoColor=818cf8&labelColor=0b0b12)](https://github.com/Anthony-Faria-dos-santos/CCNA-exam-prep-support-material) |
| ![CCNP](https://img.shields.io/badge/CCNP-Enterprise-818cf8?style=flat-square&logo=cisco&logoColor=818cf8&labelColor=0b0b12) | Objectif 2027 | |

---

## Parcours

```
2027-2029  Master E3IN Expert Cybersecurite          ESIEE-IT    (alternance 2 ans)
2026-2027  Bachelor 3 DSNS                           ESIEE-IT    (alternance 1 an) ← admis
2023-2024  Titre Pro Developpeur Fullstack (Bac+2)   O'Clock
2005-2023  Electrotechnicien industriel               EJ Picardie (18 ans)
```

---

<div align="center">

<a href="https://github.com/Anthony-Faria-dos-santos">
  <img height="170em" src="https://github-readme-stats.vercel.app/api?username=Anthony-Faria-dos-santos&show_icons=true&bg_color=0b0b12&title_color=6ee7b7&text_color=8b8b99&icon_color=818cf8&border_color=1e1e2a&hide_border=false&include_all_commits=true&count_private=true"/>
  <img height="170em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Anthony-Faria-dos-santos&layout=compact&bg_color=0b0b12&title_color=6ee7b7&text_color=8b8b99&icon_color=818cf8&border_color=1e1e2a&hide_border=false"/>
</a>

<br><br>

<img src="https://github-readme-streak-stats.herokuapp.com/?user=Anthony-Faria-dos-santos&background=0b0b12&border=1e1e2a&stroke=1e1e2a&ring=6ee7b7&fire=fbbf24&currStreakNum=6ee7b7&sideNums=818cf8&currStreakLabel=6ee7b7&sideLabels=8b8b99&dates=8b8b99"/>

<br><br>

![Visitors](https://komarev.com/ghpvc/?username=Anthony-Faria-dos-santos&color=6ee7b7&style=flat-square&label=Visiteurs)

**[Voir le portfolio complet](https://afds-wine.vercel.app/)**

</div>
