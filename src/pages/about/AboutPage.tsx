import { AboutHero } from '@/pages/about/sections/AboutHero'
import { WhySection } from '@/pages/about/sections/WhySection'
import { MissionVisionSection } from '@/pages/about/sections/MissionVisionSection'
import { CoreValuesSection } from '@/pages/about/sections/CoreValuesSection'

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhySection />
      <MissionVisionSection />
      <CoreValuesSection />
    </>
  )
}
