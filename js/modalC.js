$(document).ready(function() {


var myPlayerC = videojs('vidC');

$(".contentContainer").css("min-height", $(window).height());

$("#modal-closeC").click(function() {
  if(!myPlayerC.paused()) {
    myPlayerC.pause();
  }
});

$('#playPauseC').click(function(){
  return myPlayerC.paused() ? myPlayerC.play() : myPlayerC.pause();
});

})
