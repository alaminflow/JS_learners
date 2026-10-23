const getDayType = (day) => {
    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":
            return "Weekend"

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednessday":
        case "thursday":
            return "Working Day"

        default:
            return "Invalid Day"
    }
}
console.log(getDayType("Friday"))
console.log(getDayType("friday"))
console.log(getDayType("MONDAY"))
console.log(getDayType("Bandarban"))
console.log(getDayType("Bangladesh"))
