
// array  may have resizable , mixed , same ref points (shallow copy) change original , 

const myArr = [0, 1, 2, 10, 4, 5, true , "hitesh"]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods                                  //

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)                     // insert at start in array;
// myArr.shift()                        // deletion from start 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));      // if not exit return -1 ;

const newArr = myArr.join()        //  convert array to string ;

// console.log(myArr);               //  [ 0, 1, 2, 10, 4, 5, true, 'hitesh' ]
// console.log( newArr);             //   0,1,2,10,4,5,true,hitesh  without sq bracker b/c converted to string


// slice,              // not manuplate original array last index is exclude
//  splice             // manuplate array means remove that array with range include end; 

// console.log("A ", myArr);     // [ 0, 1, 2, 10, 4, 5, true, 'hitesh' ]

// const myn1 = myArr.slice(1, 3)   

// console.log(myn1);          //  [ 1, 2 ]   , end excluded
// console.log("B ", myArr);   //  original array 


// const myn2 = myArr.splice(1, 3)  
// console.log("C ", myArr);        //  [0, 4 , 5 ,true , 'hitesh']    // give after remove that part of array;    imp
// console.log(myn2);              //   // [1, 2 ,10]  , end includes. 
