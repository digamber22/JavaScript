const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(4));               o/p = 100.0000    toFixed is use to how many digit want after decimal ;

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));     //o/p = 124 ,    to precise value ;  3-->124 , 4--> 123.9 as o/p

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());         // 1,00,000      this is bydefault  US std;
// console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000     this is a/c to indian standard ;


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);                   // o/p = object [Math] {}  
// console.log(Math.abs(-4));           //  4 
// console.log(Math.round(4.5));        //  5
// console.log(Math.ceil(4.1));         //  5         ceil(4.0)  --> o/p = 4;
// console.log(Math.floor(4.9));        //  4
// console.log(Math.min(4, 3, 6, 8));   //  3
// console.log(Math.max(4, 3, 6, 8));   //  8

// console.log(Math.random());                      // it gives the val b/w   0 and 1 ;
// console.log((Math.random()*10) + 1);             // gives value greater than 0  with decimal 
// console.log(Math.floor(Math.random()*10) + 1);   //  gives value greater than 0  without decimal;

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // gives value b/w min and max with both end inclusive ;  rem this formulae 