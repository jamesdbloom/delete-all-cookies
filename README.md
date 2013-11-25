delete-all-cookies
==================

Chrome extension that deletes all cookies for domain and superdomains of current page by either pressed button or by executing javascript.

Cookies set on a path are currently not deleted, however future work will fix this issue.

To delete cookies manually press extension button (i.e. cookie icon).

To delete cookies using javascript run the following line:

    window.postMessage({ type: "CLEAR_COOKIES" }, "*");

Future Work
-----------

This extension will be extended to delete all cookies for all domain by using the cookie chrome extension API.
