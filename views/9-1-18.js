var html = require('choo/html')
var css = require('sheetify')

var background = require('../elements/background')
var Embed = require('../components/embed')
var embed = new Embed()

var TITLE = 'Bloom Filter – 9/1/18'

var offset = css`
  @media (min-width: 1280px) {
    :host {
        padding-top: 6.5rem;
    }
  }
`

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="ff-sans fs1-6 sm-fs3-2 c-blue">
      ${background()}
      <main class="p1">
        <header class="lg-psf lg-t0 lg-pt1">
          <h1 class="c-black"><a href="/" class="c-yellow tdn" >Bloom Filter</a> 9/1/18 @ Partners, New Haven (Live)</h1>
          <h2 class="c-pink"><a href="#" class="${state.label == 'Pause' ? 'blink': ''}" onclick=${toggle}>${state.label}</a>, <a href="/assets/Bloom_Filter-9_1_18.mp3" download="Bloom Filter 9-1-18">Download</a>, <a href="https://soundcloud.com/bloomfilter/9118-partners-new-haven-live"  target="_blank" rel="noopener noreferrer">Soundcloud</a></h2>
        </header>
        <h3 class="${offset}">Tracklist</h3>
        <table>
        <tr>
          <td class="vat hang-indent">+ Phlipper (Original Mix)</td>
          <td class="vat">Lauer</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Missing You (Club Edit)</td>
          <td class="vat">Boston Bun</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ On My Side</td>
          <td class="vat">Adryiano</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Mydonna (Original Mix)</td>
          <td class="vat">Coeo</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ The Phoenix Part 2</td>
          <td class="vat">Marquis Hawkes</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ The Basement Is Burning</td>
          <td class="vat">Marquis Hawkes</td>
        </tr>
        <tr>
          <td class="vat  hang-indent">+ Wondering Mind</td>
          <td class="vat">Falty DL</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Mood</td>
          <td class="vat">Dub Striker</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Rhodes That</td>
          <td class="vat">Real J</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Untitled 02</td>
          <td class="vat">Unknown Artist</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Hunna</td>
          <td class="vat">Pascäal</td>
        </tr>
      </table>
      </main>
      ${embed.render('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/494675649&color=%23005aff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true')}
    </body>
  `

  function toggle () {
    emit('toggle')
  }
}
