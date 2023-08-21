import { defineArrayMember, defineField } from '@sanity-typed/types'

export const linkField = {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      initialValue: 'Read more',
      options: {
        list: ['default', 'brand', 'ghost'],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      initialValue: 'Read more',
    }),
    defineField({
      name: 'url',
      title: 'External link',
      type: 'url',
      hidden: ({ parent, value }) => !value && !!parent?.href,
    }),
    defineField({
      name: 'href',
      title: 'Internal link',
      type: 'reference',
      to: [{ type: 'post' } as const],
      hidden: ({ parent, value }) => !value && !!parent?.url,
    }),
  ],
}

export const link = defineField(linkField)

export const linkFieldGroup = {
  name: 'linksGroup',
  type: 'object',
  title: 'Group of links',
  fields: [
    {
      type: 'array',
      name: 'links',
      of: [defineArrayMember(link)],
    },
  ],
}

export const links = defineField(linkFieldGroup)
