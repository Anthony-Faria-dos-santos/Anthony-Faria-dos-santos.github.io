"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useCallback } from "react"
import { useFoldableState } from "@/hooks/use-foldable-state"
import { Download, ExternalLink, Award, FileDown, BookOpen, GraduationCap } from "lucide-react"
import { personalInfo } from "@/lib/data"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

type DocItem = {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  title: string
  description: string
  href: string
  download?: string
  external?: boolean
  color: string
}

const documents: DocItem[] = [
  { icon: FileDown, title: "CV", description: "Curriculum Vitae complet", href: "/docs/cv.pdf", download: "CV Alt_Bac+3_Anthony Faria Dos Santos.pdf", color: "#6ee7b7" },
  { icon: Award, title: "Lettre de recommandation", description: "Recommandation professionnelle", href: "/docs/recommandation.pdf", download: "Lettre recommandation Faria Dos Santos Anthony.pdf", color: "#fbbf24" },
  { icon: GithubIcon, title: "GitHub", description: "Profil et projets open source", href: `https://github.com/${personalInfo.github}`, external: true, color: "#8b8b99" },
  { icon: GraduationCap, title: "Bachelor 3 DSNS", description: "Programme de formation ESIEE-IT", href: "https://www.esiee-it.fr/fr/bac-3-developpeur-de-solutions-numeriques-securisees-titre-rncp-niveau-6", external: true, color: "#6ee7b7" },
  { icon: GraduationCap, title: "Master E3IN", description: "Cursus Expert Cybersecurite ESIEE-IT", href: "https://www.esiee-it.fr/fr/Bac5-cybersecurite", external: true, color: "#c084fc" },
  { icon: BookOpen, title: "CCNA 200-301 Prep", description: "Notes et supports de revision", href: "https://github.com/Anthony-Faria-dos-santos/CCNA-exam-prep-support-material", external: true, color: "#818cf8" },
  { icon: BookOpen, title: "RNCP Titre Pro DWWM", description: "Fiche France Competences nv5", href: "https://www.francecompetences.fr/recherche/rncp/37674/", external: true, color: "#8b8b99" },
  { icon: BookOpen, title: "RNCP Bachelor 3 DSNS", description: "Fiche France Competences nv6", href: "https://www.francecompetences.fr/recherche/rncp/37778/", external: true, color: "#6ee7b7" },
  { icon: BookOpen, title: "RNCP Master E3IN", description: "Fiche France Competences nv7", href: "https://www.francecompetences.fr/recherche/rncp/37744/", external: true, color: "#c084fc" },
]

/**
 * Animated spinning border driven by Framer Motion.
 * Renders a conic-gradient pseudo-border that rotates 360deg then fades out.
 * Fully controlled by React state - no CSS @property dependency.
 */
function SpinBorder({ active, onComplete }: { active: boolean; onComplete: () => void }) {
  if (!active) return null

  return (
    <motion.div
      className="absolute inset-[-2px] rounded-2xl pointer-events-none overflow-hidden"
      style={{
        padding: "2px",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 0.7, ease: "linear", times: [0, 0.8, 1] }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="absolute inset-0"
        style={{ background: "conic-gradient(from 0deg, #6ee7b7, #818cf8, #fbbf24, #c084fc, #6ee7b7)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: "linear" }}
      />
    </motion.div>
  )
}

function DocCard({ doc, index, isInView }: { doc: DocItem; index: number; isInView: boolean }) {
  const [spinning, setSpinning] = useState(false)
  const Icon = doc.icon
  const isDownload = !!doc.download

  const triggerAction = useCallback(() => {
    if (isDownload) {
      const a = document.createElement("a")
      a.href = doc.href
      a.download = doc.download || ""
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    } else if (doc.external) {
      window.open(doc.href, "_blank", "noopener,noreferrer")
    } else {
      window.location.href = doc.href
    }
  }, [doc, isDownload])

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    if (spinning) return // Block double-clicks
    setSpinning(true)
  }, [spinning])

  const handleSpinComplete = useCallback(() => {
    setSpinning(false)
    triggerAction()
  }, [triggerAction])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
      className="glass-card glow-border p-4 flex items-center gap-4 group hover:bg-white/[0.04] transition-colors cursor-pointer relative"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={doc.title}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleClick(e as unknown as React.MouseEvent) } }}
    >
      <SpinBorder active={spinning} onComplete={handleSpinComplete} />

      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
        style={{ backgroundColor: `${doc.color}10` }}>
        <Icon className="w-5 h-5" style={{ color: doc.color }} />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-foreground group-hover:text-[#6ee7b7] transition-colors truncate">{doc.title}</p>
        <p className="text-xs text-[#8b8b99] truncate">{doc.description}</p>
      </div>
      {doc.external && <ExternalLink className="w-3.5 h-3.5 text-[#8b8b99] shrink-0 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />}
      {isDownload && <Download className="w-3.5 h-3.5 text-[#8b8b99] shrink-0 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />}
    </motion.div>
  )
}

export function DocumentsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const { mode, isFold } = useFoldableState()
  

  return (
    <section id="documents" ref={ref} className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {isFold ? (
          <div className="fold-two-pane gap-8">
            {/* Left pane: header */}
            <motion.div className="fold-left-pane" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}>
              <span className="section-number">06</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2">Documents</h2>
              <p className="text-[#8b8b99] mt-4 text-sm">
                Tous les liens et documents utiles au meme endroit.
              </p>
            </motion.div>
            {/* Right pane: grid */}
            <div className="fold-right-pane grid grid-cols-1 gap-4">
              {documents.map((doc, i) => (
                <DocCard key={doc.title} doc={doc} index={i} isInView={isInView} />
              ))}
            </div>
          </div>
        ) : (
          <>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }} className="mb-12 text-center">
              <span className="section-number">06</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2">Documents</h2>
              <p className="text-[#8b8b99] mt-4 max-w-lg mx-auto text-sm">
                Tous les liens et documents utiles au meme endroit.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {documents.map((doc, i) => (
                <DocCard key={doc.title} doc={doc} index={i} isInView={isInView} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
