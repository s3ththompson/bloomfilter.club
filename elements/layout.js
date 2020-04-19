var html = require('choo/html')
var css = require('sheetify')

var background = require('../elements/background')
var Embed = require('../components/embed')
var embed = new Embed()

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

module.exports = pageLayout

function pageLayout(options) {

  var set = options.set
  var mp3 = options.mp3
  var flac = options.flac
  var filename = options.filename
  var soundcloud = soundcloud
  var embedLink = options.embed
  var tracks = options.tracks
  var state = options.state
  var emit = options.emit


  return html`
    <body class="ff-sans fs1-6 sm-fs3-2 c-blue">
      ${background()}
      <main class="p1">
        <header class="lg-psf lg-t0 lg-pt1">
          <h1 class="c-black"><a href="/" class="c-yellow tdn" >Bloom Filter</a>${` ${set}`}</h1>
          <h2 class="c-pink"><button class="${state.label == 'Pause' ? 'blink': ''}" onclick=${toggle}>${state.label}</button>, <a href="${mp3}" download="${filename}">MP3</a>, <a href="${flac}" download="${filename}">FLAC</a>, <a href="${soundcloud}"  target="_blank" rel="noopener noreferrer">Soundcloud</a></h2>
        </header>
        <h3 class="${offset}">Tracklist</h3>
        <table class=${layout}>
        ${tracks.map(track => html`<tr>
          <td class="vat hang-indent c5 pr1">+ ${track[0]}</td>
          <td class="vat">${track[1]}</td>
        </tr>`)}
      </table>
      </main>
      ${embed.render(embedLink)}
    </body>
  `

  function toggle () {
    emit('toggle')
  }
}
