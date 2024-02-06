
let age= 20;
let status = (age >=18) ? "Adult" : "Minor";

//Spread Operator (...): The spread operator is used to expand elements of an array or object.

// Copying an array

let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // Creates a copy of arr1

// Concatenating arrays
let arr3 = [4, 5, 6];
let combinedArray = [...arr1, ...arr3]; // [1, 2, 3, 4, 5, 6]

// Adding elements to an array
let newArr = [0,...arr1, 4]; // [0, 1, 2, 3, 4]
// Spreading array elements as function arguments

function sum(a, b, c) {

return a + b + c;
}

//Rest Parameter (...): The rest parameter is used to collect the remaining arguments of a function into a single array.
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
    total += number;
    }
    return total;
    }
    let result = sum(1,2,3,4,5); console.log(result); // 15
    result = sum(10,20);
    console.log(result); // 30

    