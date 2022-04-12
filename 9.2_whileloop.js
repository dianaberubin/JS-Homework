const lengthOfWords= arr =>
   {
    let wordslength = [];
    for( let i=0 ; i< arr.length ; i++ )
     {
    wordslength.push(arr[i].length);
    }
    return wordslength;
    }
    
    let array1 = ["boo", "doooo", "hoo","ro"] ;
    console.log(lengthOfWords(array1));

    /* */
    let array2 = ["boo", "doooo", "hoo","ro"] ;
    let wordslength2 = [];
    
    let i = 0;
    while (i< array2.length){
        wordslength2.push(array2[i].length);
        i++;
    }
    
    console.log(wordslength2);