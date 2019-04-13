var html = require('choo/html')
var css = require('sheetify')

var background = require('../elements/background')
var Embed = require('../components/embed')
var embed = new Embed()

var TITLE = 'Bloom Filter – 4/6/19'

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
          <h1 class="c-black"><a href="/" class="c-yellow tdn" >Bloom Filter</a> 4/6/19 @ Partners, New Haven (Live)</h1>
          <h2 class="c-pink"><button class="${state.label == 'Pause' ? 'blink': ''}" onclick=${toggle}>${state.label}</button>, <a href="/files/Bloom_Filter-4_6_19.mp3" download="Bloom Filter 4-6-19">Download</a>, <a href="https://soundcloud.com/bloomfilter/4619-partners-new-haven-live"  target="_blank" rel="noopener noreferrer">Soundcloud</a></h2>
        </header>
        <h3 class="${offset}">Tracklist</h3>
        <table class=${layout}>
        <tr>
          <td class="vat hang-indent c8">+ Thrilla</td>
          <td class="vat">Sammy Bananas</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ For Joanie</td>
          <td class="vat">Will Saul</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Pianodance</td>
          <td class="vat">Unknown Artist</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Unknown</td>
          <td class="vat">Rimbaudian</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Equinox</td>
          <td class="vat">Redlight</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Anything, Anytime (FJAAK Remix)</td>
          <td class="vat">DJ Hell</td>
        </tr>
        <tr>
          <td class="vat  hang-indent c8">+ Vision of Love</td>
          <td class="vat">Bicep</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Bad Space Habits</td>
          <td class="vat">Seb Wildblood</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Lurking</td>
          <td class="vat">DJ Nervous</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Pulsar</td>
          <td class="vat">Lone</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Prozac Test</td>
          <td class="vat">Natureboy Gold</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Maybe</td>
          <td class="vat">Kettenkarussel</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Sleep Sound</td>
          <td class="vat">Jamie xx</td>
        </tr>
        <tr>
          <td class="vat hang-indent c8">+ Sierra Echo</td>
          <td class="vat">Ozel AB</td>
        </tr>
      </table>
      </main>
      ${embed.render('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/605622621&color=%23005aff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true')}
    </body>
  `

  function toggle () {
    emit('toggle')
  }
}
