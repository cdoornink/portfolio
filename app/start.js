var mapContainer = document.getElementById('map-container')

function moveTo(l) {
  $('.main, .map, .right-nav, .image-gallery').removeClass('l1 l2 l3 l4 l5 l6 l7').addClass(l)
}

function mousePosition(e) {
    var posX = e.clientX;
    var posY = e.clientY;

		var height = window.innerHeight
		var width = window.innerWidth

		yP = posY / height;
		xP = posX / width;

		var containerPositionX = (xP * 50 - 25) * -1
		var containerPositionY = (yP * 50 - 25) * -1

		mapContainer.style.transform = 'perspective(400px) translate3d('+containerPositionX+'px,'+containerPositionY+'px,0)'

}

document.addEventListener('mousemove', mousePosition, false);

var timeout = false
function debounce() {
	timeout = true
	setTimeout(function () {
	  timeout = false
	}, 1500);
};

function checkScrollDirection(e) {
  if (timeout) { return }
  if (e.deltaY > 1) {
    debounce()
    moveDown()
  } else if (e.deltaY < -1) {
    debounce()
    moveUp()
  }
}


moveTo('l1')
// $('.direction-arrows .down').addClass('active')


document.addEventListener('wheel', checkScrollDirection, false);

setTimeout(function () {
  moveTo('l1')
}, 0);

$('.coin').click(function(event) {
  $(event.target).addClass('active');
  setTimeout(function () {
    $(event.target).removeClass('active');
  }, 4000);
})

$(window).click(function(event) {
  var eventTarget = $(event.target)
  console.log(eventTarget);
  if (eventTarget.hasClass('nav-link')) {
    if (eventTarget.hasClass('l1')) {
      moveTo('l1')
    } else if (eventTarget.hasClass('l2')) {
      moveTo('l2')
    } else if (eventTarget.hasClass('l3')) {
      moveTo('l3')
    } else if (eventTarget.hasClass('l4')) {
      moveTo('l4')
    } else if (eventTarget.hasClass('l5')) {
      moveTo('l5')
    } else if (eventTarget.hasClass('l6')) {
      moveTo('l6')
    }
  }

  // if (event.clientY < 80 && $('.direction-arrows .up').hasClass('active')) {
  //   moveUp()
  // }
  // //down arrow
  // else if ($(window).height() - event.clientY < 80 && $('.direction-arrows .down').hasClass('active')) {
  //   moveDown()
  // }
})

function moveUp() {
	if ($('.map').hasClass('l2')) {
    moveTo('l1');
  } else if ($('.map').hasClass('l3')) {
    moveTo('l2');
	} else if ($('.map').hasClass('l4')) {
    moveTo('l3');
	} else if ($('.map').hasClass('l5')) {
    moveTo('l4');
	} else if ($('.map').hasClass('l6')) {
    moveTo('l5');
	}
}

function moveDown() {
	if ($('.map').hasClass('l1')) {
    moveTo('l2');
  } else if ($('.map').hasClass('l2')) {
		moveTo('l3');
	} else if ($('.map').hasClass('l3')) {
		moveTo('l4');
	} else if ($('.map').hasClass('l4')) {
		moveTo('l5');
	} else if ($('.map').hasClass('l5')) {
		moveTo('l6');
	}
}
