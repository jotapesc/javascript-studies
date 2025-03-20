// Adding elements to an array
const numbers = [1, 2, 3];

// Beginning (unshift)
numbers.unshift(0);
console.log(numbers);

// Middle (splice)
numbers.splice(2, 0, 1.5); //(index, who it will remove after that index, who it will add)
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
    {brandName: "name1", id: 10},
    {brandName: "name2", id: 15},
    {brandName: "name3", id: 20},
];

function evenID(brands) {
    return brands.id % 2 === 0;
}

console.log(brands.find(evenID));