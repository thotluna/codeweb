import { encodeUrl, decodeUrl } from "./utlis/base64"
import { $ } from './utlis/utils'
import { createTemplate } from './template/index'
import './template/split'
import { editors } from './editors'

let htmlEditor, cssEditor, jsEditor

function loadHtml({ html, css, js }) {
  const htmlTemplate = createTemplate({ html, css, js })
  $('#iframe').srcdoc = htmlTemplate
}

function init() {
  const { html, css, js } = decodeUrl()
  const { htmlEditor: htmlE, cssEditor: cssE, jsEditor: jsE } = editors({
    htmlInitial: html, cssInitial: css, jsInitial: js, update
  })

  htmlEditor = htmlE
  cssEditor = cssE
  jsEditor = jsE

  loadHtml({ html, css, js })
}

function update() {
  const html = htmlEditor.getValue()
  const js = jsEditor.getValue()
  const css = cssEditor.getValue()

  encodeUrl({ html, css, js })
  loadHtml({ html, css, js })
}


init()