"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { projects, type Project } from "@/lib/data"
import { formatNumber } from "@/lib/utils"
import { useFoldableState } from "@/hooks/use-foldable-state"
import { MousePointerClick } from "lucide-react"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

/**
 * Mobile center focus. Only activates when cards are stacked in a single column.
 * Checks the grid to ensure cards are NOT side-by-side before enabling.
 */
function useMobileCenterFocus(ref: React.RefObject<HTMLElement | null>, cardId: string) {
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches
    if (!isTouch) return

    let paused = false
    let rafId = 0

    function onAnchorClick(e: Event) {
      const anchor = (e.target as HTMLElement).closest("a[href^='#']")
      if (anchor) { paused = true; setTimeout(() => { paused = false }, 1200) }
    }

    function check() {
      if (paused) return
      const cards = document.querySelectorAll<HTMLElement>("[data-project-card]")
      if (cards.length === 0) return

      // Detect if cards are side-by-side (multi-column): compare top of first 2 visible cards
      let areSideBySide = false
      if (cards.length >= 2) {
        const first = cards[0].getBoundingClientRect()
        const second = cards[1].getBoundingClientRect()
        areSideBySide = Math.abs(first.top - second.top) < 50
      }

      if (areSideBySide) {
        // Multi-column layout: disable auto-focus to prevent jumping
        setIsFocused(false)
        return
      }

      const vc = window.innerHeight / 2
      let closestId = ""
      let closestDist = Infinity
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const dist = Math.abs(rect.top + rect.height / 2 - vc)
        if (dist < closestDist) { closestDist = dist; closestId = card.dataset.projectCard || "" }
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

function FeaturedProject({ project }: { project: Project }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="glass-card p-6 sm:p-8 rainbow-border relative overflow-hidden mb-8">
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 rounded-full bg-[#6ee7b7]/20 text-[#6ee7b7] text-xs font-mono">Featured</span>
      </div>
      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 pr-20">{project.title}</h3>
      {project.description && <p className="text-[#8b8b99] leading-relaxed mb-6 max-w-2xl">{project.description}</p>}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="px-3 py-1.5 rounded-lg font-mono text-xs badge-glass">{tech}</span>
        ))}
      </div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#6ee7b7]/5 rounded-full blur-3xl" />
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const cardId = project.title.replace(/\s/g, "-")
  const isMobileFocused = useMobileCenterFocus(ref, cardId)

  return (
    <div className="flex flex-col">
      <motion.div
        ref={ref} data-project-card={cardId}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`glass-card p-5 sm:p-6 h-full flex flex-col rainbow-border ${isMobileFocused ? "mobile-focus-active" : ""}`}
      >
        {/* Header: title + github */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex flex-wrap items-center gap-2 pr-2 min-w-0">
            <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground">{project.title}</h3>
            {project.openSource && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#6ee7b7]/10 text-[#6ee7b7] border border-[#6ee7b7]/30 whitespace-nowrap">
                Open Source
              </span>
            )}
          </div>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              aria-label={`Voir ${project.title} sur GitHub`}
              className="text-[#8b8b99] hover:text-[#6ee7b7] transition-colors shrink-0">
              <GithubIcon className="w-5 h-5 github-icon-mobile transition-all duration-400" />
            </a>
          )}
        </div>

        {project.description && (
          <p className="text-[#8b8b99] text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
        )}

        {(project.lines || project.tests) && (
          <div className="flex items-center gap-4 mb-4 text-xs text-[#8b8b99]">
            {project.lines && <span className="font-mono">{formatNumber(project.lines)} lignes</span>}
            {project.tests && <span className="font-mono">{project.tests} tests</span>}
          </div>
        )}

        {/* Stack badges + Site button */}
        <div className="flex items-end justify-between mt-auto gap-3">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className={`px-2.5 py-1 rounded-lg font-mono text-xs badge-glass ${tech === "Open Source" ? "text-[#6ee7b7]" : ""}`}>
                {tech}
              </span>
            ))}
          </div>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer"
              aria-label={`Voir ${project.title} en ligne`}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] font-mono border border-white/15 bg-white/5 text-[#8b8b99] hover:text-[#6ee7b7] hover:border-[#6ee7b7]/30 hover:bg-[#6ee7b7]/10 transition-all shrink-0 site-btn-mobile">
              <MousePointerClick className="w-3.5 h-3.5 transition-all duration-300" />
              Site
            </a>
          )}
        </div>
      </motion.div>

      {/* Mobile tooltip: visible when focused, height pre-reserved */}
      <div className={`overflow-hidden transition-all duration-300 ease-out ${
        isMobileFocused && project.github ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="pt-3 pb-2 flex justify-center">
          <a href={project.github!} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs bg-[#0e0e16] border border-[#6ee7b7]/20 text-[#6ee7b7] shadow-lg shadow-black/30">
            <GithubIcon className="w-3.5 h-3.5" /> Voir sur GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { mode, isFold } = useFoldableState()
  

  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <span className="section-number">03</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2">Projets</h2>
        </motion.div>

        {isFold ? (
          <div className="fold-two-pane gap-6">
            <div className="fold-left-pane space-y-6">
              {featuredProject && <FeaturedProject project={featuredProject} />}
              {otherProjects.slice(0, 2).map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
            <div className="fold-right-pane space-y-6">
              {otherProjects.slice(2).map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index + 2} />
              ))}
            </div>
          </div>
        ) : (
          <>
            {featuredProject && <FeaturedProject project={featuredProject} />}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
