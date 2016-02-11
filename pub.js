var poster
var text
var texture

var placeText = function() {
  var padding = poster.width()*.108
  text.css('left', poster.position().left)
  text.css('width', poster.width() - padding)
  text.css('padding-left', padding)
  text.css('top', (poster.height()*.55)|0)

  var $s = $('#social')
  $s.css('top', poster.height() - $s.height() - 15)
  $s.css('left', poster.position().left + padding)
}

$(document).ready(function() {
  swal('click on your city to buy tickets!')

  var $wind = $(window)
  
  poster = $('#back img')
  text = $('#text')
  texture = $('#texture')
  
  setTimeout(function() {
    text.animate({
      opacity: 1
    })
    placeText()
  }, 300)
  
  $wind.resize(function() {
    var pw = poster.width()
    var ww = $wind.width()
    texture.css('width', pw > ww ? pw : ww)

    placeText()

    $s.css('top', poster.height() - $s.height() - 2)
  })
})
