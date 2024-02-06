
//Template Literal is also known as “String Templates” and “Template Strings”. 
//Template literals offer a more practical and adaptable method of working with strings. 
//Template Strings use backticks (``) rather than the quotes ("") to define a string.


const name = "Alice";
const greeting = `Hello, ${name}!`;

console.log( greeting); // Outputs: Hello, Alice!

// Multiline string
const multiline= `This is 
a multiline
 string.`;

console.log(multiline);

//String Interpolation: Interpolating variables and expressions into strings is made simple 
//with the help of Template Strings.

const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Outputs: The sum of 5 and 10 is 15.

