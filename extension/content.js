var totalNumAds = 0,
	blockedAds = [];

function getAds() {
	var ads = document.querySelectorAll('.promoted-tweet');
	ads = Array.prototype.slice.call(ads);	// cast NodeList to Array

	return ads.filter(ad => {
		return ad.style.display !== 'none';
	});
}

(function main() {
	console.log('checking for ads...');

	var ads = getAds(),
		numAds = ads.length;

	if (numAds) {
		console.log(numAds + ' ad(s) found!');

		totalNumAds += numAds;
		chrome.runtime.sendMessage({totalNumAds: totalNumAds});	// update badge with # of blocked ads

		for (var i = 0; i < numAds; i++) {
			ads[i].style.display = 'none';
		}
		blockedAds = blockedAds.concat(ads);
	}

	setTimeout(main, 2000); // continue searching for new ads
}());