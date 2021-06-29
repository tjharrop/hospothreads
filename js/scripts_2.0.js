;(function () {
  var launchpad = function () {
    $(document).on('click', '.animate-box a', function (event) {
      if ($(this).attr('href').indexOf("http") !== -1) {
        event.preventDefault();
        var url = $(this).attr('href'); 
        window.open(url, '_blank');
      }
    });
  }

	// Document on load.
	$(function(){
		launchpad();
	});

}());
