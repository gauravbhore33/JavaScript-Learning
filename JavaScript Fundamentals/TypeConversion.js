// 1. Implicit Type Conversion (Automatic)

// String + Number = String
console.log("10" + 5);       // "105"
console.log("Hello" + 10);   // "Hello10"

// String - Number = Number
console.log("10" - 5);       // 5

// String * Number = Number
console.log("10" * 2);       // 20

// String / Number = Number
console.log("20" / 4);       // 5

// Boolean + Number
console.log(true + 5);       // 6
console.log(false + 5);      // 5

// 2. Explicit Type Conversion (Manual)

// String to Number
let strNumber = "100";
console.log(Number(strNumber));       // 100
console.log(typeof Number(strNumber)); // number

// Number to String
let num = 500;
console.log(String(num));             // "500"
console.log(typeof String(num));      // string

// String to Integer
console.log(parseInt("25.89"));       // 25
console.log(parseInt("100px"));       // 100

// String to Decimal
console.log(parseFloat("25.89"));     // 25.89
console.log(parseFloat("12.5kg"));    // 12.5

// Invalid numeric conversion
console.log(Number("hello"));         // NaN
console.log(Number(""));              // 0
console.log(Number("123abc"));        // NaN

// 3. Boolean Conversion

console.log(Boolean(1));              // true
console.log(Boolean(0));              // false
console.log(Boolean("Gaurav"));       // true
console.log(Boolean(""));             // false
console.log(Boolean("false"));        // true
console.log(Boolean("0"));            // true
console.log(Boolean(null));           // false
console.log(Boolean(undefined));      // false

// 4. Equality and Type Conversion

console.log(10 == "10");              // true
console.log(10 === "10");             // false

console.log(null == undefined);       // true
console.log(null === undefined);      // false

// 5. NaN

let result = Number("abc");

console.log(result);                  // NaN
console.log(typeof result);           // number
console.log(Number.isNaN(result));    // true

// 6. Practical Example: Calculate Total

let price = "250";
let quantity = "3";

let total = Number(price) * Number(quantity);

console.log("Total:", total);          // 750
console.log(typeof total);             // number