delete-all-cookies
==================

#### What This Extension Does

This Chrome extension deletes all cookies (including HTTP only cookies) by either send a postMessage from any javascript on any page or by clicking the extension action (i.e. clicking the icon).

This chrome extension is particularly useful when you need to delete cookies as part of an automated test.

### Delete All Cookies

To delete all cookies using javascript run the following line:

    window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");

### Delete Cookies Visible To JavaScript

To delete cookies for the domain and super-domains of current page using javascript run the following line:

    window.postMessage({ type: "CLEAR_COOKIES_DOCUMENT" }, "*");

Note: the CLEAR_COOKIES_DOCUMENT mode does not delete any cookie that has a path value as this is not possible using the document object.

### Receive Notification

It is also possible to be notified of when cookies have been cleared.  This is particularly important if a particular operation should not happen until you have guaranteed that cookies have been cleared.

To receive a notification of when the cookies have been cleared add an event listener as follows:

    window.addEventListener("message", function (event) {
        if (event.data.type && (event.data.type === "COOKIES_CLEARED_VIA_EXTENSION_API")) {
            // do something
        }
    });

#### Loading The Extension

To install this extension via the Chrome Web Store go to: https://chrome.google.com/webstore/detail/delete-all-cookies/ahccjggbdjgjnjfnojfgjlonbidjmijb?hl=en&gl=GB

To install this extension from the command line use the following switches:

    --enable-extensions --load-extension=<path>
    
For example on a mac create the following script:

    #!/usr/bin/env bash

    USER_DATA_DIR=google/user/data/`date +'%s'`
    /Applications/Google Chrome.app/Contents/MacOS/Google Chrome --user-data-dir=$USER_DATA_DIR --no-default-browser-check --no-first-run --disable-default-apps --enable-extensions --load-extension=~/git/delete-all-cookies &
    PID=$!

    trap "kill $PID" exit INT TERM
    trap "sleep 1 && rm -rf google" EXIT

    wait

An example of a platform independent script is provided in the chrome_load_extension.sh script.  

The chrome_load_extension.sh script will work with the following operating systems:
* linux-gnu - Linux Operating System
* freebsd - FreeBSD Operating System
* darwin - Apple Mac Operating System
* cygwin - Cygwin Operating System
* win32 - Windows32 Operating System

There is also another script provided that disables the cross origin security chrome_disable_security.sh which is also very useful when using iframes for automated testing.
