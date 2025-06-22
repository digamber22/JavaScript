
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);    // 3.141592653589793
// Math.PI = 5              
// console.log(Math.PI);    // // 3.141592653589793   , do not overwrite;

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));  //  o/p = 
// o/p = {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }



Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of Object.entries(chai)) {
//     if (typeof value !== 'function') {
        
//         console.log(`${key} : ${value}`);
//     }
// }