const coding = ["js", "ruby", "java", "python", "cpp"]

//  forEach loop

// coding.forEach( function (val){      // call back fn have no name ;
//     console.log(val);
// } )

// coding.forEach( (item) => {        // using arrow fn 
//     console.log(item);
// } )


// function printMee(item){     // printMee just name, can use other name also
//     console.log(item);
// }

// coding.forEach(printMee)


// coding.forEach( (item, index, arr)=> {      //  pass multiple parameters
//     console.log(item, index, arr);      // it gives item,index,whole arr
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName);
} )