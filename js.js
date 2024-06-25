
let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape');
let removedFruit = fruits.pop();
console.log(fruits); 
console.log(removedFruit);

let numbers = [3, 1, 5, 2, 4];
numbers.sort((a, b) => a - b);
let doubledNumbers = numbers.map(num => num * 2);
let oddNumbers = numbers.filter(num => num % 2 !== 0);
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(doubledNumbers);
console.log(oddNumbers); 
console.log(sum); 


let message = "Hello, World!";
let length = message.length;
console.log(length); 

let text = "Hello, World!";
let upperCaseText = text.toUpperCase();
let lowerCaseText = text.toLowerCase();
console.log(upperCaseText); 
console.log(lowerCaseText); 

let sentence = "The quick brown fox jumps over the lazy dog";
let substring = sentence.substring(10, 15);
console.log(substring); 

let sentence2 = "The quick brown fox";
let words = sentence2.split(' ');
console.log(words); 
