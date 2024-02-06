//Built In Type Any, enum ,type

//ANY= this variable can hole anytype of values
let data: any;
data='Something';
console.log(data); //something

//Enum Type, this is a way to define  a constant value

enum Color {Red, Green, Blue};
let color: Color= Color.Red;

console.log(color); //0

//Tupple type

let employee: [number, string];
employee=[1, "Steve"];
console.log(employee);  //[1, steve]

