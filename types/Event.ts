import { PortableTextBlock } from 'next-sanity'
import { Reference, Slug } from 'sanity'

export type Event = {
  _id: string
  _createdAt: Date
  title: string
  about: PortableTextBlock[]
  link: string
  slug: Slug
  date: string
}
