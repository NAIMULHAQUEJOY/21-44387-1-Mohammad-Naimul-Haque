//If else
if (age >=18){
    console.log ("Adult");
} else if (age>= 13){
    console.log("Teenager");
}else{
    console.log("Minor");
}

//Switch
let age=16;
let status;
switch (true){
    case age >=18:
    status="Adult";
    break;

    case age>= 13:
    status="Teenager";
    break;

    dafault:
    status = "Minor";

}
console.log(status);


//Loops

let x = ['a', 'b', 'c', 'd', 'e'];

// For Loop
for (let i = 0; i < 3; i++){
console.log(x[i]);

}

//while loop

let z = ['a', 'b', 'c', 'd', 'e'];
// //While Loop
let i = 0;
while (i < 4) {
console.log(z[i]);
i++;
}

//Do While Loop
let j = 0;
do { console.log(z[j]); j++;

} 
while (j < 2);

//let x = ['a', 'b', 'c', 'd', 'e'];

//for...in Loop
for (let i in z) {

console.log(z[i]);

}

//let x = ['a', 'b', 'c', 'd', 'e'];

//for...of Loop
for (let i of z) {
    
console.log( i);
}

