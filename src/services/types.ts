export interface UnsplashTopic {
  id: string
  slug: string
  title: string
  description: string
  published_at: string
  updated_at: string
  starts_at: string
  ends_at: string | null
  only_submissions_after: string | null
  visibility: string
  featured: boolean
  total_photos: number
  current_user_contributions: any[]
  total_current_user_submissions: number | null
  links: {
    self: string
    html: string
    photos: string
  }
  media_types: string[]
  status: string

  cover_photo: UnsplashPhoto
}

export interface UnsplashPhoto {
  id: string
  slug: string
  alternative_slugs: {
    en: string
    es: string
    ja: string
    fr: string
    it: string
    ko: string
    de: string
    pt: string
  }
  created_at: string
  updated_at: string
  promoted_at: string | null
  width: number
  height: number
  color: string
  blur_hash: string
  description: string | null
  alt_description: string

  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
    small_s3: string
  }
  links: {
    self: string
    html: string
    download: string
    download_location: string
  }
  likes: number
  liked_by_user: boolean

  topic_submissions: Record<
    string,
    {
      status: string
      approved_on?: string
    }
  >
  asset_type: string
  premium: boolean
  plus: boolean
}
