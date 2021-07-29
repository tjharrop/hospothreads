;(function () {
	var empartial = function () {
		$( '#fh5co-header' ).load('partials/header.html', function () {
			var id = document.body.id || "orphan";
			var className = "nav-" + id
			var selector = "#" + id + " ." + className;

			$(selector).addClass("active");

			window.extension();
		});

		$( '#fh5co-footer' ).load('partials/footer.html', function () {
			var options = { year: 'numeric' };
			var today  = new Date();
			var year = today.toLocaleDateString("en-AU", options); // 1972

			$('.copy-right span').html('&copy; ' + year);

			inanimate();
		});
	};

	var inanimate = function () {
		if ($.fn.waypoint) {
			window.contentWayPoint();
		} else {
			var $container = $('#fh5co-footer  .container');
			$container.addClass('inanimate-box');
		}
	}

	var init = function () {
		empartial();
	};

	// Document on load
	$(function () {
		init();
	});
}());
