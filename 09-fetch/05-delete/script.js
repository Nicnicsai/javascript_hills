/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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


                //get info from input

                var value = document.getElementById("hero-id").value;

                function findHero(hero){
                    return hero.id == value; // found hero with ID.. == string and number so not ===
                }

                var heroInfo = data.heroes.find(findHero);

                var name = data.heroes[value];
                //console.log(name);



                var index = data.heroes.indexOf(name);
                if (index > -1) {
                    data.heroes.splice(index, 1);
                }

                console.log(data.heroes);
// array






            })


    })





})();
