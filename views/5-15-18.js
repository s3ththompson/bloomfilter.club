var html = require('choo/html')
var css = require('sheetify')

var background = require('../elements/background')
var Embed = require('../components/embed')
var embed = new Embed()

var TITLE = 'Bloom Filter – 5/15/18'

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
          <h1 class="c-black"><a href="/" class="c-yellow tdn" >Bloom Filter</a> 5/15/18 @ Partners, New Haven (Live)</h1>
          <h2 class="c-pink"><button class="${state.label == 'Pause' ? 'blink': ''}" onclick=${toggle}>${state.label}</button>, <a href="/files/Bloom_Filter-5_15_18.mp3" download="Bloom Filter 5-15-18">Download</a>, <a href="https://soundcloud.com/bloomfilter/51518-partners-new-haven-live"  target="_blank" rel="noopener noreferrer">Soundcloud</a></h2>
        </header>
        <h3 class="${offset}">Tracklist</h3>
        <table>
        <tr>
          <td class="vat hang-indent">+ Harmony</td>
          <td class="vat">Francis Inferno Orchestra</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Rivolta (Get a Room! Remix)</td>
          <td class="vat">Polo & Pan</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Out Of Sight</td>
          <td class="vat">Dan Shake</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Gloria (Original Mix)</td>
          <td class="vat">Earl Jeffers</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Sister (Original Mix)</td>
          <td class="vat">Leon Vynehall</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ "Live" Goes On</td>
          <td class="vat">Sound Stream</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Blind (Frankie Knuckles Remix)</td>
          <td class="vat">Hercules And Love Affair</td>
        </tr>
        <tr>
          <td class="vat  hang-indent">+ Venus (Sunshine People) (DJ Gregory Remix)</td>
          <td class="vat">Cheek</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Dedication (Sound Factory Mix)</td>
          <td class="vat">Krystal Klear</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Keep On Lovin'</td>
          <td class="vat">Schatrax</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ The Phoenix Part 1</td>
          <td class="vat">Marquis Hawkes</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Opal (Four Tet Remix)</td>
          <td class="vat">Bicep</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Voyager</td>
          <td class="vat">Daft Punk</td>
        </tr>
        <tr>
          <td class="vat hang-indent">+ Heaven (Bloom Filter Edit)</td>
          <td class="vat">The Blaze</td>
        </tr>
      </table>
      </main>
      ${embed.render('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/444930420&color=%23005aff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true')}
    </body>
  `

  function toggle () {
    emit('toggle')
  }
}
