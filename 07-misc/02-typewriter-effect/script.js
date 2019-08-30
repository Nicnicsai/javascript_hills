


(function () {

    var txt = document.getElementById("target").innerHTML;
    var i = 0;
    var speed = 50; //speed duration

    document.getElementById("target").innerHTML = "";

    console.log(txt);



        function typeWriter() {

            if (i < txt.length) {
                document.getElementById("target").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }

        }

        typeWriter()


})();


//look code again