delete-all-cookies
==================

This Chrome extension that deletes all cookies for domain and superdomains of current page by either pressed button or by executing javascript.

This chrome extension is particularly useful when you need to delete cookies as part of a automated test.

Cookies set on a path are currently not deleted, however future work will fix this issue.

To load chrome with an extension you need to use the following switches:

--enable-extensions --load-extension=<path>

An example of this is given in the chrome_load_extension.sh script.  There is also another script provided that disables crosss origin security chrome_disable_security.sh which is also very useful when using iframes for automated testing.

To delete cookies manually press extension button (i.e. cookie icon).

To delete cookies using javascript run the following line:

    window.postMessage({ type: "CLEAR_COOKIES" }, "*");

Future Work
-----------

This extension will be extended to delete all cookies for all domain by using the cookie chrome extension API.
