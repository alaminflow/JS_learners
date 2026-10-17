const user = {
    name: "Al Amin"
}
user.name = 'Al Amin Khan' // allowed: object is mutable

console.log(user.name)


const a = { count: 1 }

const b = a

b.count = 23

console.log(a.count) // it will show 23 because a and b are pointing to the same object in memory and they are reference data type. so if we change the value of b.count then it will also change the value of a.count because they are pointing to the same object in memory.


console.log(0 == false) // true; because 0 is falsy

console.log(0 === false) // === checks datatype also. so its number and boolean are different types. : false;

console.log("" == false) // true because "" means false
//null == undefined versus null === undefined
//null === undefined → false because strict equality does not treat these two distinct values as equal.


//falsy values you should recognize are: false, 0, -0, 0n, "", null, undefined and NaN. Everything else is truthy, including empty arrays and empty objects.

console.log(Boolean([])) // true empty object not an empty string
console.log(Boolean({}))
console.log(Boolean("0")) // true because 0 is inside string

console.log(Boolean("false"))// true;inside string;



//typeof

console.log(typeof null);// object
console.log(typeof undefined);// undefined
console.log(typeof []); // object
console.log(typeof NaN); //Number 



console.log(0 || 100); // 100; because it checks falsy value
console.log(0 ?? 100); // 0; because ?? checks null or undefined
console.log("" || "default"); // default;
console.log("" ?? "default"); // ""


const items = [1, 2]
items.push(3)
// items = [1,2,3] ; because its pushing value in stack a object. array is immutable but the inside array the objects are immutable.i cant change items value they are const


if (true) {
    let x = 10;
    var y = 20;
}

// Which variable can be accessed here? 
// x is inaccessible, but y is var is fucntion scoped or global scoped in this top level script though we are not gonna use var; 

console.log(typeof null);// object
console.log(typeof undefined); // undefined

console.log(null == undefined); // true; js thinks it exceptionally equal;
console.log(null === undefined);// false; explicitly checks datatypes and values

console.log(null == 0); //false;
console.log(undefined == 0); // false



// exercise 1

const age = "20"
const minimumAge = 18

if (age === minimumAge) {
    console.log("strictly equal")
}
else {
    console.log("Strictly not equal")
}



if (Number(age) >= minimumAge) {
    console.log("value is at least minimumAge.")
}
else {
    console.log("value is not at least minimumAge.")
}


let arr = []
let obj = {}

console.log(Boolean(arr))
console.log(Boolean(obj))

//exercise 2

function calculateResult(numbers) {
    let total = 0;
    let average = 0;
    let passed = false;

    if (numbers.length === 0) {
        return { total, average, passed }

    } else if (numbers.length === 1) {
        total = numbers[0];
        average = numbers[0];

    }
    else {
        for (let i = 0; i < numbers.length; i++) {

            total += numbers[i];
        }
        average = total / numbers.length

    }


    if (average >= 60) {
        passed = true;
    } else {
        passed = false;
    }

    let result = { Total: total, Average: average, Passed: passed }
    return result




}

console.log(calculateResult([]))
console.log(calculateResult([59]))
console.log(calculateResult([70, 80, 90]))

// final exercise 2
const calcResult = (numb) => {
    let total = 0
    for (let i = 0; i < numb.length; i++) {
        total += numb[i]
    }

    const average = numb.length === 0 ? 0 : total / numb.length;

    const passed = average >= 60

    return { total, average, passed }


}


console.log(calcResult([]))
console.log(calcResult([59]))
console.log(calcResult([70, 80, 90]))

