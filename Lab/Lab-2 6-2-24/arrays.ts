// Arrays

let numbers: number[]= [1,2,3,4,5];

//Accessing Elements

let firstElement: number= numbers[0];

//console.log(numbers);

//Array Length
let arrayLength: number = numbers.length;
//Adding Elements
numbers.push(6);

//Iterating through Elements

for(let num of numbers){
    console.log(num);
}

//Array Methods

let doubledNumbers: number[] = numbers.map((num: number) => num *2); // Map method returns a new array.
let evenNumbers: number[] = numbers.filter((num: number) => num%2==0); //Filter methjod returns a new array
let sum: number= numbers.reduce((prev: number, next: number) => prev +next); //Reduce method returns a single value


