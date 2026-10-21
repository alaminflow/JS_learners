let student = {
    name: 'Fahim',
    id: 201,
    marks: {
        bangla: 99,
        english: 100,
        math: 97
    }
}

let totalMarks = 0;
let totalSubj = 0

for (const subj in student.marks) {
    totalMarks += student.marks[subj]
    totalSubj++
}
let avg = totalMarks / totalSubj
if (avg >= 80) {
    console.log("Passed with disctinct result. Got ", avg, "%")
}
else {
    console.log("study better", avg, "%")
}
console.log("Total Marks:", totalMarks)
console.log(typeof totalMarks)
console.log("total subjects: ", totalSubj)
console.log("Average", avg)