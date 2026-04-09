"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { ChevronDown } from "lucide-react"

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
}

function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid gradient-mesh">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        {/* Photo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full emerald-glow" />
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-[#6ee7b7]/50 p-1 overflow-hidden">
              <img
                src={personalInfo.photo}
                alt={`Photo de ${personalInfo.firstName} ${personalInfo.lastName}`}
                loading="eager"
                className="w-full h-full rounded-full object-cover"
                style={{ objectPosition: "center 30%" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <h1 className="font-serif font-bold mb-4">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
            <AnimatedText text={personalInfo.firstName} />
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mt-2">
            <span className="hidden sm:inline">
              <AnimatedText text={personalInfo.lastName} />
            </span>
            <span className="sm:hidden">
              <AnimatedText text={personalInfo.lastNameMobile} />
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-mono text-sm sm:text-base text-[#6ee7b7] mb-4"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-[#8b8b99] text-sm sm:text-base max-w-lg mx-auto mb-12"
        >
          {personalInfo.subtext}
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="inline-flex flex-col items-center gap-2 text-[#8b8b99] hover:text-[#6ee7b7] transition-colors group"
        >
          <span className="text-sm tracking-wider uppercase">Explorer</span>
          <ChevronDown className="w-6 h-6 animate-bounce-slow group-hover:text-[#6ee7b7]" />
        </motion.a>
      </div>
    </section>
  )
}
