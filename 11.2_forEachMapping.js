// Answer the questions below and use the map or the 
// forEach method :

// 1. Write a function called doubleValues which accepts an 
// array of integers and returns a new array with all the 
// values in the array passed to the function doubled.

const values = [1,2,3,4,5,6];
const doubleValues = values.map(function(num)
{ return (num*2);
});

console.log(doubleValues);

// 2. Write a function called onlyEvenValues which accepts an 
// array and returns a new array with only the even values in 
// the array passed to the function.

const onlyEvenValues = arr => {
    const newArr = [];
    arr.forEach(x => {
        if (x % 2 !== 0) {
            newArr.push(x);
        }
    });
    return newArr;
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(onlyEvenValues(arr2));



// 3. Write a function called showFirstAndLast which accepts 
// an array as an argument and returns a new array with only 
// the first and last elements from the function’s argument 
// array. The returned array should only contain elements that
// are strings.


const showFirstAndLast = arr => {
    const objStrArr = [];
    arr.forEach((element, index) => {
        if (typeof element === "string"){
            objStrArr[index] = element;
        }
    })
    const objStrKeys = Object.keys(objStrArr);
    const minKey = Math.min(...objStrKeys);
    const maxKey = Math.max(...objStrKeys);

    return [objStrArr[minKey], objStrArr[maxKey]];
}
const arr3 = [212, "ooo", 876876, "876", 544, "hhh", 768, "yeh!"];
console.log(showFirstAndLast(arr3));

// 4. Write a function called vowelCount which accepts a 
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in 
// the string. The key should be the vowel and the value 
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.

const vowelCount = str => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const obj = {};
    const arrStr = str.toLowerCase().split('');
    arrStr.forEach(element => {
        if (vowels.includes(element)) {
            console.log(obj[element]);
            if (obj[element]) {
                obj[element]++;
            } else {
                obj[element] = 1;
            }
        }
    });
    return obj;
}
const str1 = "Hello, my name is Eyal";
console.log(vowelCount(str1));

// 5. Write a function capitalize that takes a string as an 
// argument and will return the whole string capitalized.

const capitalize= str => {
 const newstr = 


}

// 6. Write a function called shiftLetters that takes a string as 
// an argument and return’s an encoded string with each 
// letter shifted down the alphabet by one.
// 7. Create a function called swapCase that takes a string as 
// an argument and returns a string that every other word is 
// capitalized. (you can use the fifth’s exercise's function to 
// keep it dry