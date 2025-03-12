// Create a function that displays a quantity of * (asterisks) that line has

function showAsterisks(lines) {
    let asterisks = "";
    for (let i = 0; i < lines; i++) {
        console.log(asterisks += "*");
    }
}

const input = 10;
showAsterisks(input);