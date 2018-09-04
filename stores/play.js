module.exports = function store (state, emitter) {
  state.label = 'Play'
  var playing = false

  emitter.on(state.events.DOMCONTENTLOADED, function() {
    emitter.on('toggle', function () {
      var widget
      try {
        widget = window.SC.Widget(document.querySelector('iframe'))
      } catch(e) {
        console.error(e)
        widget = false
      }
      if (!widget) {
        state.label = 'Error'
      } else {
        if (playing) {
          state.label = 'Play'
          widget.pause()
        } else {
          state.label = 'Pause'
          widget.play()
        }
        playing = !playing
      }
      emitter.emit('render')
    })
    emitter.on(state.events.NAVIGATE, function () {
      state.label = 'Play'
      playing = false
      emitter.emit('render')
    })
  })
}
