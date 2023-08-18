import * as React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getClient } from '@hubx/cms/lib/client'
import { PostsQuery, postsQuery } from '@hubx/cms/queries/post'

export default function Posts({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  )
}

type Props = {
  posts: PostsQuery[]
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  try {
    const client = getClient()
    const posts = await client.fetch(postsQuery)

    context.res.setHeader(
      'Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate=43200',
    )

    return {
      props: {
        posts,
      },
    }
  } catch (err) {
    console.log(err)
    return {
      notFound: true,
    }
  }
}
