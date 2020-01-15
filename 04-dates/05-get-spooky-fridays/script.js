(function () {

document.getElementById("run").addEventListener('click', function () {

        let d = new Date();
        let inputYear = +(document.getElementById("year").value);

        for (let m = 0 ; m <= 11; m++) {

            d.setFullYear(inputYear);
            d.setDate(13);
            d.setMonth(m);
            //d.setFullYear(inputYear, m, 13);
            if (d.getDay() === 5) { //if is friday
                console.log(d);
            }
        }

    })
    
    
    
/*
    var input_year = document.getElementById("year").value; 
    var d = new Date();

    d.setFullYear(input_year, 0, 13);
    var current_month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var res_months = []; 

    for (var m = 0; m < 12; m++) {
      
        d.setMonth(m);
       

        if (d.getDay() === 5) {

            current_month_name[d.getMonth()];

            res_months.push(current_month_name[d.getMonth()]);
        }
    }

    alert(res_months);
*/
    
})();
