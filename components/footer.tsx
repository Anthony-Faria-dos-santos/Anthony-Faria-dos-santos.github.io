"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 border-t border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-[#8b8b99] text-sm space-y-1">
        <p>
          &copy; 2026 {personalInfo.firstName} {personalInfo.lastName}
        </p>
        <p>
          Built with <span className="text-[#6ee7b7]">Next.js</span>, <span className="text-[#818cf8]">Tailwind</span> & <span className="text-[#fbbf24]">Framer Motion</span>
          {" "}<span className="text-white/20">|</span>{" "}
          <a
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b8b99] hover:text-[#6ee7b7] transition-colors link-underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </motion.footer>
  )
}
