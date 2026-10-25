// Q1

const describeValue = (value) => {
    return ` ${typeof (value)} | ${Boolean(value) === false ? "falsy" : "truthy"}`;

}

console.log(describeValue("hello"))
console.log(describeValue(""))
console.log(describeValue(25))
console.log(describeValue(0))
console.log(describeValue(true))
console.log(describeValue(null))
console.log(describeValue(undefined))
console.log(describeValue("0"))
console.log(describeValue(NaN))
console.log(describeValue(null))


//Q2
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


//Q3
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



//Q4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {

    let totalFare = 0;
    if (distance <= 2) {
        totalFare = 50 + waitingMinutes * 2;

    } else if (distance > 2) {
        totalFare = 50 + (distance - 2) * 15 + waitingMinutes * 2;

    }

    if (isNight === true) {

        totalFare = totalFare + totalFare * 0.2;
    }

    return totalFare

}

console.log(getCngFare(1))
console.log(getCngFare(2))
console.log(getCngFare(5))
console.log(getCngFare(5, true))
console.log(getCngFare(5, true, 10))
console.log(getCngFare(5, false, 10))


//Q5

function getChaseVerdict(target, scored, ballsLeft) {
    runsNeeded = target - scored
    let verdict;
    if (runsNeeded <= 0) {
        return "won"
    }
    else if (ballsLeft <= 0) {
        return "lost"
    }
    else {
        requiredRate = (runsNeeded / ballsLeft) * 6

        if (requiredRate <= 6) {
            verdict = "Comfortable"
        }
        else if (requiredRate > 6 && requiredRate <= 12) {
            verdict = "Tough"
        }
        else {
            verdict = "Almost Impossible"
        }

    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`
}

console.log(getChaseVerdict(200, 200, 12))
console.log(getChaseVerdict(200, 190, 0))
console.log(getChaseVerdict(100, 90, 12))
console.log(getChaseVerdict(100, 80, 12))
console.log(getChaseVerdict(100, 70, 12))
console.log(getChaseVerdict(150, 149, 1))