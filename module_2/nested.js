let user = {
    name: "Al Amin",
    age: 22,
    address: {
        city: 'Dhaka',
        area: 'Dhanmondi',
        zipcode: 1000

    }

}

console.log(user.address.city)
console.log(user['address'].city)
console.log(user['address']['area'])

let entry = Object.entries(user)

console.log(entry)
console.log(entry[0][1])

let students = [
    {
        name: 'King Khan',
        id: 1011
    },
    {
        name: 'Fahim',
        id: 1012
    },
    {
        name: 'Khan',
        id: 1013,
        address: {
            city: 'Dhaka',
            area: 'Dhanmondi',
            zipcode: 1000

        },
        buses: ['Dhaka chaka', 'vip', 'premium']
    }
]

console.log(students[2].id)
console.log(students[2]['address'].city)
console.log(students[2].buses[2])
students[2].buses[2] = 'Suits'
console.log(students[2].buses[2])

