(function () {


    document.getElementById("run").addEventListener('click', function () {

        var current_d = new Date().getDate();
        var current_m = new Date().getMonth()+1;
        var current_y = new Date().getFullYear();

        //console.log(current_m);

        var input_d = document.getElementById("dob-day").value;
        var input_m = document.getElementById("dob-month").value;
        var input_y = document.getElementById("dob-year").value;

        var calc_age = current_y - input_y;
        //console.log(calc_age + " " + typeof(calc_age));
        var age;

        //console.log(input_m + " " + typeof(input_m));
        //console.log(input_m - current_m);
        console.log(input_m+ " " + typeof(input_m));
        console.log(current_m+ " " + typeof(current_m));
        console.log(input_d);
        console.log(current_d);

        if ((input_m - current_m) > 0) {
            age = calc_age - 1;
            //console.log(age + " " + typeof(age));


            /*} else if ((input_m - current_m) > 0 && (input_d - current_d) > 0) {
                age = calc_age + 1;*/

        } else if (input_m == current_m) {
            console.log(input_d);
            console.log(current_d);
            console.log(input_d - current_d);
            if ((input_d - current_d) > 0) {
                age = calc_age - 1;
            } else {
                age = calc_age;
            }
        } else {
            age = calc_age;
        }
        alert(age);

    });



})();

