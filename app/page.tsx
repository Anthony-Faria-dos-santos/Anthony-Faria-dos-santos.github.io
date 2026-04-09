import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { TimelineSection } from "@/components/sections/timeline"
import { ContactSection } from "@/components/sections/contact"
import { DocumentsSection } from "@/components/sections/documents"
import { Footer } from "@/components/footer"
import { FoldAwareLayout } from "@/components/foldable/FoldAwareLayout"

export default function PortfolioPage() {
  return (
    <FoldAwareLayout>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <div className="bg-zone-1">
          <AboutSection />
        </div>
        <SkillsSection />
        <div className="bg-zone-2">
          <ProjectsSection />
        </div>
        <div className="bg-zone-3">
          <TimelineSection />
        </div>
        <ContactSection />
        <DocumentsSection />
      </main>
      <Footer />
    </FoldAwareLayout>
  )
}
