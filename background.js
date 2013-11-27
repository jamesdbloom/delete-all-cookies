(function () {
    "use strict";

    var removeAllCookies = function () {

        if (!chrome.cookies) {
            chrome.cookies = chrome.experimental.cookies;
        }

        var removeCookie = function (cookie) {
            var url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain + cookie.path;
            chrome.cookies.remove({"url": url, "name": cookie.name});
        };

        chrome.cookies.getAll({}, function (all_cookies) {
            var count = all_cookies.length;
            for (var i = 0; i < count; i++) {
                removeCookie(all_cookies[i]);
            }
        });

        return "CLEARED COOKIES USING EXTENSION API";
    };

    chrome.browserAction.onClicked.addListener(function (tab) {
        console.log(removeAllCookies());
    });

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request === "CLEAR_COOKIES_EXTENSION_API") {
            sendResponse(removeAllCookies());
            sendResponse(removeAllCookies());
        }
    });

})();

/* 
 to clear cookies using only those exposed to javascript run:

 window.postMessage({ type: "CLEAR_COOKIES_DOCUMENT" }, "*");

 to clear cookies using those exposed to extension api:

 window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");
 */
