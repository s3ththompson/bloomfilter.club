var css = require('sheetify')
var choo = require('choo')

css('ress')
css('./assets/css/css.js')
css('./assets/css/base.css')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.use(require('./stores/play'))
app.route('/', require('./views/main'))
app.route('/5-15-18', require('./views/5-15-18'))
app.route('/9-1-18', require('./views/9-1-18'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
