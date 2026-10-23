// Optional Chaining & Nullish Coalescing (?., ??, Safe Property Access
let user1 = {
    name: "Rahim",
    address: {
        city: "Dhaka",
    },
};

let user2 = {
    name: "Karim",
    // no address
};

console.log(user1.address.city)
//console.log(user2.address.city) undefined error
console.log(user2?.address?.city) // undefined // optional chaining



// nullish collescing ?? if undefined or null then show this
console.log(user2?.address?.city ?? "Rajshahi")








