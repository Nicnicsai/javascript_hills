/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //NEW CODE
    
    document.querySelectorAll('button[type="button"]').forEach(function ($btn) {
       $btn.addEventListener("click", function () {

           let colorSelected = $btn.id;

           switch (colorSelected) {
               case "red":
                   document.body.style.backgroundColor = "lightpink";
                   break;
               case "green":
                   document.body.style.backgroundColor = "lightgreen";
                   break;
               case "yellow":
                   document.body.style.backgroundColor = "lightyellow";
                   break;
               case "blue":
                   document.body.style.backgroundColor = "lightblue";
                   break;
           }


       });
    })
    

/* 
//OLD CODE
    document.getElementById("red").addEventListener("click", function(){
        document.body.style.background = "red";
    });

    document.getElementById("green").addEventListener("click", function(){
        document.body.style.background = "green";
    });

    document.getElementById("yellow").addEventListener("click", function(){
        document.body.style.background = "yellow";
    });

    document.getElementById("blue").addEventListener("click", function(){
        document.body.style.background = "blue";
    });
*/



})();




