var html = require('choo/html')
var css = require('sheetify')

var background = css`
  :host {
    z-index: -1;
  }
`

var image = css`
  :host {
    width: 10rem;
    height: auto;
  }
  @media (min-width: 1280px) {
    :host {
      width: 20rem;
      height: auto;
    }
  }
`

module.exports = function () {
  return html`<div class="${background} psf t0 b0 r0 l0 x xjc xac">
    <img class="${image}" src="/assets/bloom.jpg" width="1024" height="878">
  </div>`
}
