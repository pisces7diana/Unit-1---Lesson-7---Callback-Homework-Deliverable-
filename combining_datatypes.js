// Section 2 Combining Datatypes

    // Combine objects, arrays, and functions
const crayonBox = {
    crayons : ["red", "yelow", "purple", "black"],
}
console.log(crayonBox.crayons[0]);

const bottle = {
    cap : {
        material: "metal",
        color: "white",
    }
}
console.log(bottle.cap.material);

const receipt = [
    {name: "Ginger Ale", price: 7}
];

console.log(receipt[0].name)

const apartmentBuilding = [ ["Diana", "Josh", "Howard", "Jessica"]
];
console.log(apartmentBuilding[0][2]);