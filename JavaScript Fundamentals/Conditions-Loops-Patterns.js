// ==================================================
// 1. IF, ELSE IF, ELSE
// ==================================================

console.log("\n===== IF ELSE =====");

let age = 23;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// Else if
let marks = 85;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Nested if
let username = "Gaurav";
let password = 1234;

if (username === "Gaurav") {
    if (password === 1234) {
        console.log("Login successful");
    } else {
        console.log("Incorrect password");
    }
} else {
    console.log("User not found");
}


// ==================================================
// 2. SWITCH STATEMENT
// ==================================================

console.log("\n===== SWITCH =====");

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


// ==================================================
// 3. FOR LOOP
// ==================================================

console.log("\n===== FOR LOOP =====");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// ==================================================
// 4. WHILE LOOP
// ==================================================

console.log("\n===== WHILE LOOP =====");

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


// ==================================================
// 5. DO-WHILE LOOP
// ==================================================

console.log("\n===== DO-WHILE LOOP =====");

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);


// ==================================================
// 6. FOR...OF LOOP
// ==================================================

console.log("\n===== FOR...OF LOOP =====");

let numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
    console.log(number);
}


// ==================================================
// 7. FOR...IN LOOP
// ==================================================

console.log("\n===== FOR...IN LOOP =====");

let student = {
    name: "Gaurav",
    age: 23,
    course: "MCA"
};

for (let key in student) {
    console.log(key + ":", student[key]);
}


// ==================================================
// 8. BREAK AND CONTINUE
// ==================================================

console.log("\n===== BREAK =====");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

console.log("\n===== CONTINUE =====");

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}


// ==================================================
// 9. PATTERN 1: SQUARE STAR PATTERN
// ==================================================

console.log("\n===== SQUARE PATTERN =====");

for (let i = 1; i <= 4; i++) {
    let row = "";

    for (let j = 1; j <= 4; j++) {
        row += "* ";
    }

    console.log(row);
}


// ==================================================
// 10. PATTERN 2: RIGHT-ANGLED TRIANGLE
// ==================================================

console.log("\n===== RIGHT TRIANGLE =====");

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}


// ==================================================
// 11. PATTERN 3: INVERTED TRIANGLE
// ==================================================

console.log("\n===== INVERTED TRIANGLE =====");

for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}


// ==================================================
// 12. PATTERN 4: NUMBER TRIANGLE
// ==================================================

console.log("\n===== NUMBER TRIANGLE =====");

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }

    console.log(row);
}


// ==================================================
// 13. PATTERN 5: REPEATED NUMBER TRIANGLE
// ==================================================

console.log("\n===== REPEATED NUMBER TRIANGLE =====");

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += i + " ";
    }

    console.log(row);
}


// ==================================================
// 14. PATTERN 6: PYRAMID
// ==================================================

console.log("\n===== PYRAMID =====");

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let row = "";

    for (let j = 1; j <= rows - i; j++) {
        row += " ";
    }

    for (let k = 1; k <= (2 * i) - 1; k++) {
        row += "*";
    }

    console.log(row);
}


// ==================================================
// 15. PATTERN 7: FLOYD'S TRIANGLE
// ==================================================

console.log("\n===== FLOYD'S TRIANGLE =====");

let num = 1;

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += num + " ";
        num++;
    }

    console.log(row);
}


// ==================================================
// 16. PATTERN 8: ZERO-ONE TRIANGLE
// ==================================================

console.log("\n===== ZERO-ONE TRIANGLE =====");

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        if ((i + j) % 2 === 0) {
            row += "1 ";
        } else {
            row += "0 ";
        }
    }

    console.log(row);
}