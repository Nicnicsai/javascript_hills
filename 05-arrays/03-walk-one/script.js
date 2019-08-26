
(function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];


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
}

}());

// try using a LOOP (for..) and make it work the same