// 1. Arithmetic Operators
let a = 20;
let b = 6;

console.log("Addition:", a + b);       // 26
console.log("Subtraction:", a - b);    // 14
console.log("Multiplication:", a * b); // 120
console.log("Division:", a / b);       // 3.333...
console.log("Remainder:", a % b);      // 2
console.log("Exponent:", a ** b);      // 64000000

// 2. Assignment Operators
let x = 10;

x += 5;
console.log("After +=:", x);  // 15

x -= 3;
console.log("After -=:", x);  // 12

x *= 2;
console.log("After *=:", x);  // 24

x /= 4;
console.log("After /=:", x);  // 6

x %= 4;
console.log("After %=:", x);  // 2

// 3. Comparison Operators
let num1 = 20;
let num2 = 10;

console.log("Greater than:", num1 > num2);       // true
console.log("Less than:", num1 < num2);          // false
console.log("Greater/equal:", num1 >= num2);     // true
console.log("Less/equal:", num1 <= num2);        // false
console.log("Equal:", num1 === num2);            // false
console.log("Not equal:", num1 !== num2);        // true

// 4. == vs ===
console.log(10 == "10");   // true: type conversion
console.log(10 === "10");  // false: different types

// 5. Logical Operators
let age = 23;
let hasID = true;

console.log(age >= 18 && hasID); // true (AND)
console.log(age < 18 || hasID);  // true (OR)
console.log(!hasID);             // false (NOT)

// 6. Increment and Decrement
let count = 5;

console.log("Post-increment:", count++); // 5
console.log("After increment:", count);  // 6

console.log("Pre-increment:", ++count);   // 7

console.log("Post-decrement:", count--); // 7
console.log("After decrement:", count);  // 6

console.log("Pre-decrement:", --count);   // 5

// 7. typeof Operator
let name = "Gaurav";
let marks = 85;
let isStudent = true;

console.log(typeof name);      // string
console.log(typeof marks);     // number
console.log(typeof isStudent); // boolean

// 8. Ternary Operator
let result = marks >= 40 ? "Pass" : "Fail";

console.log("Result:", result); // Pass