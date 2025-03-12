// Create a function to show the prime numbers

function primeNumbers(limit) {
    for (let currentNum = 1; currentNum < limit; currentNum++) {
        if (isPrime(currentNum)) {
            console.log(currentNum + 1);
        }
    }
}


function isPrime(num) {
    for (let predecessor = 1; predecessor < num; predecessor++) {
        if ((num + 1) % (predecessor + 1) === 0) {
            return false;
        }
    }

    return true;
}

const input = 15;
primeNumbers(input);