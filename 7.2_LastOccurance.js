// you have this string:
// const string = "The more you know, the more you know that you 
// don't know";
// We want to get the index of the last occurrence of the word
// “you”. It should give you 42.
// You can solve this problem without the method indexOf. But
// if you can manage to do it also with indexOf you will get a 
// cookie.


function first_occu(str,word) {
let first_occur = str.indexOf(word)
for (i=first_occur +1 ; i< str.length ; i++){
 if( str.indexOf("you", i+1) == (-1)  )
 return i;
}
}
const string = "The more you know, the more you know that you don't know";
let result = first_occu(string, "you");
console.log(result);