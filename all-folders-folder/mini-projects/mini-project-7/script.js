// Create a function "sum" that returns the sum of all multiples of 3 or 5

function sum(limit) {
    let sumNum = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sumNum += i;
        }
    }
    return sumNum;
}

const input = 10;
console.log(sum(input));