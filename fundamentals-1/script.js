console.log("Hello, world!");
//Variables
console.log("==================================");
let age = 50;
let personName = "Joana d'Arc";
let height = 1.70;
console.log(`She is ${age}yo, and her name is ${personName}. She's ${height}m tall btw.`);
let weight, salary, nationality;
console.log("==================================");

//Constants
const milkPrice = 2.99;
const pi = 3.14;
console.log(`The price of a bag of milk is ${milkPrice}`);
console.log("==================================");

//Primitive types
let personaName = "Francisco"; //Literal String
let theaterTicketPrice = 2; //Literal Number
let isAlive = true; //Boolean
let lastName = undefined; //Undefined
let selectedColor = null; //Reset a value

//Dynamic typing
console.log("The 'typeof' command can show the type of a variable on the console, look at these examples:");
console.log(`personaName is a: ${typeof personaName}`);
console.log(`theatherTicketPrice is a: ${typeof theaterTicketPrice}`);
console.log(`isAlive is a: ${typeof isAlive}`);
console.log(`lastName is a: ${typeof lastName}`);
console.log(`selectedColor is a: ${typeof selectedColor}`);
console.log("==================================");

//Reference types
let person = { //object
    personaName: "Juan",
    age: 48,
    isAlive: true,
    lastName: "Perez"
}

let criminalRecord = ["Juan Perez", 48, false, "Joana d'Arc", undefined]; //Array
console.log(`Name: ${criminalRecord[0]}`);
console.log(`Age: ${criminalRecord[1]}`);
console.log(`Married: ${criminalRecord[2]}`);
console.log(`Mother's name: ${criminalRecord[3]}`);
console.log(`Father's name: ${criminalRecord[4]}`);
console.log("==================================");

//Functions
let wallColor = "white"; //This one executes a task and returns nothing
function switchColor(color) {
    wallColor = color;
}

console.log(wallColor);

function sum(numA, numB) { //This one executes a task and returns something
    let result = numA + numB;
    return result;
}

console.log(`The sum of the numbers in the function are equal to: ${sum(1, 3)}`);
console.log("==================================");

//Arithmetic operators
let minWageBr = 1518;
console.log(minWageBr + 500);
console.log(minWageBr - 418);
console.log(minWageBr * 3);
console.log(minWageBr / 2);
console.log(minWageBr ** 3);
console.log("==================================");

++age; //increments before the read
age--; //decreases after the read
age++; //increments after the read
--age; //decreases before the read

//Assignment Operators
let gamerKeyboardPrice = 300;
gamerKeyboardPrice += gamerKeyboardPrice; //sum the variable to itself
gamerKeyboardPrice -= gamerKeyboardPrice; //subtracts the variable from itself

//Equality Operators
console.log(1 === 1); //strict equality (compares types and values)
console.log("1" === 1);

console.log(1 == 1); //free equality (ignores types and ONLY compares values)
console.log("1" == 1);
console.log("==================================");

//Ternary Operators
let points = 200; //if a client has 100 points, he's a premium, if not, he's a common 
let type = points >= 100 ? "premium" : "common";
console.log(`You're a ${type} costumer`);
console.log("==================================");

//Logical Operators
console.log(true && true); //AND returns True if both of the conditions are True
console.log(true || false); //OR returns True if at least one of the conditions are True
console.log(!true); //NOT returns the reverse of the condition, True becomes False and vice versa
console.log("==================================");

console.log("Falsy is undefined, null, 0, false, '' (empty String), NaN (Not a Number)");
console.log("Truthy is the opposite (i guess)");
console.log("==================================");
