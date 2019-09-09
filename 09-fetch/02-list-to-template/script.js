/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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

                //template

                var temp = document.getElementsByTagName("template")[0];

                //get info from arrays and put in innerHTML

                var i = 0;

                for (i = 0; i < 5; i++) {


                    var name = data.heroes[i].name;
                    //console.log(name);
                    var alterEgo = data.heroes[i].alterEgo;
                    //console.log(alterEgo);
                    var powers = data.heroes[i].abilities;
                   // console.log(powers);


                    //show template

                    var clon = temp.content.cloneNode(true); //clone floats around in memory
                    console.log(clon);
                    // assign values to this clone

                    clon.querySelector(".name").innerHTML = name;
                    clon.querySelector(".alter-ego").innerHTML = alterEgo;
                    clon.querySelector(".powers").innerHTML = powers;

                    // here append clone and therefore becomes element

                    document.getElementById("target").appendChild(clon); // template cloned and put here

                }


            })


    })





})();


//zoeken of dit ook met een ForEach kan