// Immediately Invoked Function Expressions (IIFE)
// IFFE is used to remove the pollution of global scope and which fn execute imediately ;

(function chai(name){
    // named IIFE
    console.log(`DB CONNECTED ${name}`);     // o/p = DB CONNECTED ; 
})('digmaber');                             // must add semicolon to end the first fn ;


// iife use two bracket one for fn  and another for execution  like ()() ;
( (name) => {
    // simple IIFE 
    console.log(`DB CONNECTED TWO ${name}`);    // o/p = DB CONNECTED TWO hitesh;
} )('hitesh')

