function tellFortune (jobTitle, location, partnerName, numberOfChildren) {

let yourFortune = "You will be a " + jobTitle + "in " + location  + " and married to " 
 +partnerName + "with" + numberOfChildren; 
return yourFortune;
}

console.log(tellFortune("programmer","tel-aviv","Sharon","3 children"));