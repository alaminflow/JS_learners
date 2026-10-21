let marks = [55, 23, 32, 43, 22]


let max = marks[0]

for (let i = 0; i < marks.length; i++) {
    if (max < marks[i]) {
        max = marks[i]
    }
}

let sum = 0
for (let mark of marks) {

    sum += mark;
}

console.log("max: ", max)
console.log("Sum:", sum)
console.log("Average:", sum / marks.length)


let reMarks = [];
for (let i = marks.length - 1; i >= 0; i--) {
    reMarks.push(marks[i])
}

console.log(reMarks)