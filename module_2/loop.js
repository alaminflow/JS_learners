// modern loops
// for of , for in

let techStack = ['js', 'TS', 'node', 'react', 'psql']

for (let tech of techStack) {
    console.log("Learning:", tech)
}
for (let tech in techStack) {
    console.log("Skill:", tech)
}


let obj = {
    name: "Mr. x",
    age: 10,
    address: 'Dhaka'
}

for (let element in obj) {
    console.log(element, "->", obj[element])
}

// for (let element of obj) {
//     console.log(element, "->", obj[element])
// } // obj is not iterable you need to use for in 



// break

let marks = 50

for (let i = marks; i <= 100; i++) {
    if (i > 60) {
        break
    }
    console.log(i)
}

for (let i = 1; i < 15; i++) {
    if (i % 2 != 0) {
        continue
    }
    console.log(i)
}