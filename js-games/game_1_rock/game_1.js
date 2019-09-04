(function () {

    //random choice computer
    var gallery = [
        "assets/scissors.png",
        "assets/rock.png",
        "assets/paper.png",
    ];

    /*//create image variables
    var scissor = "assets/scissors.png";
    var rock = "assets/rock.png";
    var paper = "assets/paper.png";*/

    //image sources players
    var imgSourcePlayer = document.getElementById("img-you");
    var imgSourceComputer = document.getElementById("img-computer");
    //var buttons = document.querySelectorAll(".buttons"); //all buttons player in nodelist(3)
    //console.log(buttons);

    document.querySelectorAll('.buttons').forEach(button => {
        button.addEventListener('click', function() {

            console.log(indexOf(button));



        });
    });





    // click PLAY button

    document.getElementById("play-btn").addEventListener("click", function() {

        // var indexGallery = gallery.indexOf(firstOne);  //index of..

        imgSourceComputer.setAttribute("src",gallery[Math.floor(Math.random() * 3)]);
    });





})();