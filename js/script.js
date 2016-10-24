$(document).ready(function() {

  var firstName = $('.first-name');
  var lastName = $('.last-name');
  var school = $('.school');
  var district = $('.district');
  var email = $('.email');
  var state = $('.state');

  var myPlayer = videojs('vid1');

  $(".contentContainer").css("min-height", $(window).height());

  $("#modal-close").click(function() {
    if(!myPlayer.paused()) {
      myPlayer.pause();
    }
  });

  $('#playPause').click(function(){
    return myPlayer.paused() ? myPlayer.play() : myPlayer.pause();
  });


  $('.beta-sign-up').validate({
      // errorPlacement: function(error, element) {
      //   return true;
      // },
      rules: {
          firstName: {
              minlength: 2,
              maxlength: 30,
              required: true
          },
          lastName: {
              minlength: 2,
              maxlength: 30,
              required: true
          },
          school: {
              minlength: 3,
              maxlength: 30,
              required: true
          },
          district: {
              minlength: 2,
              maxlength: 30,
              required: true
          },
          email: {
              required: true,
              email: true
          },
          state: {
              minlength: 2,
              maxlength: 2,
              required: true
          }
      },
      highlight: function (element) {
          $(element).closest('.control-group').removeClass('has-success').addClass('has-error');
      },
      success: function (element) {
          element.addClass('valid')
              .closest('.control-group').removeClass('has-error').addClass('has-success');
      }
  });

  $('.submit-email').click(function(){
    $('.successMessage').show();
    setTimeout(function() {
      $('#SignInModal').modal('hide');
      $('.beta-sign-up').trigger('reset');
      $('.successMessage').hide();
    }, 1500);
    var newEmailKey = fb.database().ref().child('emails').push().key;
    var newEmail = {};

    newEmail['/emails/' + newEmailKey] = {
      first_name: firstName.val(),
      last_name: lastName.val(),
      school: school.val(),
      district: district.val(),
      email: email.val(),
      state: state.val()
    };
    return fb.database().ref().update(newEmail);

  })

})
