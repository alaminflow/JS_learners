let user = {
    name: "Al Amin",
    age: 22,
    address: "Dhaka"

}

console.log(user.name)
console.log(user['name'])

delete user.address
console.log(user)

user.address = {
    city: 'Dhaka',
    area: 'Gulshan'
}
console.log(user)

console.log("------------")
console.log(Object.entries(user))
console.log(Object.keys(user))