// Adding elements to an array
let numbers = [1, 2, 3];

// Beginning (unshift)
numbers.unshift(0);
console.log(numbers);

// Middle (splice)
numbers.splice(2, 0, 1.5); //(index, where it will be removed after that index, who it will add)
console.log(numbers);

// End (push)
numbers.push(4);
console.log(numbers);

console.log("==================================");

// Finding elements (primitive type)
const letters = ["a", "b", "c", "d"];
console.log(letters.indexOf("c")); // this returns the index
console.log(letters.includes("c")); // this searchs if the element is present or not in the array

// Finding elements (reference type)
const brands = [
    { brandName: "name1", id: 10 },
    { brandName: "name2", id: 15 },
    { brandName: "name3", id: 20 },
];

function evenID(brands) {
    return brands.id % 2 === 0;
}

console.log(brands.find(evenID));

console.log("==================================");

// Arrow functions
const bands = [
    { bandName: "name1", id: 10 },
    { bandName: "name2", id: 15 },
    { bandName: "name3", id: 20 },
];

console.log(brands.find((bands) => bands.id % 2 !== 0));

// Removing elements in an array
// Beginning (shift)
numbers.shift();
console.log(numbers);

// Middle (splice)
numbers.splice(2, 1); //(index, where it will be removed after that index, who it will add)
console.log(numbers);

// End (pop) 
numbers.pop();
console.log(numbers);

// Emptying an array
numbers = [1, 2, 3, 4, 5, 6];
numbers.length = 0;
console.log(numbers);

// Merging arrays
let first = [1, 2, 3];
let second = [4, 5, 6];

let merged = first.concat(second);
console.log(merged);

// Dividing arrays
let sliced = merged.slice(2, 4); // (where it starts, where it ends-1)
console.log(sliced);

// Spread
first = [1, 2, 3];
second = [4, 5, 6];

merged = [...first, "%", ...second];
let clone = [...merged];
console.log(clone);