//immutable objects
// ... // spread operator


const products = [
    { id: 1, name: "Keyboard", price: 50, inStock: true },
    { id: 2, name: "Mouse", price: 25, inStock: false },
    { id: 3, name: "Monitor", price: 150, inStock: true },
    { id: 4, name: "USB Hub", price: 30, inStock: true },
    { id: 5, name: "Webcam", price: 80, inStock: false }
];

const updateProductPrice = (products, productId, newPrice) => {
    return products.map(product => product.id === productId ? { ...product, price: newPrice } : product)
}

console.log(updateProductPrice(products, 2, 25))
console.log(updateProductPrice(products, 1, 60))
console.log(updateProductPrice(products, 90, 60)) // i think it should show as it is but i can copy but it would better if it didnt create non necessary copy.


// ex4

const getDiscountedAvailableProducts = (products, minPrice, discountPercent) => {
    return products
        .filter(product => product.inStock && product.price >= minPrice)
        .map(product => ({
            id: product.id,
            name: product.name,
            discountedPrice: product.price * (1 - discountPercent / 100)
        }))
}

console.log(getDiscountedAvailableProducts(products, 30, 10))
console.log(getDiscountedAvailableProducts(products, 100, 20))
console.log(getDiscountedAvailableProducts(products, 200, 10))


// challenge: exercise 5

const getProductSummary = (products, minimumPrice, discountPercent) => {

    const filteredProduct = products.filter(product => product.price >= minimumPrice && product.inStock)


    const productSummary = filteredProduct.map(product => ({
        name: product.name,
        originalPrice: product.price,
        discountPrice: product.price * (1 - discountPercent / 100)

    }))

    const totals = productSummary.reduce((acc, item) => {
        acc.totalOriginalPrice += item.originalPrice
        acc.totalDiscountedPrice += item.discountPrice
        return acc
    }, { totalOriginalPrice: 0, totalDiscountedPrice: 0 })

    return {
        Products: productSummary,
        ...totals
    }
}
console.log(getProductSummary(products, 30, 10))
console.log(getProductSummary(products, 100, 20))
console.log(getProductSummary(products, 200, 10))