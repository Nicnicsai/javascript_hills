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

    //when its 5 'o clock you can add PadStart to add '0' current_time.padStart(2,'0')
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

    var current_day_name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var current_month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// way to not have to write down months and date see Barend's code

    document.getElementById("target").innerHTML = current_day_name [current_day] + "&nbsp;" + current_date + "&nbsp;" +
        current_month_name[current_month] + "&nbsp;" + current_year + "," + "&nbsp;" + current_time;


})();


