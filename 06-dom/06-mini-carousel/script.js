
(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];


    
    let img = document.querySelector("figure img");
    let imgSrc = img.getAttribute("src");

    let firstIndex = gallery.indexOf(imgSrc); //0


    document.getElementById("next").addEventListener("click", function () {

        if(firstIndex === (gallery.length - 1)){
            firstIndex = 0;
        } else {
            firstIndex++
        }

        img.setAttribute("src", gallery[firstIndex]);

    })


})();


