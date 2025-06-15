// for of

// ["", "", ""]    // string arr
// [{}, {}, {}]    // object arr
 

// for of loop  --> gives value
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()              // give unique values;
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// const myObject = {                  // not iteratable 
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
// const myObject = {                // not iteratable ;
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);             // error b/c not iteratable ;
    
// }


// for in loop   -- > give key , so for value myObject[key];
// this is iteratable ;
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

            // map not iteratable 
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);      // not gives any values b/c not iteratable 
// }