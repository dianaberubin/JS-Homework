
// 1. Write a a function called ‘isString’ that receives 2 
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback 
// function which logs that string to the console.
// 2.  Create a function called ‘firstWordUpperCase’ that 
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence 
// and pass the string to a callback function which will create 
// dashes between the words.
// 3. Call the ‘firstWordUpperCase’ function with a callback of 
// your choice.
// 4. Create your own function that will receive from one of its
// arguments a callback function.


/* */
// 1:
const isString = (str, callBackFunction) => {
    if (typeof str === "string") {
        callBackFunction(str);
    }
    else console.log('this is not a string');
}

const cLog = string => {
    console.log(string);
}

const myName = "aaa";
isString(myName, cLog);


// 2:
const firstWordUpperCase = (str, callBackFunction) => {
    const splitStr = str.split(' ');
    let newSentence = splitStr[0].toUpperCase();
    for (let i = 1; i < splitStr.length; i++){
        if(i < splitStr.length){
            newSentence += " ";
        }
        newSentence += splitStr[i];
    }
    const sentenceDash = callBackFunction(newSentence);

    console.log(sentenceDash);
}

const createDashes = str => {
    return str.replaceAll(" ", "-");
}

const mySentence = "my name is Eyal";
firstWordUpperCase(mySentence, createDashes);


// 3:
firstWordUpperCase(mySentence, str => str += ", and it's a nice name.");


// 4:
const repeatSentenceWithDash = (str, numToRepeat, callBackFunction) => {
    let newStr = str + " ";
    newStr = newStr.repeat(numToRepeat-1);
    newStr += str;
    return callBackFunction(newStr);
}

console.log(repeatSentenceWithDash(mySentence, 3, createDashes));