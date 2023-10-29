import { renderPage } from 'vike/server'

export default async function handler(req, res) {
  const { httpResponse } = await renderPage({ urlOriginal: req.url })
  res.send(httpResponse.body)
}