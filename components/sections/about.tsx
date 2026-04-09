"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { aboutParagraphs, aboutDetails, aboutRqth, aboutClosing, aboutTags, personalInfo } from "@/lib/data"
import { useFoldableState } from "@/hooks/use-foldable-state"

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  )
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { isFold } = useFoldableState()

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-number">01</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2">
            A propos
          </h2>
        </motion.div>

        <div ref={ref} className="fold-two-pane grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left pane: Photo + tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="fold-left-pane relative"
          >
            <div className="glass-card p-2 glow-border relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src={personalInfo.photo}
                  alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 20%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12]/40 via-transparent to-transparent" />
              </div>
              {/* Decorative squares anchored to photo card corners */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border border-[#6ee7b7]/20 rounded-2xl -z-10" />
              <div className="hidden sm:block absolute -top-4 -left-4 w-16 h-16 border border-[#818cf8]/20 rounded-xl -z-10" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-6">
              {aboutTags.map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full font-mono text-xs badge-glass">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Right pane: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="fold-right-pane space-y-5"
          >
            {/* Intro paragraphs */}
            {aboutParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`leading-relaxed ${index === 2 ? "text-foreground font-medium" : "text-[#8b8b99]"}`}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Formation details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-card p-5 space-y-3"
            >
              <p className="text-[#8b8b99] text-sm leading-relaxed">{aboutDetails[0]}</p>

              {/* Bachelor 3 */}
              <div className="pl-4 border-l-2 border-[#6ee7b7]/30 space-y-1">
                <p className="text-[#6ee7b7] text-sm font-medium">Bachelor 3 DSNS en alternance</p>
                <div className="pl-3 space-y-0.5 text-[#8b8b99] text-xs">
                  <p>Contrat d'1 an</p>
                  <p>Rythme 1 semaine / 1 semaine</p>
                </div>
              </div>

              {/* Master E3IN */}
              <div className="pl-4 border-l-2 border-[#c084fc]/30 space-y-1">
                <p className="text-[#c084fc] text-sm font-medium">suivi du Master E3IN "Expert Cybersecurite"</p>
                <div className="pl-3 space-y-0.5 text-[#8b8b99] text-xs">
                  <p>Contrat de 2 ans, a partir de la rentree 2027</p>
                  <p>Rythme 4 semaines / 4 semaines</p>
                </div>
              </div>

              <p className="text-[#8b8b99] text-sm leading-relaxed italic">{aboutDetails[3]}</p>
            </motion.div>

            {/* RQTH badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="flex items-start gap-3 p-4 rounded-xl border border-[#6ee7b7]/20 bg-[#6ee7b7]/5"
            >
              <ShieldCheckIcon className="w-5 h-5 text-[#6ee7b7] shrink-0 mt-0.5" />
              <p className="text-sm text-[#8b8b99] leading-relaxed">
                Étant reconnu <strong className="text-foreground font-semibold">RQTH</strong>, en m'embauchant en contrat d'apprentissage, votre entreprise devient éligible aux aides maximales à l'embauche, sans limite d'âge ni de niveau.
              </p>
            </motion.div>

            {/* Closing */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-foreground leading-relaxed font-medium"
            >
              {aboutClosing}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
