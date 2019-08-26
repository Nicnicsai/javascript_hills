
(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    fruits.forEach(fruitsFunction);

    //var i = 0;
    //var x = "";

    function fruitsFunction(item) {

        document.getElementById("run").addEventListener('click',function () {


            //console.log(x = item);
        console.log(item);

        })


    }







})();


/*
fLen = fruits.length;
var x = "";
var i = 0;

document.getElementById("run").onclick = function() {





    if (i < fLen) {

        x = fruits[i++]; // show the result one by one

        //console.log(x += fruits[i]);
        //console.log(fruits[i]);

    }

    console.log(x);
}*/
