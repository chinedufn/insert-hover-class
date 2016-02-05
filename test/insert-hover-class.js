var test = require('tape')
var insertHC = require('../')

var hoverJSON = {
  color: 'red',
  'font-weight': '700'
}
var hoverCSS = '' +
  '.foo:hover {' +
  'color:red !important;' +
  'font-weight:700 !important;' +
  '}'

test('browser: ' + Boolean(process.browser), function (t) {
  insertHC(hoverJSON, 'foo')
  var inBrowser = !!process.browser

  if (inBrowser) {
    var style = document.getElementsByTagName('style')[0]
    t.equal(style.innerText, hoverCSS)
  }

  if (!inBrowser) {
    t.pass('noop if no browser')
  }

  t.end()
})
