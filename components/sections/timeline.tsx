"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { timeline, certifications, type TimelineItem as TItem } from "@/lib/data"
import { ExternalLink, FileText, Download, X, GraduationCap, Award, FileDown, BookOpen, Maximize2 } from "lucide-react"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const statusColorMap: Record<string, string> = {
  emerald: "text-[#6ee7b7] bg-[#6ee7b7]/10 border-[#6ee7b7]/30",
  indigo: "text-[#818cf8] bg-[#818cf8]/10 border-[#818cf8]/30",
  amber: "text-[#fbbf24] bg-[#fbbf24]/10 border-[#fbbf24]/30",
  purple: "text-[#c084fc] bg-[#c084fc]/10 border-[#c084fc]/30",
  muted: "text-[#8b8b99] bg-white/5 border-white/10",
}

/* ── Mobile center focus with scroll-pause safety ── */
function useMobileCenterFocus(ref: React.RefObject<HTMLElement | null>, cardId: string) {
  const [isFocused, setIsFocused] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse), (max-width: 768px)")
    if (!mq.matches) return
    let paused = false
    let rafId = 0
    function onAnchorClick(e: Event) {
      const anchor = (e.target as HTMLElement).closest("a[href^='#']")
      if (anchor) { paused = true; setTimeout(() => { paused = false }, 1200) }
    }
    function check() {
      if (paused) return
      const cards = document.querySelectorAll<HTMLElement>("[data-timeline-card]")
      if (cards.length === 0) return
      const vc = window.innerHeight / 2
      let closestId = ""
      let closestDist = Infinity
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const dist = Math.abs(rect.top + rect.height / 2 - vc)
        if (dist < closestDist) { closestDist = dist; closestId = card.dataset.timelineCard || "" }
      })
      setIsFocused(closestId === cardId)
    }
    function onScroll() { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(check) }
    check()
    window.addEventListener("scroll", onScroll, { passive: true })
    document.addEventListener("click", onAnchorClick, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      document.removeEventListener("click", onAnchorClick)
      cancelAnimationFrame(rafId)
    }
  }, [cardId])
  return isFocused
}

/* ── Document Modal (fold-aware + fullscreen) ── */
function DocModal({ open, onClose, title, src, downloadName }: {
  open: boolean; onClose: () => void; title: string; src: string; downloadName: string
}) {
  const [fullscreen, setFullscreen] = useState(false)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else { document.body.style.overflow = ""; setFullscreen(false) }
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`fixed inset-0 z-[60] flex p-2 sm:p-4 ${fullscreen ? "items-stretch justify-stretch" : "items-center justify-center fold-modal-container"}`}
          onClick={onClose}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`relative z-10 rounded-2xl border border-white/10 bg-[#0e0e16] overflow-hidden flex flex-col transition-all duration-300 ${fullscreen ? "w-full h-full max-w-none max-h-none rounded-none" : "w-full max-w-5xl max-h-[90vh] fold-modal-panel"}`}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-white/10">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#6ee7b7] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground truncate">{title}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <a href={src} download={downloadName}
                  className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-mono bg-[#6ee7b7]/10 text-[#6ee7b7] border border-[#6ee7b7]/30 hover:bg-[#6ee7b7]/20 transition-colors">
                  <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="hidden sm:inline">Telecharger</span><span className="sm:hidden">PDF</span>
                </a>
                <button onClick={() => setFullscreen(!fullscreen)}
                  className="p-1 sm:p-1.5 rounded-lg text-[#8b8b99] hover:text-foreground hover:bg-white/5 transition-colors"
                  aria-label={fullscreen ? "Reduire" : "Plein ecran"}>
                  <Maximize2 className="w-4 h-4" />
                </button>
                <button onClick={onClose} className="p-1 sm:p-1.5 rounded-lg text-[#8b8b99] hover:text-foreground hover:bg-white/5 transition-colors" aria-label="Fermer">
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              <iframe src={src} className="w-full h-full min-h-[70vh]" title={title} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ── Badge ── */
function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono border leading-none ${className}`}>
      {children}
    </span>
  )
}

/* ── Timeline Card ── */
function TimelineCard({ item, index, onOpenReco }: {
  item: TItem; index: number; onOpenReco: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isLeft = index % 2 === 0
  const [showTooltip, setShowTooltip] = useState(false)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isMilestone = item.type === "milestone"
  const isMaster = item.title.includes("Master")
  const isCursusStart = item.title.includes("Debut Cursus") || item.title.includes("Début Cursus")
  const hasInfoUrl = !!item.infoUrl && !isMilestone
  const cardId = `tl-${index}`
  const temporal = item.temporal || "past"
  const isMobileFocused = isMilestone ? false : useMobileCenterFocus(ref, cardId)
  const statusClass = statusColorMap[item.statusColor || "muted"]

  const handleMouseEnter = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    setShowTooltip(true)
  }
  const handleMouseLeave = () => {
    hideTimerRef.current = setTimeout(() => setShowTooltip(false), 1500)
  }

  // On mobile, show tooltip when focused
  useEffect(() => {
    if (isMobileFocused && hasInfoUrl) setShowTooltip(true)
    else if (!isMobileFocused) {
      hideTimerRef.current = setTimeout(() => setShowTooltip(false), 300)
    }
    return () => { if (hideTimerRef.current) clearTimeout(hideTimerRef.current) }
  }, [isMobileFocused, hasInfoUrl])

  return (
    <motion.div
      ref={ref}
      data-timeline-card={isMilestone ? undefined : cardId}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`relative flex items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
    >
      <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
        {isMilestone ? (
          <div className="relative py-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-mono text-base sm:text-lg font-bold text-foreground">{item.period}</span>
              {temporal === "future" && <span className="font-mono text-sm sm:text-base font-semibold text-[#818cf8]/70 uppercase tracking-wider">a venir</span>}
              {temporal === "present" && <span className="font-mono text-sm sm:text-base font-semibold text-[#6ee7b7] uppercase tracking-wider animate-pulse">maintenant</span>}
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className={`text-sm ${isCursusStart ? "text-[#6ee7b7] font-semibold" : "text-foreground/80"}`}>
                {item.title}
              </span>
            </div>
            <div className="mt-1.5">
              <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-mono border leading-none ${statusClass}`}>
                {item.status}
              </span>
            </div>
            {isCursusStart && item.infoUrl && (
              <div className="mt-2 flex">
                <a href={item.infoUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-[#0e0e16] border border-[#6ee7b7]/20 text-[#6ee7b7] hover:bg-[#6ee7b7]/10 transition-colors">
                  <ExternalLink className="w-3 h-3" /> Decouvrir le cursus Expert ESIEE-IT
                </a>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col">
            <div
              className={`glass-card p-5 sm:p-6 glow-border relative ${isMaster ? "border-[#c084fc]/20" : ""} ${isMobileFocused ? "mobile-focus-active" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Date + temporal label */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-sm sm:text-base font-bold text-foreground">{item.period}</span>
                {temporal === "future" && <span className="font-mono text-xs sm:text-sm font-semibold text-[#818cf8]/70 uppercase tracking-wider">a venir</span>}
                {temporal === "present" && <span className="font-mono text-xs sm:text-sm font-semibold text-[#6ee7b7] uppercase tracking-wider animate-pulse">en cours</span>}
                {temporal === "past" && <span className="font-mono text-xs sm:text-sm text-[#8b8b99]/50 uppercase tracking-wider">termine</span>}
              </div>
              {/* Cursus badge on its own line */}
              {item.cursusPhase && (
                <div className="mt-1.5 mb-2">
                  <Badge className={isMaster ? "text-[#c084fc] bg-[#c084fc]/10 border-[#c084fc]/30" : "text-[#6ee7b7]/60 bg-[#6ee7b7]/5 border-[#6ee7b7]/20"}>
                    Cursus Expert Cyber {item.cursusPhase}
                  </Badge>
                </div>
              )}
              {!item.cursusPhase && <div className="mb-2" />}
              <h3 className={`font-serif text-base sm:text-lg font-semibold mb-2 ${isMaster ? "text-[#c084fc]" : "text-foreground"}`}>
                {item.title}
              </h3>
              {item.institution && <p className="text-[#818cf8] text-sm mb-1">{item.institution}</p>}
              {item.description && <p className="text-[#8b8b99] text-sm mb-1">{item.description}</p>}
              {item.description2 && <p className="text-[#8b8b99] text-sm italic mb-2">{item.description2}</p>}

              {/* Badges - clickable ones brighter */}
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <Badge className={statusClass}>{item.status}</Badge>

                {item.recommendation && (
                  <button onClick={onOpenReco} className="cursor-pointer" aria-label="Voir la lettre de recommandation">
                    <Badge className="border-[#fbbf24]/40 bg-[#fbbf24]/15 text-[#fbbf24] hover:bg-[#fbbf24]/25 transition-colors brightness-110">
                      <Award className="w-3 h-3" /> Recommandation
                    </Badge>
                  </button>
                )}

                {item.programUrl && (
                  <a href={item.programUrl} target="_blank" rel="noopener noreferrer">
                    <Badge className="border-[#0072bc]/40 bg-[#0072bc]/15 text-[#5ba8d6] hover:text-[#7ec0e8] hover:bg-[#0072bc]/25 transition-colors brightness-110">
                      <GraduationCap className="w-3 h-3" /> Programme CCI Paris IDF
                    </Badge>
                  </a>
                )}

                {item.rncpUrl && (
                  <a href={item.rncpUrl} target="_blank" rel="noopener noreferrer">
                    <Badge className="border-white/15 bg-white/8 text-[#a0a0ad] hover:text-foreground hover:bg-white/15 transition-colors">
                      <BookOpen className="w-3 h-3" /> RNCP
                    </Badge>
                  </a>
                )}
              </div>
            </div>

            {/* Tooltip: CSS max-height transition (no reflow from Framer height animation) */}
            {hasInfoUrl && (
              <div className={`overflow-hidden transition-all duration-300 ease-out ${
                showTooltip ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
              }`} style={{ willChange: "max-height, opacity" }}>
                <div className="pt-3 pb-1 flex justify-center">
                  <a href={item.infoUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs bg-[#0e0e16] border border-white/10 text-[#6ee7b7] hover:bg-[#6ee7b7]/10 transition-colors shadow-lg shadow-black/30">
                    <ExternalLink className="w-3 h-3" />
                    {isMaster ? "Decouvrir le Master E3IN" : "Decouvrir le Bachelor 3 DSNS"}
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Timeline dots - present items pulse */}
      <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 ${isMilestone ? "top-5 w-2.5 h-2.5" : "top-8 w-4 h-4"} rounded-full bg-[#0b0b12] border-2 ${
        temporal === "past" ? "border-[#8b8b99]/40" : isMaster ? "border-[#c084fc]" : "border-[#6ee7b7]"
      } ${temporal === "present" ? "animate-pulse" : ""}`}>
        {!isMilestone && <div className={`absolute inset-0.5 rounded-full ${
          temporal === "past" ? "bg-[#8b8b99]/20" : isMaster ? "bg-[#c084fc]/30" : "bg-[#6ee7b7]/30"
        }`} />}
      </div>
      <div className={`md:hidden absolute left-0 z-10 ${isMilestone ? "top-4 w-2 h-2" : "top-6 w-3 h-3"} rounded-full bg-[#0b0b12] border-2 ${
        temporal === "past" ? "border-[#8b8b99]/40" : isMaster ? "border-[#c084fc]" : "border-[#6ee7b7]"
      } ${temporal === "present" ? "animate-pulse" : ""}`}>
        {!isMilestone && <div className={`absolute inset-0.5 rounded-full ${
          temporal === "past" ? "bg-[#8b8b99]/20" : isMaster ? "bg-[#c084fc]/30" : "bg-[#6ee7b7]/30"
        }`} />}
      </div>
      <div className="hidden md:block w-1/2" />
    </motion.div>
  )
}

/* ── Certifications ── */
function CertificationsCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="mt-16">
      <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">Certifications</h3>
      <div className="glass-card p-6 glow-border max-w-lg mx-auto">
        <div className="space-y-6">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-foreground">{cert.name}</p>
                <p className="text-sm text-[#fbbf24]">{cert.status}</p>
              </div>
              {cert.github && (
                <a href={cert.github} target="_blank" rel="noopener noreferrer" aria-label={`Notes ${cert.name} sur GitHub`}
                  className="text-[#8b8b99] hover:text-[#6ee7b7] transition-colors flex-shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main Section ── */
export function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [recoOpen, setRecoOpen] = useState(false)
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <>
      <section id="timeline" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-4">
            <span className="section-number">04</span>
            <div className="flex items-center gap-4 mt-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Parcours</h2>
              <button onClick={() => setCvOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-mono border border-[#6ee7b7]/30 bg-[#6ee7b7]/10 text-[#6ee7b7] hover:bg-[#6ee7b7]/20 transition-all group cursor-pointer"
                aria-label="Voir le CV">
                <FileDown className="w-5 h-5 group-hover:animate-bounce" />
                <span className="hidden sm:inline">CV</span>
              </button>
            </div>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8b8b99] text-sm mb-12 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-gradient-to-r from-[#6ee7b7] to-[#c084fc]" />
            Cursus Expert Cybersecurite en 3 ans | ESIEE-IT
          </motion.p>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px" style={{background: "linear-gradient(to bottom, #c084fc 0%, #818cf8 20%, #6ee7b7 35%, #6ee7b7 50%, #555560 70%, #3a3a44 100%)"}} />
            <div className="md:hidden absolute left-[5px] top-0 bottom-0 w-px" style={{background: "linear-gradient(to bottom, #c084fc 0%, #818cf8 20%, #6ee7b7 35%, #6ee7b7 50%, #555560 70%, #3a3a44 100%)"}} />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <TimelineCard key={`${item.period}-${item.title}`} item={item} index={index} onOpenReco={() => setRecoOpen(true)} />
              ))}
            </div>
          </div>
          <CertificationsCard />
        </div>
      </section>

      <DocModal open={recoOpen} onClose={() => setRecoOpen(false)} title="Lettre de recommandation" src="/docs/recommandation.pdf" downloadName="Lettre recommandation Faria Dos Santos Anthony.pdf" />
      <DocModal open={cvOpen} onClose={() => setCvOpen(false)} title="CV | Anthony Faria Dos Santos" src="/docs/cv.pdf" downloadName="CV Alt_Bac+3_Anthony Faria Dos Santos.pdf" />
    </>
  )
}
