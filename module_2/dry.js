// building a order processinng system to understna dry and how important function is

function isValidPrice(price) {
    return typeof price === 'number' && price > 0;
}

function isValidEmail(email) {
    return email.includes('@') && email.includes('.')
}

function calculateDiscount(price, discountPercent) {
    if (!isValidPrice(price)) {
        console.log("Error: Invalide item price")
        return 0
    }
    let discountAmount = price * discountPercent / 100
    return price - discountAmount
}

function calculateFinalBill(price, vatPercentage = 15) {
    let vat = 0
    vat = (price * vatPercentage) / 100;
    return price + vat;
}

function formatBdt(amount) {
    return `${amount.toFixed(2)} BDT`
}

function capitalized(str) {
    if (!str) return
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function processOrder(user, itemPrice, discountCode) {
    console.log(`--- Processing Order for ${capitalized(user.name)} ---`)

    if (!isValidEmail(user.email)) {
        console.log("Error: Invalid user email")
        return
    }

    let currentPrice = itemPrice
    if (discountCode == 'asf11') {
        currentPrice = calculateDiscount(itemPrice, 11);
        console.log("11% discount applied")
    }

    let totalBill = calculateFinalBill(currentPrice)
    console.log("Final amount to be paid:", formatBdt(totalBill))


}

let user1 = {
    name: 'Al amin',
    email: 'alamin@gmail.com'
}

processOrder(user1, 2000, 'asf11')