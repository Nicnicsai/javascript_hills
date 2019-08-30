(function() {



    var output = document.getElementById("target").innerHTML;

    var buttons  = document.getElementsByTagName("button");

    console.log(buttons);

    var buttonOne = parseInt(document.getElementById("part-one").innerHTML, 10);
    var buttonTwo = parseInt(document.getElementById("part-two").innerHTML, 10);
    var buttonThree = parseInt(document.getElementById("part-three").innerHTML,10);
    var buttonFour = parseInt(document.getElementById("part-four").innerHTML,10);


    buttons.forEach(myFunction);

    function myFunction(element) {
        element.addEventListener('click', function() {




        })


    }





















})();


/*
var a = Array.prototype.slice.call(document.getElementById("part-one"));
var b = Array.prototype.slice.call(document.getElementById("part-two"));
var c = Array.prototype.slice.call(document.getElementById("part-three"));
var d = Array.prototype.slice.call(document.getElementById("part-four"));
var buttons = a.concat(b,c,d);
console.log(buttons);

var button_1 = document.getElementById("part-one");
var button_2 = document.getElementById("part-two");
var button_3 = document.getElementById("part-three");
var button_4 = document.getElementById("part-four");
*/