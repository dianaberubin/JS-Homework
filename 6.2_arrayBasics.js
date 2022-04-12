const people = ["Greg", "Mary", "Devon", "James"];

/* Using a loop, iterate through this array and console.log all of the people. */
for ( i=0 ; i < people.length ; i+=1 ){
    console.log(people[i]);
}
/** Write the command to remove "Greg" from the array */

const people1 = ["Greg", "Mary", "Devon", "James"];
people1.shift();
console.log(people1);

/* Write the command to remove "James" from the array.*/
const people2 = ["Greg", "Mary", "Devon", "James"];
people2.pop();
console.log(people2);


// 4. Write the command to add "Matt" to the front of the array.

const people3 = ["Greg", "Mary", "Devon", "James"];
people3.unshift("Matt");
console.log(people3);

// 5. Write the command to add your name to the end of the array.
const people4 = ["Greg", "Mary", "Devon", "James"];
people4.push("Diana");
console.log(people4);

// 6. Using a loop, iterate through this array and after console.log-ing "Mary",
// exit from the loop.

const people5 = ["Greg", "Devon", "James","Mary"];
for (i=0 ;people5.length ;i+=1 )
{
    if( people5[i]== "Mary")
    break;
    else console.log(people5[i]);
}

// 7.Write the command to make a copy of the array using slice.  The copy 
// should NOT include "Mary" or "Matt".
const people6 = people.slice(2);
console.log(people6);

// 8. Write the command that gives the indexOf where "Mary" is located.
// 9.Write the command that gives the indexOf where "Foo" is located (this 
// should return -1).
people = ["Greg", "Devon", "James","Mary"];
console.log(people.indexOf("Mary"));
console.log(people.indexOf("foo"));


// 10.Redefine the people variable with the value you started with. Using the 
// splice command, remove "Devon" from the array and add "Elizabeth" 
// const people = ["Greg", "Mary", "Devon", "James"];
// and "Artie". Your array should look like this when you are done ["Greg",
// "Mary", "Elizabeth", "Artie", "James"].
people.shift();
people.pop();
people.unshift(`Greg`);
people.push(`James`)

// console.log(people);

people.splice(2, 1, `Elizabeth`, `Artie`);

// console.log(people);

// 11.Create a new variable called withBob and set it equal to the people 
// array concatenated with the string of "Bob". 
const people = ["Greg", "Mary", "Devon", "James"];
let withBob = people.concat('Bob');

console.log(withBob);