import { AboutHero } from '@/pages/about/sections/AboutHero'
import { WhySection } from '@/pages/about/sections/WhySection'
import { DotLineFormSection } from '@/pages/about/sections/DotLineFormSection'
import { FounderNote } from '@/pages/about/sections/FounderNote'
import { MissionVisionSection } from '@/pages/about/sections/MissionVisionSection'
import { CoreValuesSection } from '@/pages/about/sections/CoreValuesSection'

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhySection />
      <DotLineFormSection />
      <FounderNote />
      <MissionVisionSection />
      <CoreValuesSection />
    </>
  )
}
