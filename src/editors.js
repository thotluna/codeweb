import * as monaco from 'monaco-editor';
import { $ } from './utlis/utils'

import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import JsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

export function editors({ htmlInitial, cssInitial, jsInitial, update }) {

  window.MonacoEnvironment = {
    getWorker(_, label) {
      if (label === 'html') {
        return new HtmlWorker()
      }
      if (label === 'css') {
        return new CssWorker()
      }
      if (label === 'javascript') {
        return new JsWorker()
      }
    }
  }

  const options = {
    theme: 'vs-dark',
    lineNumbers: 'on',
    wordWrap: 'on',
    automaticLayout: true,

    padding: {
      botton: 8,
      top: 8,
    },
    minimap: {
      enabled: false
    }
  }

  const htmlEditor = monaco.editor.create($('#html'), {
    value: htmlInitial,
    language: 'html',
    ...options
  });

  htmlEditor.onDidChangeModelContent(update)

  const cssEditor = monaco.editor.create($('#css'), {
    value: cssInitial,
    language: 'css',
    ...options
  });

  cssEditor.onDidChangeModelContent(update)

  const jsEditor = monaco.editor.create($('#javascript'), {
    value: jsInitial,
    language: 'javascript',
    ...options
  });

  jsEditor.onDidChangeModelContent(update)

  return { htmlEditor, cssEditor, jsEditor }

}