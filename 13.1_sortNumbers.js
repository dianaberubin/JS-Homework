// 1. Sort the array of numbers from descending to ascending 
// order
// 2. Sort the array of numbers from ascending to decending 
// order.


const numbers = [1, -5, 666, 2, 400, 11];


const sort1 = numbers.slice().sort((a,b) => a-b );
const sort2 = numbers.slice().sort((a,b) => b-a );

console.log(sort1);
console.log(sort2);