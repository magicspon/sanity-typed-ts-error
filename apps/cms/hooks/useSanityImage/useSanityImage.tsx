import { useNextSanityImage } from 'next-sanity-image'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from '../../lib/client'
import { imageConfig } from '../../lib/image'

export function useSanityImage(image: SanityImageSource) {
  const imageProps = useNextSanityImage(client, image)

  return imageProps
}
