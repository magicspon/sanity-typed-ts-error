// import { defineArrayMember, defineField, defineType } from "sanity";
import { defineType } from '@sanity-typed/types'
import { form } from '../fields/form'

/** No changes using defineType, defineField, and defineArrayMember https://www.sanity.io/docs/schema-field-types#e5642a3e8506 */
export const forms = defineType({
  name: 'form',
  type: 'document',
  title: 'Forms',
  fields: [form],
  preview: {
    select: {
      title: 'form.title',
    },
  },
})
