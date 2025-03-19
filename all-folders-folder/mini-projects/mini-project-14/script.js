// Create an array of objects called "price range" to be used in a function that filters the prices in the range choosed
// The object needs to have the "tooltip", "min" and "max" attributes

function PriceRange(min, max) {
    this.min = min;
    this.max = max,
        this.tooltip = `from ${min} up to ${max}`;
}

let faixas = [
    new PriceRange(1, 100),
    new PriceRange(100, 1000),
    new PriceRange(1000, 10000),
];

console.log(faixas);