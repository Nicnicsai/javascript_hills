/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // your code here
    document.getElementById("run").addEventListener("click",function(){

        window.lib.getPosts().then(promiseCompleted);

    });

    function promiseCompleted(resultArray) {
        //array1.forEach(function(element) {
        //  console.log(element);
        //});

        console.log(resultArray);
    }




})();