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

    target.innerHTML = "";

    var pos = 0; //counter




    for (var i=0; i < wave.length ; i++) {  //define the i with var/let


        var char = wave.charAt(i);
        pos++; // need two counters

        if ( pos == 1){

            char = "<span class='1'>" + char + "</span>";

        } if ( pos == 2  || pos == 8) {

            char = "<span class='2'>" + char + "</span>";

        } if ( pos == 3 || pos == 7) {

            char = "<span class='3'>" + char + "</span>";

        } if ( pos == 4 || pos == 6 ) {

            char = "<span class='4'>" + char + "</span>";

        } if (pos == 5) {

            char = "<span class='5'>" + char + "</span>";

        } if (pos > 7) { //when it arrives at the last one > assign 0 to position

            pos = 0; // 1 '=' to assign a value to it. ('==' compare it)
        }

        target.innerHTML += char;

    }

    var fs = document.getElementsByClassName('1');

    for (var y = 0; y < fs.length; y++) {
        fs[y].style.fontSize = '6px';
    }

    var fss = document.getElementsByClassName('2');

    for (var z = 0; z < fss.length; z++) {
        fss[z].style.fontSize = '12px';
    }

    var fsss = document.getElementsByClassName('3');

    for (var u = 0; z < fsss.length; u++) {
        fsss[u].style.fontSize = '20px';
    }


// nog 4 en 5



    /*document.getElementsByClassName("1")[0].style.fontSize("6px");
    document.getElementsByClassName("2")[0].style.fontSize("10px");
    document.getElementsByClassName("3")[0].style.fontSize("20px");*/


})();
