// Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

//let myCreatedDAte = new Date(2023, 0, 23) // month start with 0
// let myCreatedDAte = new Date(2023, 0, 23, 5, 3)
// let myCreatedDAte = new Date("2023-01-15")
let myCreatedDAte = new Date("11-12-2015")
console.log(myCreatedDAte.toDateString())
console.log(myCreatedDAte.toLocaleString())


let myTimeStamp = Date.now()

console.log(myTimeStamp)



let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())


console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))

