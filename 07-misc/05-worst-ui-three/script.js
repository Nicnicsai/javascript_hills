/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // try it again!

    (function() {


        // make array from "stop" buttons + add for each button
        Array.from(document.getElementsByTagName('button')).forEach(function(element) {
            // for each button you add an Eventlistener when clicked, then do this..
            element.addEventListener('click', function() {

                //from button > go to parent (div) then back to "input"-tag ((for each button))
                // where all the input info is stored > min-dat/max
                var inputField = element.parentElement.getElementsByTagName('input')[0];

                // +(....) make an Integer out of the value
                var rawMin = inputField.getAttribute('data-min'); //later useful
                var min = +rawMin;
                var max = +(inputField.getAttribute('data-max'));

                var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);


                //str.padStart(targetLength [, padString])
                //padStart() can be used to add characters at the beginning of a string.

                //padstart niet begrepen!!!
                inputField.value = String(randomNumber).padStart(rawMin.length, 0);

                // stick all the answers together
                document.getElementById("target").innerHTML = "+0" +
                    document.getElementById('part-one').value +
                    document.getElementById('part-two').value +
                    document.getElementById('part-three').value +
                    document.getElementById('part-four').value;
            });
        });
    })();


})();

//console.log(min);
//console.log(min);
//kan ook? yep
//var minn = +(inputField.getAttribute('data-min'));