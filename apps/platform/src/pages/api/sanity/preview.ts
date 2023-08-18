import type { NextApiRequest, NextApiResponse } from 'next'

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  const uri = req.query.uri ?? '/'

  res.setDraftMode({ enable: true })
  res.writeHead(307, { Location: uri })
  res.end()
}
