import { defineArrayMember, defineField } from '@sanity-typed/types'
import { image, imageField } from './image'
import { link, linkField, linkFieldGroup, links } from './link'
import { youtube, youtubeField } from './youtube'

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
    defineArrayMember(imageField),
    defineArrayMember(youtubeField),
    defineArrayMember(linkField),
    defineArrayMember(linkFieldGroup),
    // link,
    // links,
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
