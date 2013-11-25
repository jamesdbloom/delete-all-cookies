window.addEventListener("message", function(event) {
	// only accept messages from ourselves
	if (event.source != window) return;

	if (event.data.type && (event.data.type == "CLEAR_COOKIES")) {
		var cookies = document.cookie.split(";");
		for (var i = 0; i < cookies.length; i++) {   
			var cookie =  cookies[i].split("=");
			var domainParts = document.domain.match(/[a-zA-Z0-9]+\.?/g);
			for (var j = 0; j < domainParts.length-1; j++) {
				var domain = (j > 0 ? "." : "" ) + document.domain.match(/[a-zA-Z0-9]+\.?/g).splice(j).join("");
				document.cookie = cookie[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC;domain=" + domain + ";";
			}
		}
		console.log("Cleared cookies");
	}
}, false);

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({
		code: 'window.postMessage({ type: "CLEAR_COOKIES" }, "*")'
	});
});

/* 
to clear cookies run the following from the browser:

window.postMessage({ type: "CLEAR_COOKIES" }, "*");
*/
