// Create a function that checks if two objects have the same properties, and another one that checks if the object reference points to the same memory location

function ItemCreator(itemName, itemDuration, itemRarity) {
    this.itemName = itemName;
    this.itemDuration = itemDuration;
    this.itemRarity = itemRarity;
}

function checksPropertiesEquity(obj1, obj2) {
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

function checksMemoryAddressEquity(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    return false;
}

const rock = new ItemCreator("Rocky", 60, "Common");
const heroSword = new ItemCreator("World Breaker", 300, "Legendary");

console.log(checksPropertiesEquity(rock, rock));
console.log(checksMemoryAddressEquity(heroSword, heroSword));