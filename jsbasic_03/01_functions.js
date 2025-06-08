
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// let res = addTwoNumbers(3,5) ; 
// console.log("result:" , res);                    // result : undefined ;

// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     console.log("digamber")           // not read after return , so its useless;
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


// function loginUserMessage(username = "sam"){       
//     if(!username){                                 // username === undefined
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage()) 

// shopping cards ;
function calculateCartPrice(val1, val2, ...num1){      // spread operation , rest operator denoted by ... but only 
    return num1                                       // have use case different here works as rest operator ;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))   // [500 , 2000] , b/c val1=200, val2=400; rest in arrays;

// funciton using object
// const user = {
//     username: "hitesh",
//     price: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)

// handleObject({
//     username: "sam",
//     price: 399
// })

// function using array;
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));               // 400
console.log(returnSecondValue([200, 400, 500, 1000]));    // 400 