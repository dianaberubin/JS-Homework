function describeCountry (country, population, capitalCity){
 retval = country + " has " + population + " million people and its capital city is " + capitalCity;
 return retval;
}

let r1 = describeCountry ("Finland", 6, "Helsinki");
let r2 = describeCountry ("Israel", 8, "Jerusalem");
let r3 = describeCountry ("Russia", 10, "Moscow");

console.log(r1);
console.log(r2);
console.log(r3);