var html = require('choo/html')

var TITLE = 'Bloom Filter – 5/15/18'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="ff-sans fs1-6 sm-fs3-2 c-blue">
      <main class="p1">
        <h1 class="lg-psf lg-t0 lg-pt1">404</h1>
      </main>
    </body>
  `
}
