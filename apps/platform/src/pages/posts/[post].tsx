import * as React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getClient } from '@hubx/cms/lib/client'
import { PostQuery, postQuery } from '@hubx/cms/queries/post'
import { PreviewProvider } from '@hubx/cms/components/PreviewProvider'
import { useLiveQuery } from 'next-sanity/preview'
import { useRouter } from 'next/router'

function PreviewDocumentsCount({ post: initialData }: Pick<Props, 'post'>) {
  const params = useRouter().query
  const [data] = useLiveQuery(initialData, postQuery, { slug: params.post })

  return <pre>{JSON.stringify({ data }, null, 2)}</pre>
}

export default function Posts({
  post,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (token) {
    return (
      <PreviewProvider token={token}>
        <PreviewDocumentsCount post={post} />
      </PreviewProvider>
    )
  }
  return <PreviewDocumentsCount post={post} />
}

type Props = {
  post: PostQuery[]
  token?: string | null
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const draftMode = context.draftMode
    const token = process.env.SANITY_STUDIO_READ_TOKEN!

    const slug = context?.params?.post as string

    const client = getClient(token)

    const post = await client.fetch(postQuery, { slug })

    if (!post) {
      return {
        notFound: true,
      }
    }

    if (!draftMode)
      context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=43200',
      )

    return {
      props: {
        post,
        token: draftMode ? token : null,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}
