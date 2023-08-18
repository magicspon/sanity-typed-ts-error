import { DefaultDocumentNodeResolver } from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import { getUrl } from '@hubx/utils'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType },
) => {
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: any) => {
              const params = new URLSearchParams({
                uri: `/posts/${doc?.slug?.current}`,
              })

              console.log({ p: params.toString() })
              return doc?.slug?.current
                ? `${getUrl()}/api/sanity/preview?uri=/posts/${
                    doc.slug.current
                  }`
                : `${getUrl()}/api/sanity/preview`
            },
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
