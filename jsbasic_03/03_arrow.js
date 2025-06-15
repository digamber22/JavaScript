const user = {
    username: "hitesh",
    price: 999,

    // welcomeMessage: function() {
    //     console.log(`${this.username} , welcome to website`);
    //     console.log(this);            // this will print whole function when it call ;
    // }

}

// user.welcomeMessage()        // username = hitesh 
// user.username = "sam"    
// user.welcomeMessage()      // username = sam

// console.log(this);          // here this will give o/p= {}  empty object when run in node but in browser it will gives windows(all properties) ;  imp

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);       // o/p = undefined , this will not work on function but it work on object;
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);     // o/p = undefined , this will not work on function but it work on object;
// }

// const chai =  () => {               // arrow fn , remove function key and add => ;
//     let username = "hitesh"
//      console.log(this.username);    // o/p = undefined , this will not work on function but it work on object;
//     console.log(this);                // o/p = {} ;
// }


// chai()


// arrow fn -->  () => {}  , this is arrow fn , below fn also arrow fn;

// explicit return fn --> when using {}, the must write return ;
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return fn --> using () , or without (), no need to write return fn ;
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4))     // o/p =  { username: 'hitesh' } ;


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()