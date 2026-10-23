//let newArr = [...oldArr]
//let newObj = {...oldObj}


let cart = ["Fruits", "Rice"]
cart.push("egg")

console.log(cart)

let cart2 = [...cart, "egg", "fish"]


const personalInfo = {
    name: "Fahim",
    age: 22,

}

const contactInfo = {
    email: "fahim@gmail.com",
    phone: "0170987979789"
}

const fullPortfolio = {
    ...personalInfo,
    ...contactInfo
}

console.log(fullPortfolio)

