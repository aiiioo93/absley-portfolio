import { FeaturedProjects } from "@/components/home/featured-projects"
import { Hero } from "@/components/home/hero"
import { ServicesPreview } from "@/components/home/services-preview"
import { StackPreview } from "@/components/home/stack-preview"

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <ServicesPreview />
      <StackPreview />
    </main>
  )
}