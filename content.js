(function () {
    "use strict";

    window.addEventListener("message", function (event) {
        if (event.data.type && (event.data.type === "CLEAR_COOKIES_DOCUMENT")) {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].split("=");
                var domainParts = document.domain.match(/[a-zA-Z0-9]+\.?/g);
                for (var j = 0; j < domainParts.length - 1; j++) {
                    var domain = (j > 0 ? "." : "" ) + document.domain.match(/[a-zA-Z0-9]+\.?/g).splice(j).join("");
                    document.cookie = cookie[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC;domain=" + domain + ";";
                }
            }
            console.log("CLEARED COOKIES USING DOCUMENT");
        } else if (event.data.type && (event.data.type === "CLEAR_COOKIES_EXTENSION_API")) {
            chrome.runtime.sendMessage("CLEAR_COOKIES_EXTENSION_API", function (response) {
                console.log(response);
            });
        }
    }, false);

})();

/* 
 to clear cookies using only those exposed to javascript run:

 window.postMessage({ type: "CLEAR_COOKIES_DOCUMENT" }, "*");

 to clear cookies using those exposed to extension api:

 window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");
 */
