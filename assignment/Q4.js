//getCngFare(distance, isNight, waitingMinutes)

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