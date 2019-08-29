
(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // click button

    var imgSource = document.getElementsByTagName("img")[0];
    //console.log(imgSource);



    document.getElementById("next").addEventListener("click", function() {


        // kan het opgelost worden met een forEach? nee, anders loopt het tot het einde

        var firstOne = imgSource.getAttribute("src"); //link of first one
        var firstIndex = gallery.indexOf(firstOne); // index of first one

        if (firstIndex === 4) {
            firstIndex = 0;

        } else {

            firstIndex ++
        }

        imgSource.setAttribute("src", gallery[firstIndex]);

        console.log(firstIndex);




       // imgSource.setAttribute("src", gallery[i+1]);

/*

    for  (i = 0; i < gallery.length; i++) {

        console.log(gallery[i]);

        imgSource.setAttribute("src", gallery[i]);

    }
*/

















    })

})();

/*
gallery.forEach(myFunction);

function myFunction(value,i) {

    var x = value;

    console.log(x);

    imgSource.setAttribute("src", x);

}*/
