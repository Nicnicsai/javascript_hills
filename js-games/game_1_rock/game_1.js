
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
        button.addEventListener('click', function () {

            var chosenButton = button.getAttribute("id");

            if (chosenButton === "scissors-btn") {
                imgSourcePlayer.setAttribute("src", gallery[0]);
            } else if (chosenButton === "rock-btn") {
                imgSourcePlayer.setAttribute("src", gallery[1]);
            } else {
                imgSourcePlayer.setAttribute("src", gallery[2]);
            }

        });
    });


    // click PLAY button

    document.getElementById("play-btn").addEventListener("click", function () {


        // var indexGallery = gallery.indexOf(firstOne);  //index of..

        imgSourceComputer.setAttribute("src", gallery[Math.floor(Math.random() * 3)]);

        var player = imgSourcePlayer.getAttribute("src");
        var computer = imgSourceComputer.getAttribute("src");

        if ((player === "assets/scissors.png" && computer === "assets/paper.png")
            || (player === "assets/rock.png" && computer === "assets/scissors.png")
            || (player === "assets/paper.png" && computer === "assets/rock.png")) {
            document.getElementById("winner-result").innerHTML = "Winner: YOU!!!";

            confetti.start();



        } else if ((player === "assets/scissors.png" && computer === "assets/rock.png")
            || (player === "assets/rock.png" && computer === "assets/paper.png")
            || (player === "assets/paper.png" && computer === "assets/scissors.png")) {
            document.getElementById("winner-result").innerHTML = "Winner: Evil Computer";

        } else {
            document.getElementById("winner-result").innerHTML = "Winner: EVEN!";
        }


    });




})();

