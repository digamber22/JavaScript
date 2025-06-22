
 //  L-43  , 26:56 ;  

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);     // 6  , length without back space ; 


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()  // when call O/P = hitesh is present in all objects b/c all goes through funciton ;
// myHeros.hitesh()    // when call O/P = hitesh is present in all objects
// myHeros.heyHitesh()   // array have access of heyHitesh 
// heroPower.heyHitesh()   // not accecess of heyHitest 

//.........

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport       // accessing TeachingSupport in another object (TASupport) ;
}

Teacher.__proto__ = User   // Teacher access all the properties of User ;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  // accessing all properties of Teacher

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()  //  True length is : 11
"hitesh".trueLength()        //   True length is : 6
"iceTea".trueLength()        //  True length is : 6