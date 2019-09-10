/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.getElementById("target").appendChild(x);


    var table = document.getElementById("myTable");



    for (i = 0; i < 10; i++) {
        var tRow = table.insertRow(i);

        for (y = 0; y < 10; y++) {
            var tRow2 = tRow.insertCell(y);
            tRow2.innerHTML = ((y+1))*(i+1);
        }

    }


})();

//deze oefening herbekijken
//createTextNode (look it up)