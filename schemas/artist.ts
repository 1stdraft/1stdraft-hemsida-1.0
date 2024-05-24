import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'artist',
  title: 'Artist',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    //  validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context)
      },
      hidden: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
   //   validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url'
    }),
    defineField({
      name: 'spotify',
      title: 'Spotify',
      type: 'url'
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube',
      type: 'url'
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'array',
      of: [
        { type: 'block' }
      ],
    }),
  ],
})
