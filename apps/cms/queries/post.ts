import { ExecuteQuery } from '@sanity-typed/groq'

export const postsQuery = /* groq */ `*[_type == 'post']{ title, slug }`

export type PostsQuery = ExecuteQuery<
  typeof postsQuery,
  { dataset: 'production'; _type: 'post' }
>

export const postQuery = /* groq */ `*[_type == "post" && slug.current == $slug]{ title, slug }`

export type PostQuery = ExecuteQuery<
  typeof postQuery,
  { dataset: 'production'; _type: 'post' }
>
