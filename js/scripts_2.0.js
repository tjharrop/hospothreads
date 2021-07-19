;(function () {
	var launchpad = function () {
		$(document).on('click', '.animate-box a', function (event) {
			if ($(this).attr('href').indexOf("http") !== -1) {
				event.preventDefault();
				var url = $(this).attr('href'); 
				window.open(url, '_blank');
			}
		});

		$(document).on('click', '.newsstand a', function (event) {
			if ($(this).attr('href').indexOf("http") !== -1) {
				event.preventDefault();
				var url = $(this).attr('href'); 
				window.open(url, '_blank');
			}
		});
	};

	var extra = function () {
		var $articles = $('.newsstand h4');
		var length = $articles.length;

		$('.newsstand h4').each(function () {
			var counter = length.toString();

			if (counter.length < 2) {
				counter = "0" + counter + ".";
			} else {
				counter = counter + ".";
			}

			$(this).html(counter);

			length = length - 1;
		})
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

	var extension = function () {
		var home = document.location.href.indexOf('0.0.0.0');

		if (home !== -1) {
			$('#navbar .external').each(function () {
				var $anchor = $(this);
	
				$anchor.attr('href')
				$anchor.attr('href', $anchor.attr('href') + '.html');
			});
		}
 
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

		isotope(".filter");
	};

	var isotope = function (filter) {
		var selector = filter || '.filter-aus';

		if (selector === ".filter") {
			$('.filter-container').isotope({
				itemSelector: selector,
				percentPosition: true
			});
		} else if (selector === ".filter-all") {
			$('.filter-container').isotope({
				filter: '.filter'
			});
		} else {
			$('.filter-container').isotope({
				filter: selector
			});
		}
	};

	var filter = function (filter) {
		$('#filter-control').on('click', '.filter-check', function (event) {
			// event.preventDefault();
			var selector = '.' + $(this).context.value;
	
			isotope(selector);	
		});
	};

	var state = function () {
		var control = $('#filter-control').closest(".container");

		control.show();
	};
	window.state = state;

	var search = function () {
		var queryString = document.location.search.substr(1);
		var queries = queryString.split("&");

		for (var query of queries) {
			var keyValue = query.split("=");
			var key = keyValue[0];
			var value = keyValue[1];

			if (window[key]) {
				window[key](value);
			}
		}
	}

	var init = function () {
		launchpad();

		equality();
		extension();
		extra();
		filotope();
		filter();
	};

	// Document on load
	$(function () {
		loaded();
	});

	// Document pre-load
	search();
}());
