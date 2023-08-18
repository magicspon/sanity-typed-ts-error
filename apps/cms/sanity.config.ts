import { defineConfig } from '@sanity-typed/types'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { media } from 'sanity-plugin-media'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { post } from './schemas/channel/post'
import { author } from './schemas/channel/author'
import { forms } from './schemas/channel/forms'
import { tags } from './schemas/channel/tags'
import type { InferSchemaValues } from '@sanity-typed/types'
import { Config } from 'sanity'
import { defaultDocumentNode } from './plugins/defaultDocumentNode'

const config = defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'healthwave',

  projectId:
    process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID ??
    process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: 'production',

  plugins: [
    deskTool({ defaultDocumentNode }),
    visionTool(),
    unsplashImageAsset(),
    media(),
  ],

  schema: {
    types: [
      post,
      author,
      tags,
      forms,
      //
    ],
  },
})

export type SanityValues = InferSchemaValues<typeof config>

export default config
