import { renderPage } from 'vite-plugin-ssr/server'

export default async function handler(req, res) {
  const { httpResponse } = await renderPage({ urlOriginal: req.url })
  res.send(httpResponse.body)
}