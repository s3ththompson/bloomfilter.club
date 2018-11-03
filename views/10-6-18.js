var html = require('choo/html')
var css = require('sheetify')

var background = require('../elements/background')
var Embed = require('../components/embed')
var embed = new Embed()

var TITLE = 'Bloom Filter – 10/6/18'

var offset = css`
  @media (min-width: 1280px) {
    :host {
        padding-top: 6.5rem;
    }
  }
`

var layout = css`
  :host {
    table-layout: fixed;
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
          <h1 class="c-black"><a href="/" class="c-yellow tdn" >Bloom Filter</a> 10/6/18 @ Partners, New Haven (Live)</h1>
          <h2 class="c-pink"><button class="${state.label == 'Pause' ? 'blink': ''}" onclick=${toggle}>${state.label}</button>, <a href="/files/Bloom_Filter-10_6_18.mp3" download="Bloom Filter 10-6-18">Download</a>, <a href="https://soundcloud.com/bloomfilter/10618-partners-new-haven-live"  target="_blank" rel="noopener noreferrer">Soundcloud</a></h2>
        </header>
        <h3 class="${offset}">Tracklist</h3>
        <table class=${layout}>
        <tr>
          <td class="vat hang-indent c8">+ Feels Like Garage</td>
          <td class="vat">S3A</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Our House</td>
          <td class="vat">Big Miz</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ No Questions</td>
          <td class="vat">Black Loops</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Blurry Sheila</td>
          <td class="vat">&on&on</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Salvation (FYI Chris Remix)</td>
          <td class="vat">Kapote</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Feel My Needs (Original Mix)</td>
          <td class="vat">Weiss</td>
        </tr>
        <tr>
          <td class="vat  hang-indent c8">+ B O D Y</td>
          <td class="vat">Kettama</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ The Break Up</td>
          <td class="vat">Detroit Swindle</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Imma Give You Love</td>
          <td class="vat">Etur Usheo</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ It's Foggy Outside</td>
          <td class="vat">Harrison BDP</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Pick Up (12" Extended Disco Version)</td>
          <td class="vat">DJ Koze</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Glue</td>
          <td class="vat">Bicep</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Don't Wait (Frankie Knuckles & Eric Kupper 'Director's Cut' Remix)</td>
          <td class="vat">Mapei</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Say You Do (DJ Version)</td>
          <td class="vat">COEO</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ The Burning Light</td>
          <td class="vat">Marquis Hawkes</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Amalthea</td>
          <td class="vat">Omar-S</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Please, Stay</td>
          <td class="vat">Matthieu Faubourg</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Your Love</td>
          <td class="vat">Frankie Knuckles</td>
        </tr>
      </table>
      </main>
      ${embed.render('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/511833123&color=%23005aff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true')}
    </body>
  `

  function toggle () {
    emit('toggle')
  }
}
