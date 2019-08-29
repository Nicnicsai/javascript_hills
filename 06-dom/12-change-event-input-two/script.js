(function () {


    document.getElementById("pass-one").addEventListener("input", function () {

        var passOne = document.getElementById("pass-one").value;

        var numberL = passOne.length; // count number of characters of value

        var i;
        var n = 0;


        if (numberL >= 8) {


            for (i = 0; i < numberL ; i++) {

                var y = passOne.charAt(i);

                if ( y >= 0 && y <= 9){

                    n++;

                    if (n > 1) {

                        document.getElementById("validity").innerHTML = "ok";

                    }

                }

            }


        }


    })


})();


// Jan, Ines zijn code bekijken (andere manier)