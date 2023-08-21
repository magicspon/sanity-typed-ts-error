import { defineType } from '@sanity-typed/types'
import { form } from '../fields/form'

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
