var layout = require('../elements/layout')

var TITLE = 'Bloom Filter – 4/18/20'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return layout({
    set: '4/18/20 @ Zoom, Online (Live)',
    mp3: '/files/Bloom_Filter-4_18_20.mp3',
    flac: '/files/Bloom_Filter-4_18_20.flac',
    filename: 'Bloom Filter 4-18-20',
    soundcloud: 'https://soundcloud.com/bloomfilter/41820-zoom-online-live',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/802432852&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    tracks:[
      ['Kerri Chandler', 'Ye Yo Ma (A Doug Gomez RePercussion Edit)'],
      ['Patrice Rushen', 'Haven\'t You Heard (Fitzy\'s Fully Charged Mix)'],
      ['Pierre Rousseau','Ivresse'],
      ['Breaka','Icy Grills'],
      ['Bicep', 'Rain'],
      ['Jennifer Vanilla', 'Space Time Motion'],
      ['AB/DC', 'This Feelin'],
      ['Steve Monite', 'Only You'],
      ['Herbert', 'I Hadn\'t Known (I Only Heard)'],
      ['Highfield Casuals', 'Highfield Daze (Original Mix)'],
      ['Jovonn', 'Pianos Of Gold (Ian Pooley Mix)'],
      ['Easy To Remember', 'C\'est Nul (Black Loops Remix)']
    ],
    state: state,
    emit: emit
  })
}
