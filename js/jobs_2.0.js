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
		SAMPLES: {
			hospoworld: "https://www.hospoworld.com/job-search/type/viewsearch?CustomFieldIDs=431,432&SearchValues=Australia,Brisbane_Australia",
			google: "https://www.google.com/search?q=hospitality+jobs+sydney",
			indeed: "https://au.indeed.com/jobs?q=hospitality&l=Melbourne%20VIC",
			jobsearch: "https://www.jobsearch.com.au/Hospitality-jobs-in-Brisbane-QLD?r=50",
			jora: "https://au.jora.com/j?sp=search&q=Hospitality&l=Hobart+TAS",
			seek: "https://www.seek.com.au/jobs-in-hospitality-tourism/in-All-Canberra-ACT"
		},
		SELECTED: null,
		SITE: null,
		SITES: ["google", "indeed", "jobsearch", "jora", "seek"],
		URLS: {
			// KEY: casing
			// {0} state
			// {1} Capital
			// {2} STATE
			indeed: "https://au.indeed.com/jobs?q=hospitality&l={1}%20{2}",
			jobsearch: "https://www.jobsearch.com.au/Hospitality-jobs-in-{1}-{2}?r=50",
			jora: "https://au.jora.com/j?sp=search&q=Hospitality&l={1}+{2}",
			seek: "https://www.seek.com.au/jobs-in-hospitality-tourism/in-All-{1}-{2}",
			google: "https://www.google.com/search?q=hospitality+jobs+{1}"
		},
		selected: function () {
			const message = "Click here to load searches for " + STRAYA.CAPITALS[STRAYA.SELECTED] + ", " + STRAYA.SELECTED;
			$("#faaark").html(message);
			$("#gaaarn").html("");
		},
		launch: function () {
			const popped = {};

			for (const url in STRAYA.URLS) {
				if (STRAYA.URLS.hasOwnProperty(url)) {
					// let locator = STRAYA.URLS[url].replace(/\{0\}/, STRAYA.SELECTED.toLowerCase());
					let locator = STRAYA.URLS[url].replace(/\{1\}/, STRAYA.CAPITALS[STRAYA.SELECTED]);
					locator = locator.replace(/\{2\}/, STRAYA.SELECTED);

					// console.log("faaark_" + url)

					popped[url] = window.open(locator, "faaark_" + url);

					let Url = url.charAt(0).toUpperCase() + url.slice(1);

					$("#faaark_" + url).attr("href", locator).html(Url + " results for " + STRAYA.CAPITALS[STRAYA.SELECTED])
				}
			}

			if (!popped["indeed"] || !popped["jobsearch"] || !popped["jora"] || !popped["seek"] || !popped["google"]) {
				STRAYA.popup();
			}
		},
		popup: function () {
			$("#maaate").show();
		},
		refresh: function (url) {
			let locator = STRAYA.URLS[url].replace(/\{1\}/, STRAYA.CAPITALS[STRAYA.SELECTED]);
			locator = locator.replace(/\{2\}/, STRAYA.SELECTED);

			window.location = locator;
		},
		search: function () {
			const page = window.location.pathname;
			if (page.indexOf("opener") === 1) {
				const pairs = window.location.search.substring(1).split("&");
				let value;

				for (const pair of pairs) {
					const keyValue = pair.split("=");
					const key = keyValue[0];
					if (key === "site") {
						value = keyValue[1];
					}

					if (key === "selected") {
						STRAYA.SELECTED = keyValue[1];
					}
				}

				STRAYA.launch(value);
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
