var piggyBank = {
    quarters: 0,
    dimes: 0,
    nickles: 0,
    pennies: 0
};
console.log("Piggy Bank", piggyBank);

var userQuarters = prompt("How many quarters do you have?");
console.log("User's quarters: ", userQuarters);

var userDimes = prompt("How many dimes do you have?");
console.log("User's dimes: ", userDimes);

var userNickles = prompt("How many nickles do you have?");
console.log("User's nickles: ", userNickles);

var userPennies = prompt("How many pennies do you have?");
console.log("User's pennies: ", userPennies);

function userPiggyBank(userQuarters, userDimes, userNickles, userPennies) {
    return {
        userQuarters: userQuarters,
        userDimes: userDimes,
        userNickles: userNickles,
        userPennies: userPennies
    };
}
console.log("The User's Piggy Bank", userQuarters, userDimes, userNickles, userPennies);