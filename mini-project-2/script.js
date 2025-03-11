// Write a function that uses 2 numbers and then returns the largest of them
function largest(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else if (num1 === num2) {
        return "Both numbers are equal!";
    }
    return num2;

}

console.log(`The largest number is: ${largest(4, 2)}`);