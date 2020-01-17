/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        var passOne = document.getElementById("pass-one").value;
        var passTwo = document.getElementById("pass-two").value;

        var element_1 = document.getElementById("pass-one");
        var element_2 = document.getElementById("pass-two");


        console.log("clicked");
        // two values same?


        if (passOne === passTwo) {
            document.getElementById("pass-one").style.borderColor = "silver";
            document.getElementById("pass-two").style.borderColor = "silver";
            //alert("good!");

        } else {

            element_1.classList.add("error");
            element_2.classList.add("error");

        }

    })

})();
