// Create a function that received an array of integers as a 
// parameter. 
// Return a new array without any duplicates inside. You 
// indexOf as part of your solution.
// Example:
// [3,4,4,3,6,3] --→ [3,4,6]

function RemoveDuolicates(arr) {
 let noduplicates = [];
 for( i=0 ; i < arr.length; i++ ) {
     if( array.indexOf(arr[i], i+1 ) == -1){
        noduplicates.push(arr[i]);
     }
 }
 return noduplicates;
}

let array = [3,4,4,3,6,3];
console.log(RemoveDuolicates(array));