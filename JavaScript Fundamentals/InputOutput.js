// ==========================================
// 1. OUTPUT IN JAVASCRIPT
// ==========================================

console.log("Hello, Gaurav!");

let name = "Gaurav";
let age = 23;

console.log(name);
console.log(age);

console.log("Name:", name, "Age:", age);

console.log(`My name is ${name} and I am ${age} years old.`);

console.warn("This is a warning!");
console.error("This is an error!");

console.table([
    { name: "Gaurav", marks: 85 },
    { name: "Rahul", marks: 90 }
]);


// ==========================================
// 2. INPUT IN JAVASCRIPT USING NODE.JS
// ==========================================

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// ==========================================
// EXAMPLE 1: INPUT NAME AND AGE
// ==========================================

rl.question("Enter your name: ", (userName) => {
    rl.question("Enter your age: ", (userAge) => {

        console.log("\n--- Student Details ---");
        console.log(`Hello, ${userName}!`);
        console.log(`Your age is ${userAge}.`);

        // ==========================================
        // EXAMPLE 2: INPUT TWO NUMBERS AND ADD
        // ==========================================

        rl.question("\nEnter first number: ", (input1) => {
            rl.question("Enter second number: ", (input2) => {

                let a = Number(input1);
                let b = Number(input2);

                console.log("\n--- Addition Result ---");
                console.log("First number:", a);
                console.log("Second number:", b);
                console.log("Sum:", a + b);

                rl.close();
            });
        });
    });
});