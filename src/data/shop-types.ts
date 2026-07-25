// Data shape for a Shop Detail (full purchase) page, driven per-product.
// Optional sections are skipped by the template when omitted.

export interface ShopHeroData {
  readonly gallery: readonly string[]
  readonly title: string
  readonly subtitle: string
  readonly price: string
  readonly description: string
  readonly specLines: readonly string[]
}

export interface StoryData {
  readonly eyebrow: string
  readonly title: string
  readonly paragraphs: readonly string[]
}

export interface CaptionedImage {
  readonly caption: string
  readonly image: string
}

export interface InsidePagesData {
  readonly eyebrow: string
  readonly title: string
  readonly items: readonly CaptionedImage[]
}

export interface FeatureItem {
  readonly title: string
  readonly desc: string
}

export interface FeaturesData {
  readonly eyebrow: string
  readonly title: string
  readonly items: readonly FeatureItem[]
}

export interface PageExplainedItem {
  readonly title: string
  readonly desc: string
  readonly usage: string
  readonly image: string
}

export interface PagesExplainedData {
  readonly eyebrow: string
  readonly title: string
  readonly intro: string
  readonly items: readonly PageExplainedItem[]
}

export interface StepItem {
  readonly num: string
  readonly title: string
  readonly desc: string
}

export interface HowToUseData {
  readonly eyebrow: string
  readonly title: string
  readonly steps: readonly StepItem[]
}

export interface SpecRow {
  readonly label: string
  readonly value: string
}

export interface SpecsData {
  readonly eyebrow: string
  readonly title: string
  readonly rows: readonly SpecRow[]
}

export interface FaqItem {
  readonly q: string
  readonly a: string
}

export interface ShippingFaqData {
  readonly eyebrow: string
  readonly title: string
  readonly shipping: { readonly title: string; readonly body: string }
  readonly faq: readonly FaqItem[]
}

export interface RelatedCard {
  readonly image: string
  readonly title: string
  readonly desc: string
}

export interface RelatedData {
  readonly eyebrow: string
  readonly cards: readonly RelatedCard[]
}

export interface ShopProduct {
  readonly slug: string
  // Catalog (Shop grid) fields
  readonly catalogImage: string
  readonly catalogName: string
  readonly catalogPrice: string
  // Short language/edition badge shown over the cover (e.g. KO / EN / JP).
  readonly badge?: string
  // Detail page sections
  readonly hero: ShopHeroData
  readonly story?: StoryData
  readonly insidePages?: InsidePagesData
  readonly features?: FeaturesData
  readonly pagesExplained?: PagesExplainedData
  readonly howToUse?: HowToUseData
  readonly specs?: SpecsData
  readonly shippingFaq?: ShippingFaqData
  readonly related?: RelatedData
}
