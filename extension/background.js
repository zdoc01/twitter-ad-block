// Handle badge updates
chrome.runtime.onMessage.addListener(function(req, sender, sendResp) {
	if (req.totalNumAds) {
		chrome.browserAction.setBadgeText({text: req.totalNumAds+''}); // set # of ads blocked in badge
	}
});