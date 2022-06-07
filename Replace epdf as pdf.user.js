// ==UserScript==
// @name         Replace epdf as pdf
// @namespace    https://github.com/wehnes/Replace-epdf-as-pdf
// @version      0.1
// @description  try to take over the world!
// @author       Wehnes
// @match        https://onlinelibrary.wiley.com/doi*
// @match        https://www.onlinelibrary.wiley.com/doi*
// @match        https://chemistry-europe.onlinelibrary.wiley.com/doi*
// @require  https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //var place = $(".coolBar__ctrl.pdf-download")[1];
    var href;
    waitForKeyElements("#article__content > div.fixedCoolBar > nav > div > div.coolBar__second.rlist > div.coolBar__section.coolBar--download.PdfLink.cloned > a", function(){
        href = $(".coolBar__ctrl.pdf-download")[1].href.replace(/epdf/, "pdf");
        $(".coolBar__ctrl.pdf-download")[1].setAttribute("href",href)
        console.log($(".coolBar__ctrl.pdf-download")[1].href)});
})();
