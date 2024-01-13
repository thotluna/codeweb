import { encode, decode } from 'js-base64';

export function encodeUrl({ html, css, js }) {
  const hash = `${encode(html)}|${encode(css)}|${encode(js)}`
  history.replaceState(null, null, `/${hash}`)
}

export function decodeUrl() {
  const { pathname } = window.location
  const [html, css, js] = pathname.slice(1).split('%7C')
  return { html: decode(html), css: decode(css), js: decode(js) }
}