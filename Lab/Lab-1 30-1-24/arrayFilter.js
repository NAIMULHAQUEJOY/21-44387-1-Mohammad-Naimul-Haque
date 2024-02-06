// filter() is used to create  a new array, with elements, that pass a specific test provided by a function. It does not modify the original array.
//but returns a new array containing only the lements.

const numbers = [1,2,3,4,5,6];
const evenNumbers= numbers.filter(function (num){
    return num % 2 ===0;
});
console.log(evenNumbers); //[2,4,6]