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

	// Document on load.
	$(function(){
		launchpad();
		shirthouse();
	});

}());
