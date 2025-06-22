 // promise is object;  it can create and the consume; 

// creating promise ......
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //  DB calls, cryptography, network   these are async task; 

    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()  // this fn for connecting then for printing promise consumed , may pass values also ;
    }, 1000)
})

// consume above created promise ;
promiseOne.then(function(){                   // .then related to the resolve ;
    console.log("Promise consumed");
})

// or execute above code in single part ;  ......
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


// .......
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//.......

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour                                // cannot store it into a  variables or any ref using .then();
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => { 
    console.log(username);           // .catch execute when gives error  and .then execute when no error 
})
.catch(function(error){ 
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))   //.finally() gives either resolve or rejected which is occur

//......

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

//......


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()           // convert string to json takes time so await need to use ;
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


//......
// using then , catch  instead of try , catch   ;   any method can use ;
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

// .......

// error 404 find in resolve as response, not in catch,  this is important question 