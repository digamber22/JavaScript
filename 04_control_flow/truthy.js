const userEmail = [] 

if (userEmail) {
    console.log("Got user email");               // o/p = Got user email;
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}              // this is important 

// imp points 
// false == 0 , false = '' , 0 == ''       // all these are true;

if (userEmail.length === 0) {
    console.log("Array is empty");                    // Array is empty
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {                // object.keys(emptyObj)--> converted to array and use length properties;
    console.log("Object is empty");                      // Object is empty
}

// Nullish Coalescing Operator (??) --> this is based on  null , undefined ;

let val1;
// val1 = 5 ?? 10               
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20         // it is mostly using value which is return from functions;



// console.log(val1);    // 10 , 10 , 15 , 10   


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")     // o/p =  "less than 80" ;