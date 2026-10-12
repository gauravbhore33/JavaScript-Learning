// ==================================================
// 1. FUNCTION DECLARATION
// ==================================================

console.log("\n===== FUNCTION DECLARATION =====");

function greet() {
    console.log("Hello, Gaurav!");
}

greet();


// ==================================================
// 2. PARAMETERS AND ARGUMENTS
// ==================================================

console.log("\n===== PARAMETERS AND ARGUMENTS =====");

function add(a, b) {
    console.log("Sum:", a + b);
}

add(10, 20);
add(50, 30);


// ==================================================
// 3. RETURN STATEMENT
// ==================================================

console.log("\n===== RETURN STATEMENT =====");

function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);

console.log("Multiplication:", result);


// ==================================================
// 4. DEFAULT PARAMETERS
// ==================================================

console.log("\n===== DEFAULT PARAMETERS =====");

function welcome(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}

welcome("Gaurav");
welcome();


// ==================================================
// 5. FUNCTION EXPRESSION
// ==================================================

console.log("\n===== FUNCTION EXPRESSION =====");

const subtract = function (a, b) {
    return a - b;
};

console.log("Difference:", subtract(20, 8));


// ==================================================
// 6. ARROW FUNCTIONS
// ==================================================

console.log("\n===== ARROW FUNCTIONS =====");

// Normal arrow function
const divide = (a, b) => {
    return a / b;
};

console.log("Division:", divide(20, 4));

// Short arrow function with implicit return
const square = n => n * n;

console.log("Square:", square(5));

// Multiple parameters
const calculateSum = (a, b) => a + b;

console.log("Sum:", calculateSum(15, 25));


// ==================================================
// 7. REST PARAMETERS
// ==================================================

console.log("\n===== REST PARAMETERS =====");

function sumAll(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(sumAll(10, 20));
console.log(sumAll(10, 20, 30, 40));
console.log(sumAll(1, 2, 3, 4, 5));


// ==================================================
// 8. CALLBACK FUNCTION
// ==================================================

console.log("\n===== CALLBACK FUNCTION =====");

function calculate(a, b, operation) {
    return operation(a, b);
}

function addition(a, b) {
    return a + b;
}

function multiplication(a, b) {
    return a * b;
}

console.log(calculate(10, 5, addition));
console.log(calculate(10, 5, multiplication));

// Callback using an arrow function
console.log(calculate(10, 5, (a, b) => a - b));


// ==================================================
// 9. GLOBAL SCOPE
// ==================================================

console.log("\n===== GLOBAL SCOPE =====");

let globalMessage = "I am global";

function showGlobal() {
    console.log(globalMessage);
}

showGlobal();
console.log(globalMessage);


// ==================================================
// 10. FUNCTION SCOPE
// ==================================================

console.log("\n===== FUNCTION SCOPE =====");

function testFunctionScope() {
    var functionVariable = "Inside function";
    let localVariable = "Local variable";

    console.log(functionVariable);
    console.log(localVariable);
}

testFunctionScope();

// These would cause ReferenceError if uncommented:
// console.log(functionVariable);
// console.log(localVariable);


// ==================================================
// 11. BLOCK SCOPE: LET AND CONST
// ==================================================

console.log("\n===== BLOCK SCOPE =====");

if (true) {
    let blockLet = "I belong to this block";
    const blockConst = "I also belong to this block";

    console.log(blockLet);
    console.log(blockConst);
}

// These would cause ReferenceError if uncommented:
// console.log(blockLet);
// console.log(blockConst);


// ==================================================
// 12. VAR VS LET VS CONST
// ==================================================

console.log("\n===== VAR VS LET VS CONST =====");

if (true) {
    var varVariable = "var is function-scoped";
    let letVariable = "let is block-scoped";
    const constVariable = "const is block-scoped";

    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
}

console.log(varVariable);

// These would cause ReferenceError if uncommented:
// console.log(letVariable);
// console.log(constVariable);


// ==================================================
// 13. LEXICAL SCOPE
// ==================================================

console.log("\n===== LEXICAL SCOPE =====");

function outerFunction() {
    let outerMessage = "Hello from outer function";

    function innerFunction() {
        console.log(outerMessage);
    }

    innerFunction();
}

outerFunction();


// ==================================================
// 14. CLOSURE
// ==================================================

console.log("\n===== CLOSURE =====");

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


// ==================================================
// 15. HOISTING
// ==================================================

console.log("\n===== HOISTING =====");

// var is hoisted and initialized with undefined
console.log(hoistedVar); // undefined

var hoistedVar = 100;

// Function declarations can be called before their definition
sayHello();

function sayHello() {
    console.log("Hello from a hoisted function!");
}

// let and const cannot be accessed before initialization.
// This would cause ReferenceError:
// console.log(hoistedLet);
// let hoistedLet = 200;