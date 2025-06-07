// singleton       -->  object form through constructor is singleton object is form;
// Object.create  --> this is called constructor method ;

// object literals   --> not form singleton 

const ogj1 = {}   // this curly braces is object;

const mySym = Symbol("key1")

// Object literals
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",   // as symbol data type
    mySym: "mykey1",   // as string data type
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])       // need "" ; can acess object like that also
// console.log(JsUser["full name"])
// // console.log(JsUser.full name)     // invalid syntax ;
//  console.log(JsUser[mySym])          // mykey1 
//   console.log(JsUser.mySym)          // mykey1

// JsUser.email = "hitesh@chatgpt.com"
//  Object.freeze(JsUser)            // do not change further, access  
//  JsUser.email = "hitesh@microsoft.com"
//  console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
