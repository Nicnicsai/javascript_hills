(function () {

    //check bernardo's code
    //new Date(....,...,...)

    document.getElementById("run").addEventListener('click', function () {

        var current_d = new Date().getDate();
        var current_m = new Date().getMonth() + 1;
        var current_y = new Date().getFullYear();

        var input_d = document.getElementById("dob-day").value;
        var input_m = document.getElementById("dob-month").value;
        var input_y = document.getElementById("dob-year").value;

        var calc_age = current_y - input_y;

        var age;

        if ((input_m - current_m) > 0) {
            age = calc_age - 1;

        } else if (input_m == current_m) {

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

