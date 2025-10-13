var marks = [99, 97, 95, 92, 100];

// Imperative
var total = 0;

for (var i = 0; i < marks.length; i++) {
  total += marks[i];
}

console.log("Total Marks : ", total);

// Declarative - Approach 01
var sum = marks.reduce((a, b) => a + b, 0);

console.log("Total : ", sum);

// Declarative - Approach 02
var totalSum = 0;

// Enhanced For Loop
for (let mark of marks) {
  totalSum += mark;
}

console.log("Total Sum : ", totalSum);

// JavaScript is Dynamic / loosly typed

var x = "Hello World";

console.log(typeof x); // string

x = 100;

console.log(typeof x); // number

x = true;

console.log(typeof x);

x = {
  a: "B",
};

console.log(typeof x);

x = function () {
  console.log("Do something");
};

console.log(x);

// Asynchronous JavaScript

console.log("Start the program");

setTimeout(function () {
  console.log("Timer called");
}, 0);

Promise.resolve().then(() => console.log("Promise Resolved"));

console.log("End the program");
