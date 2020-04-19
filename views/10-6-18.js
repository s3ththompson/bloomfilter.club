var layout = require('../elements/layout')

var TITLE = 'Bloom Filter – 10/6/18'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return layout({
    set: '10/6/18 @ Partners, New Haven (Live)',
    mp3: '/files/Bloom_Filter-10_6_18.mp3',
    flac: '/files/Bloom_Filter-10_6_18.flac',
    filename: 'Bloom Filter 10-6-18',
    soundcloud: 'https://soundcloud.com/bloomfilter/10618-partners-new-haven-live',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/511833123&color=%23005aff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    tracks:[
      ['S3A', 'Feels Like Garage'],
      ['Big Miz', 'Our House'],
      ['Black Loops','No Questions'],
      ['&on&on','Blurry Sheila'],
      ['Kapote', 'Salvation (FYI Chris Remix)'],
      ['Weiss', 'Feel My Needs (Original Mix)'],
      ['Kettama', 'B O D Y'],
      ['Detroit Swindle', 'The Break Up'],
      ['Etur Usheo', 'Imma Give You Love'],
      ['Harrison BDP', 'It\'s Foggy Outside'],
      ['DJ Koze', 'Pick Up (12" Extended Disco Version)']
    ],
    state: state,
    emit: emit
  })
}

