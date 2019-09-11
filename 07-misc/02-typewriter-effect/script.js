


(function () {

    var txt = document.getElementById("target").innerHTML;
    var i = 0; //get character from string at the right place
    var speed = 50; //speed duration

    document.getElementById("target").innerHTML = "";

    console.log(txt);

        function typeWriter() {

            if (i < txt.length) {
                document.getElementById("target").innerHTML += txt.charAt(i);
                //i necessary to not go to random character
                i++;
                setTimeout(typeWriter, speed);
            }

        }

        typeWriter()


})();


//look code again  setinterval is always same speed?

//other way?  ask Koen
// reached last char?
//if not -->start new Timeout