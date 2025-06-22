
// Object literal -> is literally an object ; 
// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`); // must write this for the current context otherwise it will give error
//         console.log(this);
//     }

// }



//console.log(user.username)        // hitesh
//console.log(user.getUserDetails()); 
// console.log(this);     // {}   in global context it give empty paranthesis in node environment, but in browwer it gives window


// constructor function 
function User(username, loginCount, isLoggedIn){
    this.username = username;       // this.username is variable can keep it other name also , after = is pass value;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){    // can create method ;
        console.log(`Welcome ${this.username}`);

    }

    return this  // no need to mention it. bedefault return this ;
}

const userOne = new User("hitesh", 12, true)         // if new key not mention then userTwo overwrite on userOne so by writing new for create separate instance
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userOne);
//console.log(userTwo);

//console.log(userOne.constructor);
