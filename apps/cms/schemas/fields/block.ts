import { defineArrayMember, defineField } from '@sanity-typed/types'
import { image } from './image'
import { link, links } from './link'
import { youtube } from './youtube'

export const block = defineField({
  name: 'block',
  type: 'array',
  title: 'Block',
  validation: (rule) => rule.required(),
  of: [
    defineArrayMember({
      type: 'block',
      name: 'Content',
      marks: {
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'post' } as const],
              },
            ],
          },
        ],
      },
    }),
    image,
    link,
    links,
    youtube,
    defineArrayMember({
      name: 'form',
      title: 'Form',
      type: 'reference',
      to: [{ type: 'form' } as const],
    }),
  ],
})

export const teaser = defineField({
  name: 'teaser',
  type: 'array',
  title: 'Teaser',
  validation: (rule) => rule.required(),
  of: [
    defineArrayMember({
      type: 'block',
      name: 'Content',
      marks: {
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'post' } as const],
              },
            ],
          },
        ],
      },
    }),
  ],
})
