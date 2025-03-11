// Create a method that reads properties from an object and shows only the properties of the "String" type that are in this object

let object = {
    objName: "Rusted Key",
    objQuant: 1,
    objDesc: "A key to open a door",
    objUsages: 5,
    objRare: false
}

function showProperties(obj) {
    for (let key in obj){
        if (typeof obj[key] === "string") {
            console.log(`${key}: ${obj[key]}`);
        }
    }
    return;
}

showProperties(object);