/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {




    var check = false;

    while(check === false){

        var Age = prompt("Age?");
        var Gender = prompt("Gender?");
        var Town = prompt("Town?");

        check = confirm(Age +Gender +Town);
    }
    alert("Thank you!")


})();
