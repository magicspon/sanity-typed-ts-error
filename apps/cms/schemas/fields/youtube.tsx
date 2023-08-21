import React from 'react'
import { defineField } from '@sanity-typed/types'

export const youtubeField = {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
    }),
  ],
}

export const youtube = defineField(youtubeField)
