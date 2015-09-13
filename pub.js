var poster
var text
var texture

var placeText = function() {
  var padding = poster.width()*.12
  text.css('left', poster.position().left)
  text.css('width', poster.width() - padding)
  text.css('padding-left', padding)
  text.css('top', (poster.height()*.6)|0)
}

$(document).ready(function() {
  swal('click on your city to buy tickets!')

  var $wind = $(window)

  poster = $('#back img')
  text = $('#text')
  texture = $('#texture')

  text.css('visibility', 'visible')
  placeText()

  var $s = $('#social')
  $s.css('top', poster.height() - $s.height() - 2)

  $wind.resize(function() {
    var pw = poster.width()
    var ww = $wind.width()
    texture.css('width', pw > ww ? pw : ww)

    placeText()

    $s.css('top', poster.height() - $s.height() - 2)
  })
})
