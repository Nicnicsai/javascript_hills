/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {


    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        var x = Number(document.getElementById('op-one').value);
        var y = Number(document.getElementById('op-two').value);
        alert(x + y);

    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction

        var x = Number(document.getElementById('op-one').value);
        var y = Number(document.getElementById('op-two').value);
        alert(x - y);


    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var x = Number(document.getElementById('op-one').value);
        var y = Number(document.getElementById('op-two').value);
        alert(x * y);

    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var x = Number(document.getElementById('op-one').value);
        var y = Number(document.getElementById('op-two').value);
        alert(x / y);

    });


})();




