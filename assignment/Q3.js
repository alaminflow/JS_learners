// validateUsername()  
// name<4  : Too short
// includes(" ") : No space allowed
// includes("admin") : "Reserved Word"
// else : available

const validateUsername = (username) => {
    if (username.length < 4) {
        return "Too Short"
    }
    else if (username.includes(" ")) {
        return "space is not allowed"
    }
    else if (username.toLowerCase().includes("admin")) {
        return "Reserved Word"
    }
    else {
        return "Available"
    }

}

console.log(validateUsername("rahim123"))
console.log(validateUsername("rahim 123"))
console.log(validateUsername("rahimadmin123"))
console.log(validateUsername("adminrahim123"))
console.log(validateUsername("rahim123admin"))