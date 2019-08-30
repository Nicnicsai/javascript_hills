
(function() {

    // your code here

/*var minValue = document.getElementById("slider").min; //0460000000
var maxValue = document.getElementById("slider").max; //0499999999*/


var slider = document.getElementById("slider");
var output = document.getElementById("target");


    output.innerHTML = "0" + slider.value;
    slider.oninput = function() {
        output.innerHTML = "0" + this.value;
    }



})();
