// Write a function that has one argument, a positive integer. 
// Lets call it N.
// The function should console log a step shape.
// With N levels using the # character. Make sure the step has
// spaces on the right hand side if empty!
// Note:
// Examples:
// steps(2) 
// ‘# ‘
// ‘##’
// steps(3)
// ‘#  ‘
// ‘## ‘
// ‘###’
// steps(4)
// ‘#    ‘
// ‘##  ‘
// ‘### ‘
// ‘####’
// Notice that if each step is not populated by a step it should 
// consist an empty space. For example if n = 3:
// steps(3)
// ‘#  ‘ ←-- 2 empty spaces
// ‘## ‘ ←-- 1 empty space
// ‘###’
// Ninja:
// You are not allowed to use the repeat method. Use 2 loops 
// instead

/*
const stepShape = N => {
    if (N < 1) {
        console.log("It's must to be a positive integer.");
    } else {
        let hashtag = "#";
        for (let i = 1; i <= N; i++) {
            console.log("'" + hashtag.repeat(i) + " ".repeat(N - i) + "'");
        }
    }
}
stepShape(4);
*/


// Ninja:
const stepShapeNinja = N => {
    if (N < 1) {
        console.log("It's must to be a positive integer.");
    } else {
        let hashtag = "#";
        let myString = "'";
        for (let i = 1; i <= N; i++) {
            for (let j = 1; j <= N; j++) {
                if (j <= i) {
                    myString += hashtag;
                } else {
                    myString += " ";
                }
            }
            console.log(myString + "'");
            myString = "'"
        }
    }
}

stepShapeNinja(4);