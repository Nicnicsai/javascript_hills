(function () {


    document.getElementById("run").addEventListener('click', function () {

        var current_d = new Date().getDate();
        var current_m = new Date().getMonth();
        var current_y = new Date().getFullYear();

        console.log(current_m);

        var input_d = document.getElementById("dob-day").value;
        var input_m = document.getElementById("dob-month").value;
        var input_y = document.getElementById("dob-year").value;

        var calc_age = current_y - input_y;
        var age;

        if ((input_m - current_m) > 0) {
            age = calc_age + 1;

        } else if ((input_m - current_m) > 0 && (input_d - current_d) > 0) {
            age = calc_age + 1;
        } else {
            age = calc_age;
        }
        alert(age);

    });


})();

