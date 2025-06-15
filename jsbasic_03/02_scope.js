//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    c=50              // var c= 50 ;
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c); // this will gives output = 50  but both above gives error 


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++                            imp ; 


console.log(addone(5))                     // this will give o/p = 6;

function addone(num){
    return num + 1
}

addTwo(5)                              // this will gives error   but above not ; 
const addTwo = function(num){
    return num + 2
}