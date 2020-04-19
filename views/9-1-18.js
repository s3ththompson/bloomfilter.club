var layout = require('../elements/layout')

var TITLE = 'Bloom Filter – 9/1/18'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return layout({
    set: '9/1/18 @ Partners, New Haven (Live)',
    mp3: '/files/Bloom_Filter-9_1_18.mp3',
    flac: '/files/Bloom_Filter-9_1_18.flac',
    filename: 'Bloom Filter 9-1-18',
    soundcloud: 'https://soundcloud.com/bloomfilter/9118-partners-new-haven-live',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/494675649&color=%23005aff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    tracks:[
      ['Lauer', 'Phlipper'],
      ['Boston Bun', 'Missing You (Club Edit)'],
      ['Adryiano','On My Side'],
      ['Coeo','Mydonna'],
      ['Marquis Hawkes', 'The Phoenix Part 2'],
      ['Marquis Hawkes', 'The Basement Is Burning'],
      ['Falty DL', 'Wondering Mind'],
      ['Dub Striker', 'Mood'],
      ['Real J', 'Rhodes That'],
      ['Unknown Artist', 'Untitled 02'],
      ['Pascäal', 'Hunna']
    ],
    state: state,
    emit: emit
  })
}
