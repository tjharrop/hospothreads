(function(){
	const STRAYA = {
		CAPITALS: {
			ACT: "Canberra",
			NSW: "Sydney",
			NT: "Darwin",
			QLD: "Brisbane",
			SA: "Adelaide",
			TAS: "Hobart",
			VIC: "Melbourne",
			WA: "Perth"
		},
		SELECTED: null,
		SAMPLES: {
			hospoworld: "https://www.hospoworld.com/job-search/type/viewsearch?CustomFieldIDs=431,432&SearchValues=Australia,Brisbane_Australia",
			google: "https://www.google.com/search?q=hospitality+jobs+sydney",
			indeed: "https://au.indeed.com/jobs?q=hospitality&l=Melbourne%20VIC",
			jobsearch: "https://www.jobsearch.com.au/Hospitality-jobs-in-Brisbane-QLD?r=50",
			jora: "https://au.jora.com/j?sp=search&q=Hospitality&l=Hobart+TAS",
			seek: "https://www.seek.com.au/jobs-in-hospitality-tourism/in-All-Canberra-ACT"
		},
		URLS: {
			// KEY: casing
			// {0} state
			// {1} Capital
			// {2} STATE
			google: "https://www.google.com/search?q=hospitality+jobs+{1}",
			indeed: "https://au.indeed.com/jobs?q=hospitality&l={1}%20{2}",
			jobsearch: "https://www.jobsearch.com.au/Hospitality-jobs-in-{1}-{2}?r=50",
			jora: "https://au.jora.com/j?sp=search&q=Hospitality&l={1}+{2}",
			seek: "https://www.seek.com.au/jobs-in-hospitality-tourism/in-All-{1}-{2}"
		},
		selected: function () {
			const message = "Click here to load searches for " + STRAYA.CAPITALS[STRAYA.SELECTED] + ", " + STRAYA.SELECTED;
			$("#faaark").html(message);
			$("#gaaarn").html("");
		},
		launch: function () {
			for (const url in STRAYA.URLS) {
				if (STRAYA.URLS.hasOwnProperty(url)) {
					// let locator = STRAYA.URLS[url].replace(/\{0\}/, STRAYA.SELECTED.toLowerCase());
					let locator = STRAYA.URLS[url].replace(/\{1\}/, STRAYA.CAPITALS[STRAYA.SELECTED]);
					locator = locator.replace(/\{2\}/, STRAYA.SELECTED);

					window.open(locator, "hospothreads_" + url);
				}
			}
		},
		listen: function () {
			// $("#down_under a").mouseenter(function (event) {
			// 	$("#map span").html(event.target.name);
			// }).mouseout(function (event) {
			// 	$("#map span").html("");
			// });

			$("#down_under a").click(function (event) {
				STRAYA.SELECTED = event.target.name;
				STRAYA.selected();
			});

			$("#faaark").click(function (event) {
				event.stopPropagation();
				STRAYA.launch();
			});
		},
		init: function () {
			this.listen();
		}
	};

	window.STRAYA = STRAYA;
	STRAYA.init();
}());
