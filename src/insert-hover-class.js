var createHC = require('create-hover-class')
var insertCSS = require('insert-css')

module.exports = InsertHoverClass

function InsertHoverClass (hoverStyles, name) {
  if (process.browser) {
    var hoverObj = createHC(hoverStyles, name)
    insertCSS(hoverObj.css, name)
    return hoverObj.name
  }
}
