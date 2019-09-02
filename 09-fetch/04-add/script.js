/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
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


               /* var name = data.heroes[i].name;
                var alterEgo = data.heroes[i].alterEgo;
                var powers = data.heroes[i].abilities;*/


             //get info from input

                var newName = document.getElementById("hero-name").value;
                var newAlterEgo = document.getElementById("hero-alter-ego").value;
                var newPowers = document.getElementById("hero-powers").value;


                //make array from information

                let newHero = {
                    name: newName,
                    alterego: newAlterEgo,
                    abilities: newPowers
                };


                data.heroes.push(newHero);

                console.log(data.heroes);













            })


    })
})();
