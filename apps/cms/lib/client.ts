import { createClient } from '@sanity-typed/client'
import type { SanityValues } from '../sanity.config'

export const client = createClient<SanityValues>()({
  projectId:
    process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID ??
    process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-23',
  // studioUrl: '/studio',
})

export function getClient(token?: string) {
  if (token) {
    return client.withConfig({
      token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}
