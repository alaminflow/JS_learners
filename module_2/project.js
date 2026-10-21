let students = [
    { id: 101, name: "Rahim", age: 20, department: "cse" },
    { id: 102, name: "Fahim", age: 22, department: "eee" },

]

function addStudent(name, age, dept) {
    let newId = students.length > 0 ? students[students.length - 1].id + 1 : 101;

    let newStudent = {
        id: newId,
        name: name,
        age: age,
        department: dept
    }
    students.push(newStudent)
    console.log("Student added successfully")
}

addStudent("alamin", 24, 'AI')
console.log(students)


function getAll() {
    for (const student of students) {
        console.log(student)
    }
}

getAll()

function findStudent(id) {
    let foundStudent = null
    for (let student of students) {
        if (student.id == id) {
            foundStudent = student
            break;
        }

    }
    if (foundStudent) {
        console.log("Found Student:", foundStudent)
    } else {
        console.log(" student not found")
    }
}

findStudent(103)


function deleteStudent(id) {

    let targetStudent = -1
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            targetStudent = i
            break;
        }


    }
    if (targetStudent != -1) {
        let deleteStudent = students.splice(targetStudent, 1)
        console.log(`deleted ${deleteStudent[deleteStudent.length - 1].name} id: ${deleteStudent[deleteStudent.length - 1].id}`)
    } else {
        console.log("Student not found")
    }

}

addStudent("Asif", 24, 'AI')
console.log(students)
deleteStudent(101)
//addStudent("Rayhan", 24, 'AI')
//console.log(students)