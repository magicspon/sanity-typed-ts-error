// import { defineArrayMember, defineField, defineType } from "sanity";
import { defineField, defineType } from '@sanity-typed/types'
import { image } from '../fields/image'

/** No changes using defineType, defineField, and defineArrayMember https://www.sanity.io/docs/schema-field-types#e5642a3e8506 */
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
