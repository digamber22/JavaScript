//  Primitive     have same datatype as its name ;
 
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt   

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);       // false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions             // all have datatype is object but function have object function datatype;

const heros = ["shaktiman", "naagraj", "doga"];   // array
// object
let myObj = {
    name: "hitesh",
    age: 22,
}

// function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3