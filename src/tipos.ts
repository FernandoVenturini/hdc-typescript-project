let isActive: boolean;
isActive = true;
console.log(typeof isActive);

let total:number = 23;
console.log(typeof total);

let myName:string = "Fernando";
console.log(typeof myName);

// INFERENCIA DE TIPOS:
let isComplete = false;
let isAmount = 200;
let userName = 'John';
console.log(typeof isComplete, typeof isAmount, typeof userName);

// ARRAY E OBJETOS:
let numbers:number[] = [1, 2, 3];
console.log(typeof numbers);

let user: {name:string, age:number} = {
    name: 'Fernando',
    age: 23
}

// TUPLA
let rgb:[number, number, number] = [
    255,
    255,
    255
];
console.log(typeof rgb);