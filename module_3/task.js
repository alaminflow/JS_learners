// let movies = [
//     { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
//     { title: "Titanic", year: 1997, rating: 7.9, genre: "Romance" },
//     { title: "The Matrix", year: 1999, rating: 8.7, genre: "Sci-Fi" },
//     { title: "Avatar", year: 2009, rating: 7.8, genre: "Sci-Fi" },
//     { title: "Notebook", year: 2004, rating: 7.8, genre: "Romance" },
// ];


// let scifiMovie = movies?.filter(movie => movie.genre === "Sci-Fi")?.sort((a, b) => b.rating - a.rating)?.map(movie => `Title: ${movie.title}, Rating: ${movie.rating}, Year: ${movie.year}`)

// console.log(scifiMovie)


//task2

let products = [
    { id: 1, title: "Mouse", price: 500, category: "Accessories", inStock: true },
    { id: 2, title: "Keyboard", price: 1200, category: "Accessories", inStock: false },
    { id: 3, title: "Monitor", price: 8000, category: "Display", inStock: true },
    { id: 4, title: "Laptop", price: 55000, category: "Computer", inStock: true },
    { id: 5, title: "Headphone", price: 1500, category: "Accessories", inStock: true }
];

let filterProducts = products?.filter(product => product.inStock)?.sort((a, b) => a.price - b.price)?.map(product => `Title: ${product.title}, Price: ${product.price}`)


console.log(filterProducts)

let estTotalStock = products?.filter(product => product.inStock).reduce((acc, curr) => {
    return acc += curr.price
}, 0)

console.log(`Total money needs to spend to stock Out: ${estTotalStock}`)