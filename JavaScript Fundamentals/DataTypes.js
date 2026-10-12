// 1. Number
let age = 23;
let percentage = 51.40;

console.log(age);
console.log(typeof age);          // number
console.log(typeof percentage);   // number

// 2. String
let name = "Gaurav";
let college = "JSCOE Pune";

console.log(name);
console.log(typeof name);         // string

// 3. Boolean
let isStudent = true;
let isPlaced = false;

console.log(isStudent);
console.log(typeof isStudent);    // boolean

// 4. Undefined
let salary;

console.log(salary);              // undefined
console.log(typeof salary);       // undefined

// 5. Null
let selectedJob = null;

console.log(selectedJob);         // null
console.log(typeof selectedJob);  // object (JavaScript quirk)

// 6. BigInt
let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);    // bigint

// 7. Symbol
let id = Symbol("userId");

console.log(id);
console.log(typeof id);           // symbol

// 8. Object
let student = {
    name: "Gaurav",
    age: 23,
    course: "MCA"
};

console.log(student);
console.log(typeof student);      // object

// 9. Array
let marks = [85, 90, 80];

console.log(marks);
console.log(typeof marks);        // object
console.log(Array.isArray(marks)); // true

// 10. Function
function greet() {
    console.log("Hello Gaurav!");
}

greet();
console.log(typeof greet);        // function