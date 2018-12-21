function fizzbuzz() {
    'use strict';
    //Takes the value from a form
    var inpnumber = document.getElementById('inpnum').value;
    inpnumber = parseInt(inpnumber, 10);
    console.log(inpnumber);
    var ar = [];

    //Makes an array
    for(var i = 1; i <= inpnumber; i++){
        ar.push(i);
    }
    console.log(ar);
    var fizbuzarr = []; //Array that is going to be printed out
    //Seperates the numbers and prints out correct phrases
    for(var num = 0; num < ar.length; num++) {
        if(ar[num] / 3 % 1 == 0 && ar[num] / 5 % 1 == 0){
            console.log("FizzBuzz");
            fizbuzarr.push(" FizzBuzz");
        }
        else if (ar[num] / 5 % 1 == 0){
            console.log("Buzz");
            fizbuzarr.push(" Buzz");
        }
        else if(ar[num] / 3 % 1 == 0) {
            console.log("Fizz");
            fizbuzarr.push(" Fizz");
        }
        else{
            console.log(ar[num]);
            fizbuzarr.push(" " + ar[num]);
        }
    }
    console.log(fizbuzarr);
    document.getElementById('outputBox').innerHTML = fizbuzarr;
}
