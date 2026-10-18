// ex1
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;

const calculate = (a, b, operation) => {
    return operation(a, b)
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, subtract));
console.log(calculate(7, 3, add));


// 
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());



/////

function makeAccount(start) {
    let balance = start;

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        check() {
            return balance;
        }
    };
}

const acc1 = makeAccount(100);
const acc2 = makeAccount(500);

acc1.deposit(50);//150
console.log(acc1.check()); //150
console.log(acc2.check());//500
console.log(acc1.balance);//undefined ; because balance can't be detected outside scope

//

function createCounter(start) {
    let count = start;// initializes

    return function (step) {
        count += step;
        return count;
    };
}

const counterA = createCounter(5);
const counterB = createCounter(10);

console.log(counterA(2));//7
console.log(counterA(3));//10
console.log(counterB(1));//11
console.log(counterA(1));//11
console.log(counterB(2));//13