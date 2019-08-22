(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // situate content and change Target


    var current_day = new Date().getDay();
    var current_date = new Date().getDate();
    var current_month = new Date().getMonth();
    var current_year = new Date().getFullYear();
    var current_hour = new Date().getHours();
    var current_minutes = new Date().getMinutes();
    var current_time = current_hour + "h" + current_minutes;

    var current_day_name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var current_month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    document.getElementById("target").innerHTML = current_day_name [current_day] + "&nbsp;" + current_date + "&nbsp;" +
        current_month_name[current_month] + "&nbsp;" + current_year + "," + "&nbsp;" + current_time;


})();


