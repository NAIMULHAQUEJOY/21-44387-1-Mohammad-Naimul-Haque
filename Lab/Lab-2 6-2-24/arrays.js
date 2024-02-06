// Arrays
var numbers = [1, 2, 3, 4, 5];
//Accessing Elements
var firstElement = numbers[0];
//console.log(numbers);
//Array Length
var arrayLength = numbers.length;
//Adding Elements
numbers.push(6);
//Iterating through Elements
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    console.log(num);
}
//Array Methods
var doubledNumbers = numbers.map(function (num) { return num * 2; }); // Map method returns a new array.
var evenNumbers = numbers.filter(function (num) { return num % 2 == 0; }); //Filter methjod returns a new array
var sum = numbers.reduce(function (prev, next) { return prev + next; }); //Reduce method returns a single value
