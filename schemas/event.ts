import { BookIcon } from '@sanity/icons'
import IconCalendarEvent from 'components/IconCalendarEvent'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'


export default defineType({
    name: 'event',
    title: 'Event',
    icon: IconCalendarEvent,
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'about',
        title: 'About',
        type: 'array',
        of: [
          { type: 'block' }
        ],
      }),
      defineField({
        name: 'date',
        title: 'Date',
        type: 'date',
      //  initialValue: () => new Date().toISOString(),
      }),
      defineField({
        name: 'link',
        title: 'Link',
        type: 'url'
      }),

      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
          isUnique: (value, context) => context.defaultIsUnique(value, context),
        },
        validation: (rule) => rule.required(),
      }),
    ],
  })
  