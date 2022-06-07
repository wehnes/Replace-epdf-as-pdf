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
    //function replace(){
    //if(place.length == 1){
   //     $(".coolBar__ctrl.pdf-download")[1].href.replace(/epdf/, "pdf");
    //}
   // else{
   //     console.log("Not Found");
    //}
   // }

    //var href_old, href_new;
    // href_old = document.querySelector("#article__content > div.fixedCoolBar > nav > div > div.coolBar__second.rlist > div.coolBar__section.coolBar--download.PdfLink.cloned > a").href;
    //href_old = $(".coolBar__ctrl.pdf-download")[1].href;
    //href_new = href_old.replace(/epdf/, "pdf");
    //console.log(href_new);
    // document.querySelector("#article__content > div.fixedCoolBar > nav > div > div.coolBar__second.rlist > div.coolBar__section.coolBar--download.PdfLink.cloned > a").setAttribute("href",href_new);
    //$(".coolBar__ctrl.pdf-download")[1].attr("href",href_new);
    // $(".coolBar__ctrl.pdf-download")[1].click(function(){alert("sb")});
})();