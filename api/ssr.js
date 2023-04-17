import { renderPage } from 'vite-plugin-ssr/server'

export default async function handler(req, res) {
  // const { urlOriginal } = req
  // console.log('Request to url:', urlOriginal)

  // const pageContextInit = { urlOriginal }
  // const pageContext = await renderPage(pageContextInit)
  // const { httpResponse } = pageContext

  // if (!httpResponse) {
  //   res.statusCode = 200
  //   res.end()
  //   return
  // }

  // const { body, statusCode, contentType } = httpResponse
  // res.statusCode = statusCode
  // res.setHeader('content-type', contentType)
  // res.end(body)
  const { httpResponse } = await renderPage({ urlOriginal: req.url })
  res.send(httpResponse.body)
}