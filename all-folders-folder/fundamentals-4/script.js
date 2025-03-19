// Adding elements to an array
const numbers = [1, 2, 3];

// Beginning (unshift)
numbers.unshift(0);
console.log(numbers);

// Middle (splice)
numbers.splice(2, 0, 1.5); //(index, who will remove after that index, who will add)
console.log(numbers);

// End (push)
numbers.push(4);
console.log(numbers);

console.log("==================================");