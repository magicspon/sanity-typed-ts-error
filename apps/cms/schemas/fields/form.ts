import { defineArrayMember, defineField } from '@sanity-typed/types'
import slugify from 'slugify'
import { teaser } from './block'

const fieldTypes = [
  'text',
  'email',
  'textarea',
  'date',
  'select',
  'radio',
  'checkbox',
]
const fieldName = defineField({
  name: 'name',
  type: 'string',
  title: 'Name',
  description: 'Row name, must be unique',
  validation: (rule) => rule.required(),
})
const fieldHandle = defineField({
  name: 'handle',
  type: 'slug',
  title: 'Handle',
  validation: (rule) => rule.required(),
  options: {
    source: 'name',
    slugify: (input) =>
      slugify(input, { lower: true, strict: true, trim: true }).slice(0, 200),
  },
})
const fieldLanel = defineField({
  name: 'label',
  type: 'string',
  title: 'Label',
  validation: (rule) => rule.required(),
})

const fieldRequired = defineField({
  name: 'required',
  type: 'boolean',
  title: 'Required',
})

const fieldType = defineField({
  name: 'type',
  type: 'string',
  title: 'Type',
  description: 'Row name, must be unique',
  initialValue: fieldTypes[0],
  options: {
    list: fieldTypes,
  },
})

export const textField = defineField({
  name: 'textField',
  type: 'string',
  title: 'Text field',
})

const checkbox = defineField({
  name: 'checkboxOptions',
  type: 'object',
  title: 'Options',
  fields: [
    defineField({
      name: 'item',
      type: 'array',
      title: 'Checkbox',
      of: [defineArrayMember(textField)],
    }),
  ],
  hidden: ({ parent }) => parent?.type !== 'checkbox',
})

const radio = defineField({
  name: 'radioOptions',
  type: 'object',
  title: 'Options',
  fields: [
    defineField({
      name: 'item',
      type: 'array',
      title: 'Radio',
      of: [defineArrayMember(textField)],
    }),
  ],
  hidden: ({ parent }) => parent?.type !== 'radio',
})

const select = defineField({
  name: 'selectOptions',
  type: 'object',
  title: 'Options',
  fields: [
    defineField({
      name: 'item',
      type: 'array',
      title: 'Checkbox',
      of: [defineArrayMember(textField)],
    }),
  ],
  hidden: ({ parent }) => parent?.type !== 'select',
})

const row = defineArrayMember({
  name: 'field',
  title: 'Field',
  type: 'object',
  fields: [
    fieldName,
    fieldHandle,
    fieldLanel,
    fieldRequired,
    fieldType,
    checkbox,
    radio,
    select,
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})

export const form = defineField({
  name: 'form',
  title: 'Form',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'rows',
      title: 'Fields',
      type: 'array',
      of: [row],
    }),
    defineField({
      name: 'submitText',
      title: 'Submit button text',
      type: 'string',
      initialValue: 'Submit',
    }),
    defineField({
      ...teaser,
      title: 'Feedback text',
    }),
    defineField({
      name: 'notify',
      title: 'Notify',
      type: 'object',
      fields: [
        defineField({
          name: 'users',
          title: 'User',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'email',
              name: 'email',
              title: 'Email',
            }),
          ],
        }),
      ],
    }),
  ],
})
