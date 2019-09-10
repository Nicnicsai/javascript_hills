/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementById("target").innerHTML = window.localStorage.getItem('number');

    var value = +(document.getElementById("target").innerHTML);



    // add event listener to button

    document.getElementById("increment").addEventListener("click", function(){
            value++;  //possible because it's a number
            document.getElementById("target").innerHTML = value;

            window.localStorage.setItem('number', JSON.stringify(value));

    })

})();


//syntax: window.localStorage
// localStorage.setItem("key", "value");  //saving data
// var lastname = localStorage.getItem("key");  //reading it