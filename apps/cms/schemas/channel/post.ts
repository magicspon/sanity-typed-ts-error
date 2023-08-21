import { defineArrayMember, defineField, defineType } from '@sanity-typed/types'
import { block, teaser } from '../fields/block'
import slugify from 'slugify'
import { image } from '../fields/image'
import { meta, openGraph } from '../fields/seo'

export const post = defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  groups: [
    { name: 'teaser' },
    { name: 'post' },
    { name: 'meta' },
    { name: 'open graph' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          slugify(input, { lower: true, strict: true, trim: true }).slice(
            0,
            200,
          ),
      },
    }),

    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{ type: 'author' } as const],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'tags',
          type: 'reference',
          title: 'Tags',
          to: [{ type: 'tags' } as const],
        }),
      ],
    }),
    defineField({
      ...image,
      group: 'teaser',
    }),
    defineField({
      ...teaser,
      group: 'teaser',
    }),
    defineField({
      ...block,
      group: 'post',
    }),
    defineField({
      ...meta,
      group: 'meta',
    }),
    defineField({
      ...openGraph,
      group: 'open graph',
    }),
  ],
})
