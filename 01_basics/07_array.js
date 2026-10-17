//ex1

const products = [
    { id: 1, name: "Keyboard", price: 50, inStock: true },
    { id: 2, name: "Mouse", price: 25, inStock: false },
    { id: 3, name: "Monitor", price: 150, inStock: true },
    { id: 4, name: "USB Hub", price: 30, inStock: true }
];

const getAvailableProducts = (products, minimumPrice) => {
    return products.filter(product => product.inStock && product.price >= minimumPrice)
}

console.log(getAvailableProducts(products, 30))
console.log(getAvailableProducts(products, 100))// product : monitor and its over 100 and only one product
console.log(getAvailableProducts(products, 200)) // there is 0 products more than price 200; output: [] empty array



//ex2 map,filter
// .filter() decides which items to keep
// .map() decides what each item becomes


const products2 = [
    { id: 1, name: "Keyboard", price: 50, inStock: true },
    { id: 2, name: "Mouse", price: 25, inStock: false },
    { id: 3, name: "Monitor", price: 150, inStock: true },
    { id: 4, name: "USB Hub", price: 30, inStock: true },
    { id: 5, name: "Webcam", price: 80, inStock: false }
];

const getAvailableProductsNames = (products2, minPrice) => {
    return products2.filter(product => product.price >= minPrice && product.inStock).map(product => product.name)
}

console.log(getAvailableProductsNames(products2, 30))
console.log(getAvailableProductsNames(products2, 75))
console.log(getAvailableProductsNames(products2, 200))




