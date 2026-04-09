// Portfolio data for Anthony Faria Dos Santos

export const personalInfo = {
  firstName: "Anthony",
  lastName: "Faria Dos Santos",
  lastNameMobile: "Faria",
  subtitle: "Fullstack JS · Cybersécurité · Systèmes & Réseaux",
  subtext: "Alternant DSNS à ESIEE-IT | En recherche d'alternance pour septembre 2026",
  photo: "/photo.png",
  email: "Anthony.devfsjs@gmail.com",
  github: "Anthony-Faria-dos-santos",
  linkedin: "anthony-faria-dos-santos",
  location: "Paris / Île-de-France / Oise",
  mobility: "Permis B, véhiculé",
}

export const aboutParagraphs = [
  "A 39 ans, après 18 ans sur le terrain en électrotechnique industrielle, j'ai pris l'habitude de comprendre les choses en m'y confrontant directement.",
  "Chaque projet renforce ma compréhension du métier, et chaque obstacle renforce ma détermination.",
  "Si vous cherchez un alternant surmotivé, persévérant et orienté résultats, vous êtes au bon endroit.",
]

export const aboutDetails = [
  "J'intègre à la rentrée 2026 le parcours d'expertise cybersécurité en 3 ans de l'ESIEE-IT, articulé autour :",
  "du Bachelor 3 DSNS en alternance (contrat d'1 an, rythme 1 semaine / 1 semaine),",
  "suivi du Master E3IN \"Expert Cybersécurité\" en alternance (contrat de 2 ans, rythme 4 semaines / 4 semaines) à partir de la rentrée 2027.",
  "Ces deux alternances peuvent se faire dans des entreprises différentes, même si construire une collaboration sur la durée serait l'idéal.",
]

export const aboutRqth = "Étant reconnu RQTH, en m'embauchant en contrat d'apprentissage, votre entreprise devient éligible aux aides maximales à l'embauche, sans limite d'âge ni de niveau."

export const aboutClosing = "Je suis convaincu que la chance se provoque et que les opportunités se saisissent : n'hésitez pas à me contacter pour discuter de vos besoins et voir comment je peux y répondre."

export const aboutTags = [
  "Fullstack JS",
  "Blue Team / SOC",
  "Systèmes & Réseaux",
  "Automatisation",
  "Anglais C1",
]

export type Skill = {
  name: string
  learning?: boolean
}

export type SkillCategory = {
  title: string
  color: "emerald" | "indigo" | "amber"
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Cybersécurité",
    color: "emerald",
    skills: [
      { name: "Suricata", learning: true },
      { name: "ELK Stack", learning: true },
      { name: "MISP", learning: true },
      { name: "TheHive/Cortex", learning: true },
      { name: "OWASP Top 10" },
      { name: "MITRE ATT&CK" },
      { name: "Nmap" },
      { name: "Kali Linux", learning: true },
      { name: "Metasploit", learning: true },
      { name: "Analyse de logs" },
      { name: "Analyse d'incidents" },
      { name: "Durcissement", learning: true },
      { name: "Forensique/DFIR", learning: true },
    ],
  },
  {
    title: "Développement",
    color: "indigo",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Python" },
      { name: "Bash" },
      { name: "C" },
      { name: "Java", learning: true },
      { name: "Rust", learning: true },
      { name: "SQL/PostgreSQL" },
      { name: "NoSQL" },
      { name: "API REST" },
      { name: "GraphQL" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "Agile/Scrum" },
    ],
  },
  {
    title: "Systèmes & Réseaux",
    color: "amber",
    skills: [
      { name: "Linux" },
      { name: "Windows Server" },
      { name: "Wireshark" },
      { name: "TCP/IP" },
      { name: "DNS/DHCP" },
      { name: "VPN/VLAN" },
      { name: "SSH" },
      { name: "Routage/ACL" },
      { name: "Firewall" },
      { name: "Containerlab" },
      { name: "GNS3" },
      { name: "Cisco IOS" },
      { name: "Virtualisation" },
      { name: "Scripting Python/Bash" },
      { name: "IBM AS/400" },
    ],
  },
]

export type Project = {
  title: string
  description?: string
  stack: string[]
  featured?: boolean
  openSource?: boolean
  github?: string
  url?: string
  lines?: number
  tests?: number
}

export const projects: Project[] = [
  {
    title: "Mini SOC | Plateforme SIEM",
    description: "Infrastructure complète de Security Operations Center montée de zéro pour la détection et l'analyse des menaces.",
    stack: ["MISP", "Suricata", "ELK Stack", "TheHive/Cortex", "Docker", "Python"],
    featured: true,
  },
  {
    title: "CVE Signal Dashboard",
    description: "Tableau de bord pour le suivi et l'analyse des vulnérabilités CVE.",
    stack: ["Open Source", "Next.js", "Prisma"],
    openSource: true,
    github: "https://github.com/Anthony-Faria-dos-santos/cve-signal-Dashboard",
  },
  {
    title: "WWM Ultimate Calculator",
    description: "Calculatrice avancée open source avec suite de tests complète.",
    stack: ["Open Source"],
    openSource: true,
    github: "https://github.com/Anthony-Faria-dos-santos/WWM_Ultimate_calculator",
    url: "https://anthony-faria-dos-santos.github.io/WWM_Ultimate_calculator/",
    lines: 18400,
    tests: 412,
  },
  {
    title: "Virtual Lab",
    description: "Environnement de virtualisation réseau pour tests et apprentissage.",
    stack: ["Containerlab", "Docker", "GNS3", "Cisco IOS"],
  },
  {
    title: "MISP Analyse phishing",
    description: "Outil d'analyse et de catégorisation des tentatives de phishing.",
    stack: ["MISP", "Python"],
    github: "https://github.com/Anthony-Faria-dos-santos/MISP-Personnal-Student-Project",
  },
  {
    title: "Motion Detection System",
    description: "Migration MOG2 → YOLO → DeepSORT pour la détection de mouvement avancée.",
    stack: ["Python", "YOLO", "DeepSORT"],
    openSource: true,
    github: "https://github.com/Anthony-Faria-dos-santos/Project-Motion-Detection-System",
  },
]

export type TimelineItem = {
  period: string
  title: string
  institution?: string
  status: string
  statusColor?: "emerald" | "indigo" | "amber" | "purple" | "muted"
  description?: string
  description2?: string
  type?: "formation" | "milestone" | "experience"
  cursusPhase?: string
  infoUrl?: string
  recommendation?: boolean
  programUrl?: string
  rncpUrl?: string
  temporal?: "past" | "present" | "future"
}

export const timeline: TimelineItem[] = [
  {
    period: "2027-2029",
    title: "Master E3IN | Alternance",
    temporal: "future",
    institution: "ESIEE-IT, CCI Paris Île-de-France",
    status: "2e phase de cursus",
    statusColor: "purple",
    description: "Expert en Ingénierie Informatique et Innovation Numérique",
    type: "formation",
    cursusPhase: "2/2",
    infoUrl: "https://www.esiee-it.fr/fr/Bac5-cybersecurite",
    programUrl: "https://www.cci-paris-idf.fr/fr/education/formations/esiee-it/expert-ingenierie-informatique-3ein",
    rncpUrl: "https://www.francecompetences.fr/recherche/rncp/37744/",
  },
  {
    period: "2027",
    title: "2e alternance | contrat 2 ans",
    type: "milestone",
    status: "A venir",
    statusColor: "muted",
    temporal: "future",
  },
  {
    period: "2026-2027",
    title: "Bachelor 3 DSNS | Alternance",
    temporal: "present",
    institution: "ESIEE-IT, CCI Paris Île-de-France",
    status: "Admis",
    statusColor: "emerald",
    description: "Développeur de Solutions Numériques Sécurisées",
    type: "formation",
    cursusPhase: "1/2",
    infoUrl: "https://www.esiee-it.fr/fr/bac-3-developpeur-de-solutions-numeriques-securisees-titre-rncp-niveau-6",
    recommendation: true,
    programUrl: "https://www.cci-paris-idf.fr/fr/education/formations/esiee-it/bachelor-informatique-developpeur-solutions-numeriques-securisees",
    rncpUrl: "https://www.francecompetences.fr/recherche/rncp/37778/",
  },
  {
    period: "2026",
    title: "Début Cursus Expert Cybersécurité en 3 ans",
    temporal: "present",
    type: "milestone",
    status: "1re alternance | contrat 1 an en recherche",
    statusColor: "amber",
    infoUrl: "https://www.esiee-it.fr/fr/programmes-experts#informatique",
  },
  {
    period: "Sept-Déc 2025",
    title: "Bachelor 3 DSNS | Alternance (1re tentative)",
    temporal: "past",
    institution: "ESIEE-IT, CCI Paris Île-de-France",
    status: "Terminé",
    statusColor: "muted",
    description: "Développeur de Solutions Numériques Sécurisées",
    description2: "Arrêtée faute d'alternance. Détermination renforcée.",
    type: "formation",
    recommendation: true,
    infoUrl: "https://www.esiee-it.fr/fr/bac-3-developpeur-de-solutions-numeriques-securisees-titre-rncp-niveau-6",
    programUrl: "https://www.cci-paris-idf.fr/fr/education/formations/esiee-it/bachelor-informatique-developpeur-solutions-numeriques-securisees",
    rncpUrl: "https://www.francecompetences.fr/recherche/rncp/37778/",
  },
  {
    period: "2023-2024",
    title: "Titre Pro Développeur Fullstack",
    temporal: "past",
    institution: "O'Clock",
    status: "Terminé",
    statusColor: "muted",
    description: "Diplômé DWWM nv5 / Bac+2",
    type: "formation",
    rncpUrl: "https://www.francecompetences.fr/recherche/rncp/37674/",
  },
  {
    period: "2005-2023",
    title: "Électrotechnicien industriel",
    temporal: "past",
    institution: "EJ Picardie, St Crépin Ibouvillers (Oise)",
    status: "Terminé",
    statusColor: "muted",
    description: "10 ans au service Travaux Neufs (ex BMI)",
    description2: "Électricité BT/HT | Téléphonie PABX | SI | Automatismes",
    type: "experience",
  },
]

export type Certification = {
  name: string
  status: string
  github?: string
}

export const certifications: Certification[] = [
  {
    name: "Cisco CCNA 200-301",
    status: "En préparation | objectif été 2026",
    github: "https://github.com/Anthony-Faria-dos-santos/CCNA-exam-prep-support-material",
  },
  {
    name: "Cisco CCNP Enterprise",
    status: "Visée 2027",
  },
]

export const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Parcours", href: "#timeline" },
  { label: "Contact", href: "#contact" },
  { label: "Documents", href: "#documents" },
]
