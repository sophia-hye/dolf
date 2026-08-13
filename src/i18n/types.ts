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
  readonly fee?: string
  readonly comingSoon?: boolean
}

export interface ContactInfoItem {
  readonly label: string
  readonly value: string
}

export interface SeoMeta {
  readonly title: string
  readonly description: string
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
    readonly detailCta: string
    readonly b2b: {
      readonly eyebrow: string
      readonly title: string
      readonly body: string
      readonly cta: string
    }
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
      readonly cta: string
      readonly comingSoon: string
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
      readonly sending: string
      readonly sent: string
      readonly error: string
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
    readonly soldOut: string
    readonly cartPage: {
      readonly title: string
      readonly empty: string
      readonly continueShopping: string
      readonly remove: string
      readonly subtotal: string
      readonly shipping: string
      readonly total: string
      readonly checkout: string
      readonly clear: string
      readonly paymentSoon: string
    }
  }
  readonly account: {
    readonly signInNav: string
    readonly myPageNav: string
    readonly adminNav: string
    readonly logout: string
    readonly signIn: {
      readonly eyebrow: string
      readonly title: string
      readonly subhead: string
      readonly emailLabel: string
      readonly emailPlaceholder: string
      readonly passwordLabel: string
      readonly passwordPlaceholder: string
      readonly forgotPassword: string
      readonly keepLoggedIn: string
      readonly submit: string
      readonly notice: string
      readonly noAccount: string
      readonly signUpLink: string
      readonly notFound: string
    }
    readonly signUp: {
      readonly eyebrow: string
      readonly title: string
      readonly subhead: string
      readonly countryLabel: string
      readonly nameLabel: string
      readonly namePlaceholder: string
      readonly emailLabel: string
      readonly emailPlaceholder: string
      readonly phoneLabel: string
      readonly phonePlaceholder: string
      readonly passwordLabel: string
      readonly passwordPlaceholder: string
      readonly passwordConfirmLabel: string
      readonly passwordConfirmPlaceholder: string
      readonly terms: string
      readonly submit: string
      readonly hasAccount: string
      readonly signInLink: string
      readonly passwordMismatch: string
      readonly passwordWeak: string
      readonly phoneInvalid: string
    }
    readonly forgotPassword: {
      readonly eyebrow: string
      readonly title: string
      readonly subhead: string
      readonly emailLabel: string
      readonly emailPlaceholder: string
      readonly submit: string
      readonly sent: string
      readonly backToSignIn: string
    }
    readonly resetPassword: {
      readonly eyebrow: string
      readonly title: string
      readonly subhead: string
      readonly passwordLabel: string
      readonly passwordPlaceholder: string
      readonly passwordConfirmLabel: string
      readonly passwordConfirmPlaceholder: string
      readonly submit: string
      readonly success: string
      readonly noSession: string
    }
    readonly myPage: {
      readonly eyebrow: string
      readonly greeting: string
      readonly subhead: string
      readonly statsOrders: string
      readonly statsWishlist: string
      readonly statsSpent: string
      readonly ordersTitle: string
      readonly noOrders: string
      readonly wishlistTitle: string
      readonly settingsTitle: string
      readonly settingName: string
      readonly settingEmail: string
      readonly settingPhone: string
      readonly settingAddress: string
      readonly settingMembership: string
      readonly edit: string
      readonly save: string
      readonly cancel: string
      readonly ordersNote: string
      readonly tracking: string
      readonly removeWish: string
      readonly emptyWishlist: string
    }
    readonly checkout: {
      readonly eyebrow: string
      readonly title: string
      readonly recipientLabel: string
      readonly recipientPlaceholder: string
      readonly emailLabel: string
      readonly emailPlaceholder: string
      readonly phoneLabel: string
      readonly phonePlaceholder: string
      readonly addressLabel: string
      readonly addressPlaceholder: string
      readonly postcodeLabel: string
      readonly searchAddress: string
      readonly addressBaseLabel: string
      readonly addressDetailLabel: string
      readonly addressDetailPlaceholder: string
      readonly addressRequired: string
      readonly guestBadge: string
      readonly memberBadge: string
      readonly subtotal: string
      readonly shipping: string
      readonly total: string
      readonly placeOrder: string
      readonly placing: string
      readonly redirecting: string
      readonly success: string
      readonly successNote: string
      readonly paid: string
      readonly paidNote: string
      readonly confirmPending: string
      readonly failTitle: string
      readonly failNote: string
      readonly retry: string
      readonly emptyCart: string
      readonly backToShop: string
      readonly viewOrders: string
    }
    readonly orderStatus: {
      readonly pending: string
      readonly paid: string
      readonly shipped: string
      readonly delivered: string
      readonly cancelled: string
    }
  }
  readonly seo: {
    readonly home: SeoMeta
    readonly about: SeoMeta
    readonly products: SeoMeta
    readonly community: SeoMeta
    readonly contact: SeoMeta
    readonly shop: SeoMeta
  }
}
