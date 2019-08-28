/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // get value of data-image attribute from element w/ id source

    let value = document.querySelector("#source").getAttribute("data-image");

    // create new image tag inside target element. w/ value from data-image.

    var img = document.createElement("IMG"); // creates new tag element
    //var node = document.createTextNode(value); // creates text node first
    //img.appendChild(node); //append text node to <img> element
    var element = document.getElementById("target"); // Finally you must append the new element to an existing element
    //This code finds an existing element
    element.appendChild(img); //This code appends the new element to the existing element
    img.src = value;


    // remove first element
    document.getElementbyId("source").removeAttribute("data-image");

})();
