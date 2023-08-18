import imageUrlBuilder from '@sanity/image-url'

export const imageConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID!,
  dataset: 'production',
  useCdn: true,
} as const

const builder = imageUrlBuilder(imageConfig)

export function urlFor(source: string) {
  return builder.image(source)
}
