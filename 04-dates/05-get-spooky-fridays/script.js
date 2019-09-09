(function () {

    //forgot click event
    //check Mahmouts code

    var input_year = document.getElementById("year").value; //input year
    var d = new Date();

    d.setFullYear(input_year, 0, 13);
    var current_month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var res_months = []; //empty array

    for (var m = 0; m < 12; m++) {
        //set the date again with m
        d.setMonth(m);
        // console.log(d);

        // ask if it is friday

        if (d.getDay() === 5) {
            //get the month(-name)

            current_month_name[d.getMonth()];

            res_months.push(current_month_name[d.getMonth()]);
        }
    }

    alert(res_months);

})();
