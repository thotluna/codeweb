import { encodeUrl, decodeUrl } from "./utlis/base64"
import { $, $$ } from './utlis/utils'
import { createTemplate } from './template/index'
import './template/split'

function loadHtml({ html, css, js }) {
  const htmlTemplate = createTemplate({ html, css, js })
  $('#iframe').srcdoc = htmlTemplate
}

function init() {
  const { html, css, js } = decodeUrl()

  $('#html').value = html
  $('#js').value = js
  $('#css').value = css

  loadHtml({ html, css, js })
}

function update() {
  const html = $('#html').value
  const js = $('#js').value
  const css = $('#css').value

  encodeUrl({ html, css, js })
  loadHtml({ html, css, js })
}

$$('.editor').forEach(editor => {
  editor.addEventListener('input', update)
})

init()