// With the use of two for loops, console log all the countries 
// one by one and in your terminal. You should see something 
// like this in your terminal:
// Neighbour: Canada
// Neighbour: Mexico
// Neighbour: Spain
// Neighbour: Norway
// Neighbour: Sweden
// Neighbour: Russia

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
function loopinloop(arr){
    for ( i=0 ; i< arr.length ;i++  ){
        for (j=0 ; j<arr.length ; j++){
            if(arr.indexOf(arr[i][j]) !== (-1))_
                console.log(arr[i][j]);

        }
    }
}
loopinloop(listOfNeighbours);