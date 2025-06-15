// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item); 
//     return item               // console.log gives undefined , b/c forEach loop do not return any values
// } )

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {    // using callback 
//     return num > 4
// } )

// console.log(newNums);  // [5,6,7,8,9,10] ;

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

    // console.log(userBooks);

  userBooks = books.filter( (bk) => {  // open scope {} , then must return ;
    return bk.publish >= 1995 && bk.genre === "History"
})
//   console.log(userBooks); 
  
  /* o/p = 
 [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]*/

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 // adding 10 in each number;
// const newNums = myNumers.map( (num) => { return num + 10})
// console.log(newNums); // [11, 12 , ......, 20 ]

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// chaining --> more methods use at a
const newNums = myNumers
                .map((num) => num * 10 )  // this method all multple with 10 
                .map( (num) => num + 1)   // in this method multiplied value will goes and add 1 ;
                .filter( (num) => num >= 40) 

console.log(newNums);  // O/p = [41,51,61,71,81,91,101]