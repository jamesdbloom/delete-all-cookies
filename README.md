delete-all-cookies
==================

What This Extension Does
------------------------

This Chrome extension deletes all cookies (including HTTP only cookies) by either send a postMessage from any javascript on any page or by clicking the extension action (i.e. clicking the icon).

This chrome extension is particularly useful when you need to delete cookies as part of an automated test.

To delete all cookies using javascript run the following line:

    window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");

To delete cookies for the domain and super-domains of current page using javascript run the following line:

    window.postMessage({ type: "CLEAR_COOKIES_DOCUMENT" }, "*");

Note: the CLEAR_COOKIES_DOCUMENT mode does not delete any cookie that has a path value as this is not possible using the document object.

Loading The Extension
---------------------

To load chrome with an extension you need to use the following switches:

    --enable-extensions --load-extension=<path>

An example of this is given in the chrome_load_extension.sh script.  This script is designed to work with the following operating systems:
* linux-gnu - Linux Operating System
* freebsd - FreeBSD Operating System
* darwin - Apple Mac Operating System
* cygwin - Cygwin Operating System
* win32 - Windows32 Operating System

There is also another script provided that disables the cross origin security chrome_disable_security.sh which is also very useful when using iframes for automated testing.