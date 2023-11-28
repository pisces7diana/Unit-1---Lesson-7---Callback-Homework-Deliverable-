// Callbacks

function add(num1, num2) {
    return num1 + num2;
}
const result = add(1,2);
console.log(result);

function subtract(num1, num2) {
    return num1 - num2;
}
const result1 = subtract(2,1);
console.log(result1);

function multiply(num1, num2) {
    return num1 * num2;
}
const result3 = multiply(1,1);
console.log(result3);

function divide (num1, num2) {
    return num1 / num2;
}
const result4 = divide (2,1);
console.log(result4);

function calculate(num1, num2, operates) {
    return operates(num1, num2);
}
console.log(calculate(1, 1, add));
console.log(calculate(2, 2, subtract));
console.log(calculate(3, 3, multiply));
console.log(calculate(4, 4, divide));

// Function definition placement
// Clean up this code

// bar();
// const bar = () => {
//     console.log('bar here');
// }
// foo();

// const foo = () => {
//     console.log('foo here');
// }

const bar = () => {
    console.log('bar here');
}
const foo = () => {
    console.log('foo here');
}

bar();
foo();

// Error reading
// What is meant by the error(s) this produces?

// foo();

// const foo()=>{
//     console.log('hi');
// }

// You need to use the correct syntax for declaring a function using the const keyword and the arrow function (=>) syntax. You should move the function declaration above the invocation for it to work.

// Section 3 Array Methods with Callbacks

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every

const greaterThanZero = nums.every(num => num >= 0);

if (greaterThanZero) {
    console.log("Every number is greater than or equal to 0");
  } else {
    console.log("Not every number is greater than or equal to 0");
  }

const shortWords8= panagram.every(word => word.length < 8);

if (shortWords8) {
    console.log("Every word is shorter than 8 characters");
  } else {
    console.log("Not every number is shorter than 8 characters");
  }

// Filter
const numbersLess4 = nums.filter(num => num < 4);
console.log(numbersLess4);

const wordsEvenLength = panagram.filter(word => word.length % 2 === 0 )
console.log(wordsEvenLength);

// Find

const divisibleBy5 = nums.find(num => num % 5 === 0);
console.log(divisibleBy5);

const longWord5 = panagram.find(word => word.length >= 5);
console.log(longWord5);

// Find Index
const divsibleBy3 = nums.findIndex(num => num % 3 === 0);
console.log(divsibleBy3);

const wordsLess2 = panagram.findIndex(word => word.length < 2);
console.log(wordsLess2);

// For Each

nums.forEach(num => console.log(num * 3));

panagram.forEach(word => console.log(word + '!'));

// Map

const multipliedBy100 = nums.map(num => num * 100);
console.log(multipliedBy100);

const wordsUpperCase = panagram.map(word => word.toUpperCase());
console.log(wordsUpperCase);

// Some

const divisibleBy7 = nums.some(num => num % 7 === 0);
if (divisibleBy7) {
    console.log("Some numbers are divisible by 7");
  } else {
    console.log("No numbers are divisible by 7");
  }

const wordsLetterA = panagram.some(word => word.includes('a'));
if (wordsLetterA) {
    console.log("Some words have the letter a in them");
  } else {
    console.log("There are no words that have the letter a in them");
  }