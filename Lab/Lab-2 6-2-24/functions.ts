//Functions

function addNumbers(a: number, b: number):number {
    return a + b;
}

console.log(addNumbers(10,20)); // 30


//Arroe functions

let addNumbers5 = (a: number, b:number): number => a +b;

console.log(addNumbers5(10,20));  //30

//Optional Parameters

function addNumbers1(a: number,b:number, c?:number):number { //c?: number means c is optional
    return a +b + (c ?? 0); // c?? 0 means c is undefined then use 0

}
console.log(addNumbers1(10,30,10));

//Default Parameters, means, here c:numnber=0 means c is optional and default value is zero

function addNumbers2(a: number, b: number, c: number=0): number{
    return a + b + c;
}

//rest parameters,here nums: number[] means nums is an array of numbers.

function addNumbers3(...nums:number[]): number{
    let sum: number=0;
    for (let num of nums){
        sum += num;
    }
    return sum;

}

console.log(addNumbers3);

//Functions, overloading

function addNumbers4(a: number, b: number): number; //Function signature
function addNumber4(a: string, b:string): string; //Function overloading by cahhingthe return type
function addNumbers4(a: any, b:any): any {  //function definition
    return a +b;
}

console.log(addNumbers4(40,20));