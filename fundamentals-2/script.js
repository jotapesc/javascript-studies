//If Else
let testGrade = 7.8;
if (testGrade >= 7) {
    console.log("Approved!");
}

else if (testGrade < 7 && testGrade >= 4) {
    console.log("Retake test!");
}

else {
    console.log("Failed!");
}
console.log("==================================");

//Switch Case
let satisfactionSurvey = 5;
switch (satisfactionSurvey) {
    case 1:
        console.log("☆");
        break;

    case 2:
        console.log("☆☆");
        break;

    case 3:
        console.log("☆☆☆");
        break;

    case 4:
        console.log("☆☆☆☆");
        break;

    case 5:
        console.log("☆☆☆☆☆");
        break;

    default:
        console.log("Invalid input!");
}
console.log("==================================");

//For
console.log("Showing all the odd numbers between 1 and 20:");
for (let i = 0; i < 20; i++) {
    if ((i + 1) % 2 !== 0) {
        console.log(i + 1);

    }
}
console.log("==================================");

//While
let i = 10
console.log("Count down!");
while (i >= 1) {
    console.log(i--);
}
console.log("==================================");

//Do While
i = 0;
do { //Executes first and after that, checks the condicion, i.e. always runs at least one time
    console.log(`Typing... ${i + 1}`);
    i++;
} while (i < 5);
console.log("==================================");

//For In
const persona = {
    persoName: "Fagner",
    age: 10,
    subscriptionType: "Premium"
}

for (let key in persona) { //For each key in the object
    console.log(persona.age++);
}

for (let key in persona) { //For each key in the object
    console.log(persona[key]);
}
console.log("==================================");

const itens = ["Boxes", "DVDs", "Magazines", "Keys", null, undefined, 42]; //For each element in the array
for (let i in itens) {
    console.log(i);
}
console.log("==================================");

//For Of

// for (let i in itens){
//     console.log(itens[i]); <--- Literally this
// }

for (let i of itens) { //For each iterable item
    console.log(i);
}
console.log("==================================");