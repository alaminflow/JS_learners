// type conversion
let score = "36abc";

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// null 
let temp = null

console.log(typeof temp)

let tempInNum = Number(temp)
console.log(typeof tempInNum)
console.log(tempInNum)


// undefined
let temp2 = undefined

console.log(typeof temp2)

let tempInNum2 = Number(temp2)
console.log(typeof tempInNum2)
console.log(tempInNum2)


// boolean
let temp3 = false

console.log(typeof temp3)

let tempInNum3 = Number(temp3)
console.log(typeof tempInNum3)
console.log(tempInNum3)


// 
let secret = "abcd"

console.log(typeof secret)

secretToName = Number(secret)
console.log(typeof(secretToName))
console.log(secretToName)




//

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

// 0 => false; 1 => true
// "abcd" => true

let someNum = 33

let stringNum = String(someNum)

console.log(typeof(stringNum))


//======== Operations ========

let value = 3
let negValue = -value
// console.log(negValue)


let str1 = "hello"
let str2 = "Bangladesh"

let str3 = str1 + str2
console.log(str3)


console.log("1"+ 2)
console.log(1+"2")
console.log("1"+"2")
console.log("1"+"2"+"2")
console.log(1+2+"2")
console.log("1"+"2"+2)
console.log("1"+2+2)


// let num1, num2, num3;
// num1 = num2 = num3 = 3+34
// console.log(num1)


let gameCounter = 100
++gameCounter;
gameCounter++;
console.log(gameCounter)