let cart = [
    { name: 'Shirt', price: 1100, quantity: 2 },
    { name: 'Pant-Shirt', price: 2100, quantity: 20 },
    { name: 'Pant', price: 1300, quantity: 12 },
]


let itemCount = 0
let totalPrice = 0
let productQuantity = 0

// console.log(cart.length)
for (let item in cart) {
    totalPrice += cart[item].price
    itemCount++
    productQuantity += cart[item].quantity

}

console.log("Total price:", totalPrice)
console.log("Items:", itemCount)
console.log("Product Quantity:", productQuantity)