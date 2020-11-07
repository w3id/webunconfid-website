export interface NavLinkItem {
  name: string
  href: string
}

export interface TalkDetail {
  date: string
  title: string
  description: string
  speaker: string
  photoUrl: string
}

export interface PageMetadata {
  date: string
  title: string
  slug: string
}

export interface BasePageProps extends PageMetadata {
  content: string
}
