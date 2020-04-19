var layout = require('../elements/layout')

var TITLE = 'Bloom Filter – 4/6/19'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return layout({
    set: '4/6/19 @ Partners, New Haven (Live)',
    mp3: '/files/Bloom_Filter-4_6_19.mp3',
    flac: '/files/Bloom_Filter-4_6_19.flac',
    filename: 'Bloom Filter 4-6-19',
    soundcloud: 'https://soundcloud.com/bloomfilter/4619-partners-new-haven-live',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/605622621&color=%23005aff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    tracks:[
      ['Sammy Bananas', 'Thrilla'],
      ['Will Saul', 'For Joanie'],
      ['Unknown Artist','Pianodance'],
      ['Rimbaudian','Unknown'],
      ['Redlight', 'Equinox'],
      ['DJ Hell', 'Anything, Anytime (FJAAK Remix)'],
      ['Bicep', 'Vision of Love'],
      ['Seb Wildblood', 'Bad Space Habits'],
      ['DJ Nervous', 'Lurking'],
      ['Lone', 'Pulsar'],
      ['Natureboy Gold', 'Prozac Test'],
      ['Kettenkarussel', 'Maybe'],
      ['Jamie xx', 'Sleep Sound'],
      ['Ozel AB', 'Sierra Echo']
    ],
    state: state,
    emit: emit
  })
}
