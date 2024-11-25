// Cheatsheet
// const  = ["", "", ""];
// console.log();
// const  = document.querySelector("#");
// .textContent = ;

// A constant variable that holds a array with name fruitBowl.
// A log viewing the whole a array and a log viewing the first element in the array.
const fruitBowl = ["Apple", "Pear", "Grapes"];
console.log(fruitBowl);
console.log(fruitBowl[0]);

const businessCard = ["Julie", "Hauge", "Veileder", 27];
console.log(businessCard);
console.log(businessCard[1]);

// 1. Lag en variabel som lagrer visitkort informasjon
// 2. Lag HTML-elementer med IDer som kan hentes til JS
// 3. Lag variabler som henter HTML-elementer
// 4. Fyll variablene med textContent fra visitkort array

const firstName = document.querySelector("#firstName");

const lastName = document.querySelector("#lastName");

const title = document.querySelector("#title");

const age = document.querySelector("#age");

console.log(firstName, lastName, title, age);

firstName.textContent = businessCard[0];

lastName.textContent = businessCard[1];

title.textContent = businessCard[2];

age.textContent = businessCard[3];

//
//

// Array with objects
const advancedBusinessCard = [{"firstName": "Julie"}, {"lastName": "Hauge"}, {"title": "Veileder"}, {"age": 27}];
console.log(advancedBusinessCard);
console.log(advancedBusinessCard[2]);
console.log(advancedBusinessCard[2].title);

//
//

// Objects with arrays
const biggerFruitBowl = {"fruit": ["Apple", "Pear", "Grapes"], "berries": ["Banana", "Strawberry"]};
console.log(biggerFruitBowl);
console.log(biggerFruitBowl.fruit);
console.log(biggerFruitBowl.fruit[2]);

//
//

// Objects with arrays with objects with arrays
const evenBiggerFruitBowl = {"fruit": [{"apple": ["Red apple", "Green Apple", "Yellow Apples"]}, "Pear", "Grapes"], "berries": ["Banana", "Strawberry"]};
console.log(evenBiggerFruitBowl);
console.log(evenBiggerFruitBowl.fruit[0]); 
console.log(evenBiggerFruitBowl.fruit[0].apple); 
console.log(evenBiggerFruitBowl.fruit[0].apple[1]);