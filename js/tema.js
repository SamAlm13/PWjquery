$(document).ready(function(){

$('.btn-info').click(function(t){
  t.preventDefault()
  
  $('.jumbotron').removeClass('bg-fundo')
  $('.jumbotron').removeClass('bg-gl')
  $('.jumbotron').addClass('bg-marine')
  
  $('.rodp').removeClass('text-white')
  $('.rodp').addClass('text-dark')

  var audio = document.querySelector("#audio");
  audio.setAttribute('src', 'music/m1.mpeg');
  var img = document.querySelector("#image");
  img.setAttribute('src', 'img/ic.png');
})

$('.btn-danger').click(function(t){
  t.preventDefault()
  
  $('.jumbotron').removeClass('bg-marine')
  $('.jumbotron').removeClass('bg-gl')
  $('.jumbotron').addClass('bg-fundo')
  
  $('.rodp').removeClass('text-white')
  $('.rodp').addClass('text-dark')

  var audio = document.querySelector("#audio");
  audio.setAttribute('src', 'music/m2.mpeg');
  var img = document.querySelector("#image");
  img.setAttribute('src', 'img/ic3.png');
})
$('.btn-dark').click(function(t){
  t.preventDefault()

  $('.jumbotron').removeClass('bg-marine')
  $('.jumbotron').removeClass('bg-fundo')
  $('.jumbotron').addClass('bg-gl')
  
  $('.rodp').removeClass('text-dark')
  $('.rodp').addClass('text-white')

  var audio = document.querySelector("#audio");
  audio.setAttribute('src', 'music/m3.mpeg');
   var img = document.querySelector("#image");
  img.setAttribute('src', 'img/ic2.png');
})

})