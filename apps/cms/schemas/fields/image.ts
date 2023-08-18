import { defineField } from '@sanity-typed/types'

export const image = defineField({
  name: 'img',
  type: 'object',
  title: 'Image',
  fields: [
    // {
    //   name: 'asset',
    //   type: 'image',
    //   title: 'Image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt text',
    },
  ],
})
