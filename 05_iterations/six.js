// reduce concept --> use to finding total sum ,  

 const arr1 = [1, 2 , 3 , 4] ;
 const initialvalue = 0 ; 
 const sumWithinitialval = arr1.reduce ((accumulator, currval)=> accumulator + currval, initialvalue );
 
//  console.log(sumWithinitialval);  // o/p = 10 ; like prefixsum[n-1] or sum of all element;

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);    // 6 ;

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);      // 22996