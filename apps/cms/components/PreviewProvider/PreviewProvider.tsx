import * as React from 'react'
import { LiveQueryProvider } from 'next-sanity/preview'
import { getClient } from '../../lib/client'
import { SanityClient } from 'sanity'

export function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode
  token?: string
}) {
  const client = React.useMemo(() => getClient(token), [token])

  return (
    <LiveQueryProvider client={client as any}>
      {children}
      <div className="bg-dark text-white p-5 absolute top-0 left-0 z-40">
        <a className="text-sm" href="/api/exit-preview">
          Exit preview
        </a>
      </div>
    </LiveQueryProvider>
  )
}
