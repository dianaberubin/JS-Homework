const arr = [1,7,3,0,-5,7,3,9];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

/**/
let a= arrayLength(arr);

function arrayLength(arr){
    len=0;
    for(let i = 0; i < arr.length; i++){
    len+=1; 
}   
console.log( 'a' + len);
}

/**/ 
let b= arraySum(arr);
function arraySum(arr) {
    len=0;
    for(let i = 0; i < arr.length; i++){
    len+=arr[i]; 
}   
console.log('b' + len);
}

/**/
let c= arrayMulti(arr);
function arrayMulti(arr) {
    len=0;
    for(let i = 0; i < arr.length; i++){
    len*=arr[i]; 
}   
console.log('c' + len);
}

