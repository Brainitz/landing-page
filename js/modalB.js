$(document).ready(function() {


var myPlayerB = videojs('vid2');

$(".contentContainer").css("min-height", $(window).height());

$("#modal-closeB").click(function() {
  if(!myPlayerB.paused()) {
    myPlayerB.pause();
  }
});

$('#playPauseB').click(function(){
  return myPlayerB.paused() ? myPlayerB.play() : myPlayerB.pause();
});

})
