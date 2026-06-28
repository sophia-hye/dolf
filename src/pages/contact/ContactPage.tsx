import { ContactHero } from '@/pages/contact/sections/ContactHero'
import { ContactInfoSection } from '@/pages/contact/sections/ContactInfoSection'
import { ContactFormSection } from '@/pages/contact/sections/ContactFormSection'

export function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoSection />
      <ContactFormSection />
    </>
  )
}
