
(function() {

    (function() {

        // your code here
        var number = Math.floor(Math.random() * 100)+1;
        var counter = 1;

        function guess(){
            var answer = prompt("Guess the number between 1 and 100");

            if (answer == number){
                alert("You found the number! \n Attempts: " + counter)
            }
            else if (answer > number){
                counter++;
                alert("The number is lower, try again!");
                guess();
            }
            else {
                counter++;
                alert("The number is higher, try again!");
                guess()
            }
        }

        guess();


    })();









})();
