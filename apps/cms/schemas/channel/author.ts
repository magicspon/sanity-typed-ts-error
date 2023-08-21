import { defineField, defineType } from '@sanity-typed/types'
import { image } from '../fields/image'

export const author = defineType({
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({ ...image, validation: (rule) => rule.required() }),
  ],
})
