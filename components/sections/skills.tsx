"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { skillCategories, type SkillCategory } from "@/lib/data"
import { useFoldableState } from "@/hooks/use-foldable-state"

const colorMap = {
  emerald: {
    border: "border-[#6ee7b7]/30", bg: "bg-[#6ee7b7]/10", text: "text-[#6ee7b7]",
    glow: "group-hover:shadow-[0_0_30px_rgba(110,231,183,0.15)]",
  },
  indigo: {
    border: "border-[#818cf8]/30", bg: "bg-[#818cf8]/10", text: "text-[#818cf8]",
    glow: "group-hover:shadow-[0_0_30px_rgba(129,140,248,0.15)]",
  },
  amber: {
    border: "border-[#fbbf24]/30", bg: "bg-[#fbbf24]/10", text: "text-[#fbbf24]",
    glow: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
  },
}

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const colors = colorMap[category.color]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`group glass-card p-6 scan-line transition-shadow duration-300 ${colors.glow}`}
    >
      <h3 className={`font-serif text-xl font-semibold mb-6 ${colors.text}`}>{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span key={skill.name}
            className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-colors ${
              skill.learning
                ? `border border-dashed ${colors.border} text-[#8b8b99]/70`
                : `${colors.bg} ${colors.border} border ${colors.text}`
            }`}
          >{skill.name}</span>
        ))}
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { mode, isFold } = useFoldableState()
  

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <span className="section-number">02</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2">Competences</h2>
        </motion.div>

        {isFold ? (
          /* Fold 02: Dev+SysNet LEFT (swap) | Cyber + legend RIGHT (alternance from About) */
          <div className="fold-two-pane gap-6">
            <div className="fold-left-pane space-y-6">
              <SkillCard category={skillCategories[1]} index={1} />
              <SkillCard category={skillCategories[2]} index={2} />
            </div>
            <div className="fold-right-pane space-y-6">
              <SkillCard category={skillCategories[0]} index={0} />
              <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col gap-3 text-xs text-[#8b8b99] px-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-3 border border-dashed border-white/20 rounded" />
                  <span>En apprentissage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-3 bg-white/10 border border-white/20 rounded" />
                  <span>Acquis</span>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          /* Standard: 3-column grid */
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <SkillCard key={category.title} category={category} index={index} />
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex items-center justify-center gap-6 text-xs text-[#8b8b99]">
              <div className="flex items-center gap-2">
                <span className="w-6 h-3 border border-dashed border-white/20 rounded" />
                <span>En apprentissage</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-3 bg-white/10 border border-white/20 rounded" />
                <span>Acquis</span>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}
