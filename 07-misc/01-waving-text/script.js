/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var target = document.getElementById("target");

    var wave = target.innerHTML = "Kaaaabbbbbbbooooooooommmmmiiiiiiiiiiiiiiiiiiiiiii!";

    document.getElementById("target").innerHTML = "";

    var pos = 0; //counter


    for (var i=0; i < wave.length ; i++) {  //define the i with var/let

        var char = wave.charAt(i);
        pos++; // need two counters

        if ( pos == 0){

            char = "<span class='1'>" + char + "</span>";

        } if ( pos == 1  || pos == 7) {

            char = "<span class='2'>" + char + "</span>";

        } if ( pos == 2 || pos == 6) {

            char = "<span class='3'>" + char + "</span>";

        } if ( pos == 3 || pos == 5 ) {

            char = "<span class='4'>" + char + "</span>";

        } if (pos == 4) {

            char = "<span class='5'>" + char + "</span>";

        } if (pos > 7) {

            pos = 0;
        }


    }



})();
