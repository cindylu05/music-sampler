$(document).ready(() => {

  function hideAll() {
    $('#track1').hide();
    $('#track2').hide();
    $('#track3').hide();
    $('#track4').hide();
  };

  hideAll();

  $('#first').click(function() {
    hideAll();
    $('#track1').show();
    $.each($('.tracks'), function() {
      this.pause();
      });
  });

  $('#second').click(function() {
    hideAll();
    $('#track2').show();
    $.each($('.tracks'), function() {
      this.pause();
      });
  })

  $('#third').click(function() {
    hideAll();
    $('#track3').show();
    $.each($('.tracks'), function() {
      this.pause();
      });
  })

  $('#fourth').click(function() {
    hideAll();
    $('#track4').show();
    $.each($('.tracks'), function() {
      this.pause();
      });
  })

});
