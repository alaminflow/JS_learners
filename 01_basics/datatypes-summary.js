// primitive data types
// 7types: 
// number, string, boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('1234');
const anotherId = Symbol('1234');

console.log(id === anotherId) // false


const bigNumber = 193847927428034982034n
console.log(typeof bigNumber)



// Reference or  non-primitive data types
// object, array, function

const heros = ["superman", "spiderman", "ironman"]
const myObj = {
    name: "Fahim",
    age: 22,
    email: "fahim@example.com"
}

const myFunction = function () {
    console.log("Hello Bangladesh")
}
myFunction()

console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)

// Return type of variables in js
// primitive data types => 
//     number => number
//     string => string
//     boolean => boolean
//     null => object
//     undefined => undefined
//     symbol => symbol
//     BigInt => bigint

// Reference data types =>
//     array => object
//     object => object
//     function => function

// -------------------------------------



// stack(Primitive) , Heap(Non-primitive) memory allocation in js

let myName = "Fahim"
let anotherName = myName

console.log(myName)
console.log(anotherName)

myName = "Fahim Khan"
console.log(myName)
console.log(anotherName) // anotherName will not change because it is primitive data type and stored in stack memory. So, it will not be affected by the change of myName variable.

let myObj1 = {
    name: "Fahim",
    age: 22
}

let anotherObj = myObj1

console.log(myObj1)
console.log(anotherObj)

myObj1.name = "Fahim Khan"
console.log(myObj1)
console.log(anotherObj) // anotherObj will change because it is non-primitive data type and stored in heap memory. So, it will be affected by the change of myObj1 variable.