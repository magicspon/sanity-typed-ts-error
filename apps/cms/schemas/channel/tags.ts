// import { defineArrayMember, defineField, defineType } from "sanity";
import { defineField, defineType } from '@sanity-typed/types'
import slugify from 'slugify'

/** No changes using defineType, defineField, and defineArrayMember https://www.sanity.io/docs/schema-field-types#e5642a3e8506 */
export const tags = defineType({
  name: 'tags',
  type: 'document',
  title: 'Tags',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
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
      validation: (rule) => rule.required(),
    }),
  ],
})
