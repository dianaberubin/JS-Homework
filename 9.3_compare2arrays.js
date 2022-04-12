// Create a function that takes these two arrays as 
// arguments.
// Compare these two arrays using 2 for loops and return the 
// items that are the same. If none are the same return false.


const food = ["Noodle", "Pasta", "Ice-cream", "Meat", 
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", 
"Hamburgers"];

function compareloops(arr1,arr2){
    const equalwords = [];
    for( i = 0 ; i<arr1.length ; i++ ){
        for (j =0 ; j < arr2.length ; j++ ){
           if ( arr1[i]===arr2[j])
                 equalwords.push(arr2[j]);
        }
    }
return equalwords;
}

console.log(compareloops(food,food1));