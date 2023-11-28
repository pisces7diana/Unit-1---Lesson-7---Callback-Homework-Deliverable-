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

const apartmentBuilding = [ ["Diana", "Josh", "Howard", "Jessica"]];
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

// Model a Vending Machine Model a vending machine
const vendingMachine = {
    snacks : [
        {name: 'chips', price: 1},
        {name: 'candy', price: 2},
        {name: 'soda', price: 3}
    ],

    vend: function(position) {
    if(position >= 0 && position < this.snacks.length) {
        return this.snacks[position];
      } else {
        return 'Invalid position. Please choose a valid position.';
      }
    }
};
  
const selectedSnack = vendingMachine.vend(1);
console.log(selectedSnack);