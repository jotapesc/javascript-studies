// Create an object "address" which contains:
// Street
// City
// Street
// Zip code
// and a function showAddress(address)

function AddressCreator(street, city, zipCode) {
    this.street = street,
        this.city = city,
        this.zipCode = zipCode;
}

function getAddress(address) {
    for (const key in address) {
        console.log(`${key}: ${address[key]}`);
    }
}

const address = new AddressCreator("Wise Streets", "Minneapolis", 55416);

getAddress(address);