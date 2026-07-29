import { useState } from 'react'
import { CommunityHero } from '@/pages/community/sections/CommunityHero'
import { CirclesSection } from '@/pages/community/sections/CirclesSection'
import { ProgramSection } from '@/pages/community/sections/ProgramSection'

export function CommunityPage() {
  const [selected, setSelected] = useState(0)

  return (
    <>
      <CommunityHero />
      <CirclesSection selected={selected} onSelect={setSelected} />
      <ProgramSection selected={selected} />
    </>
  )
}
