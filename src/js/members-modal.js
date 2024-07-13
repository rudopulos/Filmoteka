$('.members-modal-button').click(function () {
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
});

$(document).keydown(function (e) {
  if (e.keyCode === 27) {
    $('#modal-container').addClass('out');
    $('body').removeClass('modal-active');
  }
});

$('.main__modal__container__close-button').click(function () {
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
});
