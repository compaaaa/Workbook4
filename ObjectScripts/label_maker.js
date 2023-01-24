function printContact(address){
    console.log(address.name);
    console.log(address.address);
    console.log(address.city+ ",", address.state, address.zip);
}
//test
let myInfo = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Atlanta",
    state: "GA",
    zip: "30083"
};

printContact(myInfo);

//exercise 1 page 1-9 - aka product_code.js

function parsePartCode(text) {
    const supplier = text.slice(0, text.indexOf(":"));
    const number = text.slice(text.indexOf(":")+1, text.indexOf("-"));
    const size = text.slice(text.indexOf("-"))
    return {
        supplierCode: supplier,
        productNumber: number,
        size: size
    }
}
//test
let partCode1 = "XYZ:1234:L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode + 
" Product Number: " + part1.productNumber + 
" Size: " + part1.size);