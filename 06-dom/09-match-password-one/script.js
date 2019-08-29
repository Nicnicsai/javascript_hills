/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {




    // when run script -->

    document.getElementById("run").addEventListener("click", function() {

        var passOne = document.getElementById("pass-one").value;
        var passTwo = document.getElementById("pass-two").value;

        console.log("clicked");
        // two values same?


        if (passOne === passTwo) {
            document.getElementById("pass-one").style.borderColor = "silver";
            document.getElementById("pass-two").style.borderColor = "silver";
            //alert("good!");

        } else {
            document.getElementById("pass-one").style.borderColor = "red";
            document.getElementById("pass-two").style.borderColor = "red";
        }



    })








})();
