/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.getElementById("target").appendChild(x);


    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    //var row2 = table.insertRow(1);

    var i = 0;

    for (i = 0; i < 10 ; i++) {
        var tRow = table.insertRow(i);
        tRow.insertCell(0);
    }






})();
