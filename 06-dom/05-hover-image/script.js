(function () {




    //var imgSource = document.getElementsByTagName("img")[0].src; //img src link ==> file:...

    var imgSrc = document.getElementsByTagName("img")[0].getAttribute("src"); //img src link only!
    var hoverLink = document.getElementsByTagName("img")[0].getAttribute("data-hover"); //data-hover value


    var imgSource = document.getElementsByTagName("img")[0]; // whole image element (bona code)


    //console.log(imgSource.value); ??undefined (ask Bona about her code)

    // https://www.w3schools.com/js/js_htmldom_eventlistener.asp and https://www.w3schools.com/jsref/dom_obj_event.asp

    // when hovering over image
imgSource.addEventListener("mouseover", function() {

    imgSource.setAttribute("src", hoverLink);

});

// when not hovering over image
imgSource.addEventListener("mouseout", function() {

    imgSource.setAttribute("src", imgSrc);

});


})();
