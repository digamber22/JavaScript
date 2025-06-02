// Stack (primitive datatype) -> send copy. if changes occur then not changes occur in original val; 
//Heap (Nop-Primitive (arr, function, object) ) --> changes occur in original val;

let myYoutubename="hiteshchoudharydotcom"
let anothername=myYoutubename;

anothername="chaiaurcode"

console.log(myYoutubename);  // hiteshchoudharydotcom
console.log(anothername);   // chaiaurcode


let userOne = {
email: "user@google.com",
upi : "user@sbi"
}

let userTwo = userOne;

userTwo.email =  "hitesh@google.com";

console.log(userOne.email); //  "hitesh@google.com"