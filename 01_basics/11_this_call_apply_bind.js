const user = {
    name: "Alex",// property

    greet() {
        console.log(this.name);
    }
}; // it's actually a object; this inside an object

user.greet();


//
const user2 = {
    name: "Al Amin",

    greet() {
        console.log(this.name);
    }
};

const sayHello = user2.greet;

sayHello(); // undefined; because direct fucntion call not a method call; 



const user3 = {
    name: "ASF",
    greet: () => {
        console.log(this.name); // here in arrow function it checks only in the scope not outside  of the scope.
    }
};

user3.greet();// undefined



// exercise 1
const user4 = {
    name: "Alex",

    greet() {
        return `Hello, ${this.name}!`;
    }
};

const greetUser = user4.greet.bind(user);
console.log(user4.greet());
console.log(greetUser())



//

const person = {
    name: "Sara",
    sayName() { console.log(this.name); }
};

setTimeout(person.sayName, 100);               // wrong this, no "Sara"
setTimeout(person.sayName.bind(person), 100);  // "Sara"