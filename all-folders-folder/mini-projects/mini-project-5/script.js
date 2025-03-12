// Recieve a quantity of values to check if each one of the values are odd or even numbers

function oddOrEven(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) {
            console.log(`${i} "EVEN"`);
        }

        else {
            console.log(`${i} "ODD"`);
        }
    }
    
    return;
}

const input = 5;
oddOrEven(input);