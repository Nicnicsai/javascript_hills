/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // between 1 and 100
    var n = 1;
    while(n <= 100){

        // how "fizz" if the number is a multiple of 3
        if (   (n % 3 === 0)&&(n % 5 === 0)   ){
            console.log("fizzbuzz");
        } else if(n % 5 === 0){   // "buzz" if it's a multiple of 5
            console.log("buzz");
        } else if(n % 3 === 0){
            console.log("fizz");
        } else {
            console.log(n);
        }

        n++;
    }


})();
