// a. Array of words
// a.1. Sort the array of strings from descending to ascending 
// order
// a.2. Sort the array of strings from ascending to descending 
// order.
// b. Lets sort an array of words that includes a word with an 
// uppercase:

const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

const sortedAscending = foods.sort();
console.log(sortedAscending);

const sortDescending = foods.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
  //or with a ternary
  // return a == b ? 0 : a > b ? -1 :1
});

console.log(sortDescending);

//? with uppercase

const foodsWithUpperCase = [
    'falafel',
    'sabich',
    'Sbich',
    'hummus',
    'pizza with extra pineapple',
  ];

  const sortedAscendingUpperCase = foodsWithUpperCase.sort((a, b) => {
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if (x > y) return 1;
    if (x < y) return -1;
    return 0;
  });

  console.log(sortedAscendingUpperCase);
  const sortedDescendingUpperCase = foodsWithUpperCase.sort((a, b) => {
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if (x < y) return 1;
    if (x > y) return -1;
    return 0;
  });
  

// b.1. Sort the array of strings from descending to ascending 
// order.
// b.2. Sort the array of strings from ascending to descending 
// order.
// c. Longest word
// c.1. Sort the array of strings from the longest word to the 
// shortest word only using the sort function


const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const longestWordSort = words.sort((a, b) => {
  let x = a.length;
  let y = b.length;
  if (x < y) return 1;
  if (x > y) return -1;
  return 0;
});
