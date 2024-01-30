// Array Iteration map
//map() calls a function on each element creating a new array of the containg the results,
let numbers= [1,2,3,4,5];
let doubledNumbers= numbers.map(function(number){
    return number *2;
    
})
console.log(doubledNumbers);