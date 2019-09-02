/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function () {

        fetch('http://localhost:63342/becode_projects/javascript_hills/_shared/api.json')   //check which is the portname
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

                // get ID (value) from form

                var value = document.getElementById("hero-id").value; // 1 to 5

                function findHero(hero){
                    return hero.id == value; // found hero with ID.. == string and number so not ===
                }

               var heroInfo = data.heroes.find(findHero);

                var temp = document.getElementsByTagName("template")[0];


                //get info from array and put in innerHTML

                    var name = data.heroes[value].name;

                    var alterEgo = data.heroes[value].alterEgo;

                    var powers = data.heroes[value].abilities;

                    //show template

                    var clon = temp.content.cloneNode(true); //clone floats around in memory

                    //console.log(clon);
                    // assign values to this clone

                    clon.querySelector(".name").innerHTML = name;
                    clon.querySelector(".alter-ego").innerHTML = alterEgo;
                    clon.querySelector(".powers").innerHTML = powers;

                    // here append clone and therefore becomes element

                    document.getElementById("target").appendChild(clon); // template cloned and put here

            })


    })





})();
