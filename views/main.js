var html = require('choo/html')
var css = require('sheetify')

var background = require('../elements/background')

var TITLE = 'Bloom Filter'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="ff-sans fs1-6 sm-fs3-2 c-blue">
      ${background()}
      <main class="p1">
        <header class="lg-psf lg-t0 lg-pt1">
          <h1 class="c-black"><a href="/" class="c-yellow tdn" target="_blank" rel="noopener noreferrer">Bloom Filter</a></h1>
          <h2 class="c-pink"><a href="https://soundcloud.com/bloomfilter"  target="_blank" rel="noopener noreferrer">Soundcloud</a>, <a href="https://twitter.com/s3ththompson" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="mailto:s3ththompson@gmail.com">Email</a></h2>
          <h3><a href="/10-6-18">10/6/18 @ Partners, New Haven (Live)</a></h3>
          <h3><a href="/9-1-18">9/1/18 @ Partners, New Haven (Live)</a></h3>
          <h3><a href="/5-15-18">5/15/18 @ Partners, New Haven (Live)</a></h3>
        </header>
      </main>
    </body>
  `

  function toggle () {
    emit('toggle')
  }
}
