//global variables
$('.resume').click(function(event) {
  if ($('.resume').hasClass('on-desk')) {
    if ($(event.target).hasClass('item-one')) {
      $('.image, .description').removeClass('selected')
      $('.item-one').addClass('selected').addClass('shown')
      $('.description').removeClass('shown')
      setTimeout(function () {
        $('.image').removeClass('shown')
        $('.item-one').addClass('shown')
      }, 550);
    } else if ($(event.target).hasClass('item-two')) {
      $('.image, .description').removeClass('selected')
      $('.item-two').addClass('selected').addClass('shown')
      $('.description').removeClass('shown')
      setTimeout(function () {
        $('.image').removeClass('shown')
        $('.item-two').addClass('shown')
      }, 550);
    } else if ($(event.target).hasClass('item-three')) {
      $('.image, .description').removeClass('selected')
      $('.item-three').addClass('selected').addClass('shown')
      $('.description').removeClass('shown')
      setTimeout(function () {
        $('.image').removeClass('shown')
        $('.item-three').addClass('shown')
      }, 550);
    } else if ($(event.target).hasClass('item-four')) {
      $('.image, .description').removeClass('selected')
      $('.item-four').addClass('selected').addClass('shown')
      $('.description').removeClass('shown')
      setTimeout(function () {
        $('.image').removeClass('shown')
        $('.item-four').addClass('shown')
      }, 550);
    } else {
      $('.resume').removeClass('on-desk')
      $('.image, .description').removeClass('selected').removeClass('shown')
    }
  } else {
    $('.resume').addClass('on-desk')
    var target = $(event.target)
    setTimeout(function () {
      if (target.hasClass('item-one')) {
        $('.item-one').addClass('selected').addClass('shown')
      } else if (target.hasClass('item-two')) {
        $('.item-two').addClass('selected').addClass('shown')
      } else if (target.hasClass('item-three')) {
        $('.item-three').addClass('selected').addClass('shown')
      } else if (target.hasClass('item-four')) {
        $('.item-four').addClass('selected').addClass('shown')
      }
    }, 400);

  }
})

// $('.item-one').click(function(event) {
//   if ($('.item-one').hasClass('selected')) {
//     $('.item-one').removeClass('selected')
//     $('.resume').removeClass('on-desk')
//   } else {
//     console.log($('.resume'));
//     $('.resume').addClass('on-desk')
//     // $('.item-one').addClass('selected')
//   }
// })
