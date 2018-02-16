const piggyBank = {
    quarters: prompt("How many quarters do you have?"),
    dimes: prompt("How many dimes do you have?"),
    nickles: prompt("How many nickles do you have?"),
    pennies: prompt("How many pennies do you have?")
};

// takes value of each key and outputs it to the DOM in a seperate div
var quarterCounter = document.getElementById("quartersTally");
quarterCounter.innerHTML = `<li>Number of quarters = ${piggyBank.quarters}</li>`;

var dimesCounter = document.getElementById("dimesTally");
dimesCounter.innerHTML = `<li>Number of dimes = ${piggyBank.dimes}</li>`;

var nicklesCounter = document.getElementById("nicklesTally");
nicklesCounter.innerHTML = `<li>Number of nickles = ${piggyBank.nickles}</li>`;

var penniesCounter = document.getElementById("penniesTally");
penniesCounter.innerHTML = `<li>Number of pennies = ${piggyBank.pennies}</li>`;

let dollarAmount = 0;

piggyBank.quarters = (piggyBank.quarters * .25);
piggyBank.dimes = (piggyBank.dimes * .10);
piggyBank.nickles = (piggyBank.nickles * .05);
piggyBank.pennies = (piggyBank.pennies * .01);
console.log("Value of quarters:", piggyBank.quarters, "Value of dimes:", piggyBank.dimes, "Value of nickles:", piggyBank.nickles, "Value of pennies:", piggyBank.pennies);

dollarAmount = (piggyBank.quarters + piggyBank.dimes + piggyBank.nickles + piggyBank.pennies);

var totalOutput = document.getElementById("total");
var roundedTotal = dollarAmount.toFixed(2);
totalOutput.innerHTML = `<h2>Your total is: ${dollarAmount}!</h2>`;