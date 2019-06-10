//take in value of bill
var amount = 0.00;

//take in desired tip percentage
var tipPercentage;

//include the option to split the bill by number of people
//calculate the amount per table and amount per person
//bill must be a positive float of 2 (0.00)

function calcTip() {
    var billAmount = document.getElementById("amount").nodeValue;
    var tipPercentage = document.getElementById("tipPercentage").nodeValue;
    var numberPeople = document.getElementById("numberPeople").nodeValue;

// make sure that number of people is greater than 1

//calculate tip
var totalBill = (billAmount * tipPercentage / numberPeople / 100);
    totalBill = Math.round(totalBill * 100)/100;
    totalBill = totalBill.toFixed(2);

    //display the tip
    // also check to make sure the bill amount is greater than 0.00
    document.getElementById
}

