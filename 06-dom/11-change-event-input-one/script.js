(function () {




    //add event listener

    document.getElementById("pass-one").addEventListener("input", function() {


        var passOne = document.getElementById("pass-one").value;


        console.log(passOne);

        var numberL = passOne.length; // count number of characters of value


        document.getElementById("pass-one").maxLength = 10; //max length characters

        document.getElementById("counter").innerHTML = numberL + "/10";


    })






})();
