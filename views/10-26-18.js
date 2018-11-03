var html = require('choo/html')
var css = require('sheetify')

var background = require('../elements/background')
var Embed = require('../components/embed')
var embed = new Embed()

var TITLE = 'Bloom Filter – 10/26/18'

var offset = css`
  @media (min-width: 1280px) {
    :host {
        padding-top: 9.5rem;
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
          <h1 class="c-black"><a href="/" class="c-yellow tdn" >Bloom Filter</a> 10/26/18 Halloween Mix @ 36 Edgewood, New Haven (Live)</h1>
          <h2 class="c-pink"><button class="${state.label == 'Pause' ? 'blink': ''}" onclick=${toggle}>${state.label}</button>, <a href="/files/Bloom_Filter-10_26_18.mp3" download="Bloom Filter 10-26-18">Download</a>, <a href="https://soundcloud.com/bloomfilter/102618-halloween-mix-36-edgewood-new-haven-live"  target="_blank" rel="noopener noreferrer">Soundcloud</a></h2>
        </header>
        <h3 class="${offset}">Tracklist</h3>
        <table>
        <tr>
          <td class="vat hang-indent c8">+ Go (Woodtick Mix)</td>
          <td class="vat">Moby</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Sweet Dynamite (Todd Terje Edit)</td>
          <td class="vat">Claudja Barry</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Groove On</td>
          <td class="vat">Borrowed Identity & Mechanical Soul Brother</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Better</td>
          <td class="vat">Saint Pepsi</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Thinkin</td>
          <td class="vat">Dan Shake</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Well Wishers</td>
          <td class="vat">Julio Bashmore</td>
        </tr>
        <tr>
          <td class="vat  hang-indent c8">+ The Make Up</td>
          <td class="vat">Detroit Swindle</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ All Talk</td>
          <td class="vat">Titeknots</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Lips (Edu Imbernon Remix)</td>
          <td class="vat">The xx</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Pluie Fine (Polo & Pan Remix)</td>
          <td class="vat">Corine</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ It’s Just (House of Dupree)</td>
          <td class="vat">Leon Vynehall</td>
        </tr>
      </table>
      </main>
      ${embed.render('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/524366034&color=%23005aff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true')}
    </body>
  `

  function toggle () {
    emit('toggle')
  }
}
