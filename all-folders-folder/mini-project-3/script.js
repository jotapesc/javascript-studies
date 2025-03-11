// FizzBuzz
// If divisible by 3 returns "Fizz"
// If divisible by 5 returns "Buzz"
// If divisible by both 3 and 5, returns "FizzBuzz"
// If it isn't divisible by 3 or 5, returns the number
// If it isn't a number, returns a message saying: "It is not a number"
function fizzbuzz(entry) {
    if (typeof 1 !== typeof entry) {
        return "It is not a number (NaN)";
    }

    else if (entry % 3 === 0 && entry % 5 === 0) {
        return "FizzBuzz";
    }

    else if (entry % 3 === 0) {
        return "Fizz";
    }

    else if (entry % 5 === 0) {
        return "Buzz";
    }

    return entry;
}

let input = 165;
console.log(fizzbuzz(input));