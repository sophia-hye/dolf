export type Locale = 'ko' | 'en' | 'ja'

export interface ProductItem {
  readonly name: string
  readonly description: string
}

export interface PhilosophyItem {
  readonly title: string
  readonly description: string
}

export interface ValueItem {
  readonly label: string
  readonly description: string
}

export interface MissionItem {
  readonly label: string
  readonly subhead: string
  readonly description: string
}

export interface ProductFeature {
  readonly name: string
  readonly description: string
  readonly spec: string
}

export interface CircleItem {
  readonly title: string
  readonly subhead: string
  readonly description: string
}

export interface ContactInfoItem {
  readonly label: string
  readonly value: string
}

export interface Dictionary {
  readonly nav: {
    readonly about: string
    readonly products: string
    readonly community: string
    readonly contact: string
    readonly shop: string
  }
  readonly hero: {
    readonly tagline: string
    readonly title: string
    readonly subhead: string
    readonly body: string
    readonly cta: string
  }
  readonly philosophy: {
    readonly eyebrow: string
    readonly title: string
    readonly intro: string
    readonly items: readonly PhilosophyItem[]
  }
  readonly story: {
    readonly eyebrow: string
    readonly title: string
    readonly body: string
    readonly closing: readonly string[]
  }
  readonly products: {
    readonly eyebrow: string
    readonly title: string
    readonly items: readonly ProductItem[]
  }
  readonly footer: {
    readonly tagline: string
    readonly instagram: string
    readonly copyright: string
  }
  readonly about: {
    readonly hero: {
      readonly eyebrow: string
      readonly title: string
      readonly subhead: string
    }
    readonly why: {
      readonly eyebrow: string
      readonly title: string
      readonly body: string
    }
    readonly missionVision: {
      readonly eyebrow: string
      readonly items: readonly MissionItem[]
    }
    readonly coreValues: {
      readonly eyebrow: string
      readonly title: string
      readonly items: readonly ValueItem[]
    }
  }
  readonly productsPage: {
    readonly hero: {
      readonly eyebrow: string
      readonly title: string
      readonly subhead: string
    }
    readonly features: readonly ProductFeature[]
  }
  readonly community: {
    readonly hero: {
      readonly eyebrow: string
      readonly title: string
      readonly subhead: string
    }
    readonly circles: {
      readonly eyebrow: string
      readonly items: readonly CircleItem[]
    }
    readonly program: {
      readonly eyebrow: string
      readonly title: string
      readonly body: string
      readonly cta: string
    }
  }
  readonly contact: {
    readonly hero: {
      readonly eyebrow: string
      readonly title: string
      readonly subhead: string
    }
    readonly info: readonly ContactInfoItem[]
    readonly form: {
      readonly eyebrow: string
      readonly title: string
      readonly body: string
      readonly namePlaceholder: string
      readonly emailPlaceholder: string
      readonly messagePlaceholder: string
      readonly submit: string
      readonly b2bText: string
      readonly b2bCta: string
    }
  }
  readonly shop: {
    readonly hero: {
      readonly eyebrow: string
      readonly title: string
      readonly subhead: string
    }
    readonly addToCart: string
    readonly buyNow: string
    readonly cart: string
    readonly added: string
  }
}
