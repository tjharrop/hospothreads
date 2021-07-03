;(function () {
	var launchpad = function () {
		$(document).on('click', '.animate-box a', function (event) {
			if ($(this).attr('href').indexOf("http") !== -1) {
				event.preventDefault();
				var url = $(this).attr('href'); 
				window.open(url, '_blank');
			}
		});
	};

	var equality = function () {
		var minimum = 0;
		$('.filter').each(function () {
			var venue = $(this);

			if (venue.height() > minimum) {
				minimum = venue.height();
			}
		}).height(minimum);
	};

	var loaded = function () {
		$('.portfolio-container .portfolio-image').imagesLoaded(function () {
			$(".portfolio-image").each(function () {
				$(this).hide().parent().css( "background-image", "url(" + this.src + ")");
			});

			init();
		});
	};

	var filotope = function () {
		// Do the needful
		// alert("filotope")
	};

	var isotope = function (filter) {
		var selector = filter || '.filter-aus';

		$('.filter').isotope({
			itemSelector: selector,
			layoutMode: 'fitRows'
		});
	};

	var filter = function (filter) {
		$('#filter-control').on('click', '.filter-check', function (event) {
			event.preventDefault();
	
			isotope('.' + $(this).context.value);	
		});
	};

	var init = function () {
		launchpad();
		equality();
		filotope();
		filter();
	};

	// Document on load
	$(function () {
		loaded();
	});
}());
