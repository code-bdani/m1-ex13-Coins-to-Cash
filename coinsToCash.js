const piggyBank = {
    quarters: prompt("How many quarters do you have?"),
    dimes: prompt("How many dimes do you have?"),
    nickles: prompt("How many nickles do you have?"),
    pennies: prompt("How many pennies do you have?")
};
console.log("Piggy Bank", piggyBank);

let dollarAmount = 0;
console.log("dollarAmount", dollarAmount);

piggyBank.quarters = piggyBank.quarters * 0.25;
piggyBank.dimes = piggyBank.dimes * 0.10;
piggyBank.nickles = piggyBank.nickles * 0.05;
piggyBank.pennies = piggyBank.pennies * 0.01;
console.log("Value of quarters:", piggyBank.quarters, "Value of dimes:", piggyBank.dimes, "Value of nickles:", piggyBank.nickles, "Value of pennies:", piggyBank.pennies);

function getTotal() {
    dollarAmount += (piggyBank.quarters + piggyBank.dimes + piggyBank.nickles + piggyBank.pennies) / 100;
    return dollarAmount;
};