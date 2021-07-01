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

	var shirthouse = function (state) {
		$('.tshirt__switch:last-child').animate({ 'opacity' : state }, 'slow');
		setTimeout(function () {
			shirthouse(state ? 0 : 1);
		}, 3000);
	
	};

	var equality = function () {
		var minimum = 0;
		$('.filter').each(function () {
			var venue = $(this);
			console.log($(this).height())

			if (venue.height() > minimum) {
				minimum = venue.height();
			}
		}).height(minimum);

		// alert(minimum)
	};

	var filter = function (filter) {
		var selector = filter || 'filter-aus';

		// $('.filter').isotope({
		// 	itemSelector: selector
		// });
	};

	// Document on load
	$(function(){
		launchpad();
		shirthouse();
		equality();
		// filter();
	});
}());
