/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    //window.lib.getPosts()

    // receive callback parameter

    //two parameters in callback
    //first one an error (if there is, otherwise null)
    //second:array of articles

    //callback method

    document.getElementById("run").addEventListener('click',() => {
        window.lib.getPosts(function(error, articles){
            //myCallback(error, articles);
            console.log(articles);

        });


    });

    //get posts + display items in console (never returns error)

    // your code here
})();
