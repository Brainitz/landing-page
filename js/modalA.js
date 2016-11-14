$(document).ready(function() {


var myPlayerA = videojs('vidA');

$(".contentContainer").css("min-height", $(window).height());

$("#modal-closeB").click(function() {
  if(!myPlayerA.paused()) {
    myPlayerA.pause();
  }
});

$('#playPauseA').click(function(){
  return myPlayerA.paused() ? myPlayerA.play() : myPlayerA.pause();
});

})
