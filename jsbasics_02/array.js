const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)    // push method 

// console.log(marvel_heros);       // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]   add as whole array with single index
// console.log(marvel_heros[3][1]);  // flash

// const allHeros = marvel_heros.concat(dc_heros)    // concate method;
// console.log(allHeros);                  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
  
// const all_new_heros = [...marvel_heros, ...dc_heros]     // spread method used multiple array mostly used;

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)    //  flate method  can use limited depth but  infinity handle its own ;
// console.log(real_another_array);                           // [1,2,3,4,5,6,7,6,7,4,5] 


// isArray , from  method ;
console.log(Array.isArray("Hitesh"))    // false 
console.log(Array.from("Hitesh"))       // convert to array which you give   o/p = [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting   give empty if not able to form;  o/p = [] 

let score1 = 100
let score2 = 200
let score3 = 300
// of method ;
console.log(Array.of(score1, score2, score3));    // instead of from can use of    ,  o/p = [ 100, 200, 300 ]