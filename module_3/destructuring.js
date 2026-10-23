//Destructuring

const student = {
    name: "King Fahim",
    age: 20,
    address: "Dhaka"
}

const { name, address, age } = student;
console.log(age)



const student2 = {
    name: "Fahim",
    age: 20,
    address: {
        city: "Dhaka",
        zipcode: 1212
    },
}

const { name: stdname, address: { city, zipcode } } = student2

console.log(stdname, zipcode)


//

const arr = ['red', 'green', 'blue']

//const [first, second, third] = arr
const [third] = arr

console.log(third)

// nested array


const student3 = {
    name: "Fahim",
    age: 20,
    address: {
        city: "Dhaka",
        zipcode: 1212
    },
    hobbies: ["Gardening", "Reading books", "Touring"]
}

const { name: std2n, address: { city: stdcity }, hobbies: [firstHobby] } = student3

console.log(firstHobby, stdcity)