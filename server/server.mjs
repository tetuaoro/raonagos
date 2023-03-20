/**
 *
 * It's recommanded to use mkcert for a development server
 * through https because mkcert is an organisation
 * trusted by all browsers.
 * 
 * Here how to use : https://web.dev/how-to-use-local-https/
 *
 * */

import { createServer } from "https"
import { readFileSync } from "fs"
import { parse } from "url"
import next from "next"

const dev = process.env.NODE_ENV !== "production"
const hostname = "localhost"
const port = 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

const options = {
  key: readFileSync("server/localhost-key.pem"),
  cert: readFileSync("server/localhost.pem"),
}

app.prepare().then(() => {
  createServer(options, async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error("Error occurred handling", req.url, err)
      res.statusCode = 500
      res.end("internal server error")
    }
  })
    .once("error", (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on https://${hostname}:${port}`)
    })
})
