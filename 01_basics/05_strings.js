const name = "Fahim";
const repoCount = 30;

console.log(name + repoCount + " is the name and repo count") // avoid this type of concatenation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Alamin")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)

console.log(gameName.toUpperCase()
)

console.log(gameName.charAt(2))
console.log(gameName.indexOf("A"))

const newString = gameName.slice(-8, 3)
console.log(newString)


const newString2 = gameName.substring(0, 3)
console.log(newString2)

const newString3 = "  Fahim     "
console.log(newString3.trim())

const url = "https://www.alaminflow.com/about%20us"

console.log(url.replace("%20", "-"))

console.log(url.includes("flow"))

console.log(url.split('.'));

let names = ["Alamin", "Sarker", "Fahim"]
console.log(names.join(" "))


let txt = "Hi"

console.log(txt.repeat(3))

let num = 5
console.log(num.padStart(4, 0)) // make the string length 4 by adding 0 at the beginning

console.log(num.padEnd(3, 9))



