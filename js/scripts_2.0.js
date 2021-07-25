;(function () {
	var options = {
		stated: '[value="filter-all"]'
	};

	var launchpad = function () {
		$(document).on('click', '.animate-box a', function (event) {
			if ($(this).attr('href').indexOf("http") !== -1) {
				event.preventDefault();
				var url = $(this).attr('href'); 
				window.open(url, '_blank');
			}
		});

		$(document).on('click', '.newsextra a, .newsstand a', function (event) {
			if ($(this).attr('href').indexOf("http") !== -1) {
				event.preventDefault();
				var url = $(this).attr('href'); 
				window.open(url, '_blank');
			}
		});

		$(document).on('click', '.venue a', function (event) {
			if ($(this).attr('href').indexOf("http") !== -1) {
				event.preventDefault();
				var url = $(this).attr('href'); 
				window.open(url, '_blank');
			}
		});

		$(document).on('click', 'a.thirdparty', function (event) {
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

		function plus1() {
			return length + 1;
		}

		function counterattack(counter) {
			if (counter.length < 2) {
				counter = "0" + counter + ".";
			} else {
				counter = counter + ".";
			}

			length = length - 1;

			return counter;
		}

		$('.newsextra h4').html(counterattack(plus1().toString()));
		$('.newsextra h3 span').html($('.newsextra h4').html());

		length = plus1();

		$('.newsstand h4').each(function () {
			var counter = length.toString();
			$(this).html(counterattack(counter));
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
	
				$anchor.attr('href', $anchor.attr('href') + '.html');
			});

			$('#navbar .thirdparty').each(function () {
				var $anchor = $(this);

				$anchor.attr('href', $anchor.attr('href').split('.html')[0]);
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
			event.preventDefault();
			var $selected = $(this);
			var selector = '.' + $selected.context.value;

			$('.filter-check').prop( "checked", false );
			$selected.prop( "checked", true );
	
			isotope(selector);	
		});
	};

	var filtered = function () {
		var selector = '.filter-' + options.stated.split('-')[1].split('"')[0];

		isotope(selector);
	};

	var state = function (stated) {
		// var control = $('#filter-control').closest(".container");

		// control.show();

		if (stated) {
			options.stated = `[value="filter-${stated}"]`;
		}
	};
	window.state = state;

	var switcher = function () {
		var counter = $('[data-toggle="switch"]').length;
		var counted = 0;

		$('[data-toggle="switch"]').bootstrapSwitch({
			onColor: 'retroOrange',
			onInit: function () {
				counted += 1;

				if (counted === counter) {
					$('#filter-control').fadeTo('slow', 1);
				}
			},
			onSwitchChange: function () {
				$('[data-toggle="switch"]').not($(this)).bootstrapSwitch('state', false, true);

				$(this).click();
			}
		});

		$(options.stated).bootstrapSwitch('state', true, true).click();
	};

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
		switcher();
		filtered();
	};

	// Document on load
	$(function () {
		loaded();
	});

	// Document pre-load
	search();
}());
