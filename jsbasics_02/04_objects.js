// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3)                   // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
 
// const obj3 = Object.assign({}, obj1, obj2, obj4)      //  (target , sources )

// console.log(obj3)                                   // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
 
const obj3 = {...obj1, ...obj2}                 // most of the time using spread method ;

console.log(obj3);                            // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);                             // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser));                // [ 'id', 'name', 'isLoggedIn' ]  it gives array of keys 

// console.log(Object.values(tinderUser));              // [ '123abc', 'Sammy', false ]   it gives the array of values ;  

// console.log(Object.entries(tinderUser));             // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]   make it arrays with key & val
 
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));     //true      // it is used to check this properties exist or not , it helf in further woking in project ;


 // destructuring of objects 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor: instructor} = course
// const {courseInstructor} = course

// console.log(courseInstructor);

// console.log(instructor);
  
 // api  --> json formate                  all key & values are in string formate;
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]