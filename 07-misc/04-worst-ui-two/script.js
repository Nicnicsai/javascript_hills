(function() {


    (function() {

        Array.from(document.getElementsByTagName('button')).forEach(function(element) {
            element.addEventListener('click', function() {
                var inputField = element.parentElement.getElementsByTagName('input')[0];
                var rawMin = inputField.getAttribute('data-min');
                var min = +rawMin;
                var max = +(inputField.getAttribute('data-max'));

                var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
                inputField.value = String(randomNumber).padStart(rawMin.length, 0);

                document.getElementById("target").innerHTML = "+0" +
                    document.getElementById('part-one').value +
                    document.getElementById('part-two').value +
                    document.getElementById('part-three').value +
                    document.getElementById('part-four').value;
            });
        });
    })();























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

// nog eens proberen
/*

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
*/