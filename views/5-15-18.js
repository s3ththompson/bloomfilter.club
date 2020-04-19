var layout = require('../elements/layout')

var TITLE = 'Bloom Filter – 5/15/18'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return layout({
    set: '5/15/18 @ Partners, New Haven (Live)',
    mp3: '/files/Bloom_Filter-5_15_18.mp3',
    flac: '/files/Bloom_Filter-5_15_18.flac',
    filename: 'Bloom Filter 5-15-18',
    soundcloud: 'https://soundcloud.com/bloomfilter/51518-partners-new-haven-live',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/444930420&color=%23005aff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    tracks:[
      ['Francis Inferno Orchestra', 'Harmony'],
      ['Polo & Pan', 'Rivolta (Get a Room! Remix)'],
      ['Dan Shake','Out Of Sight'],
      ['Earl Jeffers','Gloria'],
      ['Leon Vynehall', 'Sister'],
      ['Sound Stream', '"Live" Goes On'],
      ['Hercules And Love Affair', 'Blind (Frankie Knuckles Remix)'],
      ['Cheek', 'Venus (Sunshine People) (DJ Gregory Remix)'],
      ['Krystal Klear', 'Dedication (Sound Factory Mix)'],
      ['Schatrax', 'Keep On Lovin'],
      ['Marquis Hawkes', 'The Phoenix Part 1'],
      ['Bicep', 'Opal (Four Tet Remix)'],
      ['Daft Punk', 'Voyager'],
      ['The Blaze', 'Heaven (Bloom Filter Edit)']
    ],
    state: state,
    emit: emit
  })
}
