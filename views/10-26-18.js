var layout = require('../elements/layout')

var TITLE = 'Bloom Filter – 10/26/18'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return layout({
    set: '10/26/18 Halloween Mix @ 36 Edgewood, New Haven (Live)',
    mp3: '/files/Bloom_Filter-10_26_18.mp3',
    flac: '/files/Bloom_Filter-10_26_18.flac',
    filename: 'Bloom Filter 10-26-18',
    soundcloud: 'https://soundcloud.com/bloomfilter/102618-halloween-mix-36-edgewood-new-haven-live',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/524366034&color=%23005aff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    tracks:[
      ['Moby', 'Go (Woodtick Mix) '],
      ['Claudja Barry', 'Sweet Dynamite (Todd Terje Edit)'],
      ['Borrowed Identity & Mechanical Soul Brother','Groove On'],
      ['Saint Pepsi', 'Better'],
      ['Dan Shake', 'Thinkin'],
      ['Julio Bashmore', 'Well Wishers'],
      ['Detroit Swindle', 'The Make Up'],
      ['Titeknots', 'All Talk'],
      ['The xx', 'Lips (Edu Imbernon Remix) '],
      ['Corine', 'Pluie Fine (Polo & Pan Remix)'],
      ['Leon Vynehall', 'It’s Just (House of Dupree)']
    ],
    state: state,
    emit: emit
  })
}

