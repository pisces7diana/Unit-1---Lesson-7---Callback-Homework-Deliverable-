// Section 2 Combining Datatypes

    // Combine objects, arrays, and functions
const crayonBox = {
    crayons : ["red", "yellow", "purple", "black"],
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

// Combine objects, arrays, and functions more than one level deep

function knit() {
    return {
        item: "scarf",
        size : "6ft",
    };
};

const knitIT = knit();

console.log(knitIT.item);

function crayonSelector() {
    return {
        crayons : ["red", "yellow", "purple", "black"],
        };
};

const crayonsss = crayonSelector();

console.log(crayonsss.crayons[2]);

function powerButton() {
    function options() {
        console.log('Select a song')
    }
    return options;
};

const powerButtonON  = powerButton();

powerButtonON();