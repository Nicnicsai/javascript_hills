
(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // click button once; remove first and last element.

    document.getElementById("run").addEventListener('click', function () {

        fruits.pop(); //remove last element array
        fruits.push("kiwi"); //change last element array
        console.log(fruits.toString());


        fruits.shift(); // remove first element
        fruits.unshift("banana"); // ad first element
        console.log(fruits.toString());

        alert(fruits.toString());

});




    /*document.getElementById("run").addEventListener('click', function () {

        fruits[0] = "banana";
        fruits[9] = "kiwi";

        alert(fruits);

    });*/


})();
