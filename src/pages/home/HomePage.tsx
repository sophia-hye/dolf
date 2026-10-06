import { HeroSection } from '@/pages/home/sections/HeroSection'
import { PhilosophySection } from '@/pages/home/sections/PhilosophySection'
import { StorySection } from '@/pages/home/sections/StorySection'
import { ProductsSection } from '@/pages/home/sections/ProductsSection'
import { BloomSection } from '@/pages/home/sections/BloomSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <StorySection />
      <ProductsSection />
      <BloomSection />
    </>
  )
}
