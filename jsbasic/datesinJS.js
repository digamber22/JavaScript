let myDate = new Date() 

// console.log(myDate.toString())                //  Fri Jun 06 2025 20:52:53 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())            //  Fri Jun 06 2025
// console.log(myDate.toLocaleDateString())      // 6/6/2025   today's date
// console.log(typeof myDate)                    // object

let myCreatedDate = new Date(2023 , 12 , 23)    // toDateString --> {day , month , date  , yr}  (0,12 --> jan) b/c month start with 0;
// console.log(myCreatedDate.toDateString())       // Tue Jan 23 2024   

// let myCreatedDate = new Date(2023, 12, 23, 5, 3)     
// console.log(myCreatedDate.toLocaleString())       // 1/23/2024, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-15")       // but here months start with 1 like jan->01
// console.log(myCreatedDate.toLocaleString())     //   1/14/2023, 12:00:00 AM



// let myTimeStamp = Date.now();

// console.log(myTimeStamp)     // 1749244258772    this gives miliseconds  used in booking apps, airbnb like that 
// console.log(myCreatedDate.getTime());  // 1705968000000     in milisecond;
// console.log(Math.floor(Date.now()/1000));   // 1749244427    in second   {imp asked in interview}

let newDate = new Date();

console.log(newDate);             // 2025-06-06T21:18:04.895Z  today's date
console.log(newDate.getMonth()+1)   // 6     (+1 ) b/c months start with 0 
console.log(newDate.getDay())      // 5

 //console.log(`${newDate.getDay()} and the time `);


 // use to customize the things ;
 newDate.toLocaleString ('default', {
 weekday: "long",
 
 })