var Nanocomponent = require('nanocomponent')
var html = require('choo/html')

class Embed extends Nanocomponent {
  constructor () {
    super()
  }

  createElement (src) {
    this.src = src
    return html`<div>
      <iframe class="dn" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="${this.src}"></iframe>
      <script src="https://w.soundcloud.com/player/api.js">
    </div>`
  }

  update (src) {
    return src !== this.src
  }
}

module.exports = Embed
