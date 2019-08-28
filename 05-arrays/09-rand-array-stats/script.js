/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // click button


    document.getElementById("run").addEventListener("click", function () {

        // display ten random numbers between 1 and 100)

        var randomNum = [];

        for (var i = 0; i < 10; i++) {

            randomNum.push(Math.floor(Math.random() * 100) + 1); // returns a random integer from 1 to 100
        }


        for (var j = 1; j < 11; j++){
            document.getElementById(`n-${j}`).innerHTML = randomNum[j-1];
        }

        //alles nog in inner HTML steken
        document.getElementById("min").innerHTML = Math.min(...randomNum);
        document.getElementById("max").innerHTML = Math.max(...randomNum);
        var sum = randomNum.reduce((a,b)=> a + b, 0);
        document.getElementById("sum").innerHTML = sum;
        var average =  sum/randomNum.length;
        document.getElementById("average").innerHTML = average;

















    });





    // dit oplossen d.m.v table data en for loop zie Barend/Ines (uitleg)

    //document.getElementById("n-1").innerHTML =


})();
