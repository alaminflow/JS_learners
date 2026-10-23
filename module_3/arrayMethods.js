let fruits = ["Apple", "banana", "mango", "Orange"]

let newFruits = fruits.forEach((f, idx) => {
    console.log(`${idx + 1} -> ${f}`)
    //return `${idx + 1} -> ${fruits}` // forEach can't return anything. 
});



let newFruits2 = fruits.map((f, idx) => {
    return `${idx + 1} -> ${f}`
});

console.log(newFruits2)


let customFruits = fruits.filter(fruit => fruit.length > 5)
let customFruits2 = fruits.find(fruit => fruit.length > 5)// find checks only the first match and exits

console.log(customFruits);
console.log(customFruits2);


let findFr = fruits.includes("mango");// true or false

console.log(findFr)


let students = [
    { name: "Rahim", marks: 85 },
    { name: "Karim", marks: 45 },
    { name: "Fahim", marks: 70 },
];

let studentCheck = students.some(s => s.marks > 60) // true false
let studentCheck2 = students.every(s => s.marks > 60)// true false

console.log(studentCheck)
console.log(studentCheck2)

// reduce, sort , chaining

let products = [
    { title: "Mouse", price: 500, inStock: true },
    { title: "Keyboard", price: 1200, inStock: false },
    { title: "Monitor", price: 8000, inStock: true },
    { title: "Headphone", price: 1500, inStock: true },
];


let totalPrice = products.reduce((acc, current) => {
    return (acc += current.price)
}, 0); // 0 means acc starts wih zero;

console.log(totalPrice)

//let sorted = products.sort((a, b) => a.price - b.price)
let sorted = products.sort((a, b) => b.price - a.price)

console.log(sorted)

let estTotalPrice = products.filter(p => p.inStock).reduce((acc, current) => {
    return acc += current.price;
}, 0)

console.log(estTotalPrice)


