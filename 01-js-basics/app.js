// var marks = [99, 97, 95, 92, 100];

// // Imperative
// var total = 0;

// for (var i = 0; i < marks.length; i++) {
//   total += marks[i];
// }

// console.log("Total Marks : ", total);

// // Declarative - Approach 01
// var sum = marks.reduce((a, b) => a + b, 0);

// console.log("Total : ", sum);

// // Declarative - Approach 02
// var totalSum = 0;

// // Enhanced For Loop
// for (let mark of marks) {
//   totalSum += mark;
// }

// console.log("Total Sum : ", totalSum);

// // JavaScript is Dynamic / loosly typed

// var x = "Hello World";

// console.log(typeof x); // string

// x = 100;

// console.log(typeof x); // number

// x = true;

// console.log(typeof x);

// x = {
//   a: "B",
// };

// console.log(typeof x);

// x = function () {
//   console.log("Do something");
// };

// console.log(x);

// // Asynchronous JavaScript

// console.log("Start the program");

// setTimeout(function () {
//   console.log("Timer called");
// }, 0);

// Promise.resolve().then(() => console.log("Promise Resolved"));

// console.log("End the program");

// // ARROW FUNCTION

// // Oneliner - without flower bracket
// var add = (n1, n2) => n1 + n2;
// console.log("Sum : ", add(4, 5));

// // More than one line - With flower bracket and return keyword
// var square = (num) => {
//   console.log("Finding the Sqaure of : ", num);
//   return "The Square of the number is " + num ** 2;
// };

// console.log(square(4));

// // Arrow function borrow 'this' keyword from surrounded context
// var user = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName: function () {
//     // return this.firstName + " " + this.lastName;
//     // var that = this;
//     // return function () {
//     //   return that.firstName + " " + that.lastName;
//     // };
//     return () => this.firstName + " - " + this.lastName;
//   },
// };

// var nestedFn = user.getFullName();

// console.log("Full Name : ", nestedFn());

// // Don't have 'arguments' keyword

// var doSomething = () => {
//   console.log(arguments);
// };

// doSomething("john@test.com", "jenny@test.com");

// // Can't called with 'new' operator
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// var john = new Person("John Doe", 21);
// console.log(john);

// var Student = (studId, studName) => {
//   this.studId = studId;
//   this.studName = studName;
// };
// var newStudent = new Student("S001", "John Doe");
// console.log(newStudent);

// // BLOCK SCOPING - restricts to the nearest curly braces

// function doSomething(arr) {
//   // LOAD = undefined
//   // FLASH = undefined
//   if (arr.length > 2) {
//     let LOAD = "LOADING...";
//     console.log(FLASH); // undefined
//   } else {
//     let FLASH = "FLASHING...";
//   }
// }

// doSomething([2, 3, 4, 5, 5]);

// // CONTANTS - Can't be changed
// const USERNAME = "John Doe";

// USERNAME = "Jenny Doe";

// const user = {
//   name: "John",
// };

// user.name = "Jenny";

// console.log(user.name); // ?

// user = {
//   name: "Ross",
// };

// const friends = ["Ross", "Monica", "Chandler", "Joey"];

// // Mutable Change
// friends.push("Rachel");

// console.log(friends);

// // Immutable Change
// friends = ["Ross", "Monica", "Chandler", "Joey", "Rachel"];

// // REST OPERATOR (...)

// function print(email, isAdmin, ...args) {
//   console.log(args[0]);
// }

// print("john@test.com", true, 21);
// print("john@test.com", true);
// print("john@test.com");

// // SPREAD OPERATOR (...)

// let marks = [99, 97, 94];

// let moreMarks = [91, 100, 85, ...marks];

// console.log(moreMarks[3]); // ?

// let userA = {
//   name: "A",
//   company: "XYZ Inc",
//   address: {
//     street: "201 Main Road",
//     city: "Pune",
//   },
// };

// let userB = {
//   ...userA,
//   name: "B",
// };

// userA.address.city = "Mumbai";

// console.log(userB);

// let a = 10;
// let b = 20;

// [b, a] = [a, b];

// console.log(a, b); // ?

// function doSomething(email, isAdmin, age) {
//   console.log(email, isAdmin, age);
// }

// let user = ["john@test", true, 21];

// doSomething(...user);

// // DESTRUCTURING

// let employeeOne = {
//   name: "Monica Geller",
//   age: 21,
//   company: "XYZ Inc",
//   address: "201 Main Road, Wakad, Pune",
// };

// let {
//   name: e1_name,
//   age: e1_age,
//   company: e1_company,
//   address: e1_address,
// } = employeeOne;

// let employeeTwo = {
//   name: "Rachel Greens",
//   age: 22,
//   company: "ABC Inc",
//   address: "199, Marathahalli Road",
// };

// let { company: e2_company, name: e2_name, age: e2_age } = employeeTwo;

// console.log("Employee Name : ", e2_name);
// console.log("Age : ", e2_age);

// let friends = ["Monica", "Ross", "Joey", "Rachel"];

// let [f3, f4, f5] = friends;

// console.log(f3, f5); // ?

// let student = {
//   studId: "S001",
//   studName: "Chandler Bing",
//   address: {
//     street: "201, Main Road",
//     city: "Pune",
//   },
//   friends: ["Monica", "Ross", "Rachel"],
// };

// let {
//   studId,
//   studName,
//   address: { street, city },
//   friends: [friend1, friend2, friend3],
// } = student;

// console.log(studId, studName, street, city, friend1, friend2, friend3);

// let users = [
//   { name: "Monica", age: 21 },
//   { name: "Ross", age: 22 },
//   { name: "Rachel", age: 23 },
//   { name: "Jack", age: 24 },
// ];

// let [
//   { name: u1_name, age: u1_age },
//   { name: u2_name, age: u2_age },
//   { name: u3_name, age: u3_age },
//   { name: u4_name, age: u4_age },
// ] = users;

// console.log(u3_name, u3_age);

// let [userOne, userTwo, userThree, userFour] = users;

// console.log(userOne.name, userOne.age);

// // TEMPLATE LITERALS - " " | ' ' | ` ` (back tick)
// // - Embed variables within string without (+)
// // - Multiline string without (\n)

// let username = "John Doe";
// let age = 21;

// let greet = "Hi from " + username + ", \n" + "I'm " + age + " years old!";
// console.log(greet);

// let greetAgain = `Hello from ${username},
// I'm ${age} year old.`;
// console.log(greetAgain);

// // DEFAULT PARAMETER

// function getLength(arr = []) {
//   //   arr = arr || [];      // Bad Practice - Trying to mutate the supplied argument
//   return arr.length;
// }

// console.log("Length : ", getLength([, 2, 3, 4, 5]));
// console.log("Length : ", getLength());

// // ASYNCHRONOUS PROGRAMMING

// function longRunningOperation(reqId, cb) {
//   setTimeout(() => {
//     console.log("Running the operation for Request - ", reqId);
//     cb();
//   }, 2000);
// }

// function webRequest(req) {
//   console.log("Start");
//   longRunningOperation(req.id, function () {
//     console.log("End");
//   });
// }

// webRequest({ id: 101 });
// webRequest({ id: 102 });

// OUTPUT :
// - Start 101
// - ENd 101
// - Start 102
// - End 102
// - after 2 seconds Op 101
// - after 2 seconds Op 102

// // PROMISE

// Promise Builder

// function buildPromise() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ message: "success" });
//       // reject(new Error("Something went wrong"));
//     }, 2000);
//   });
//   return promise;
// }

// Promise Consumer
// - then...catch
// - async...await

// async function consumePromise() {
//   try {
//     const response = await buildPromise();
//     console.log("RESPONSE : ", response);
//   } catch (err) {
//     console.error(err);
//   }
// }

// function consumePromise() {
//   buildPromise()
//     .then((response) => {
//       console.log("FIRST THEN RESPONSE : ", response);
//       return response.message;
//     })
//     .then((prevMessage) => {
//       console.log("SECOND THEN RESPONSE : ", prevMessage);
//     })
//     .catch((error) => console.error("[ERROR CAUGHT]", error));
// }

// consumePromise();

// // PROMISE API METHODS

// // - all : All or None
// // - allSettled : Parallel Execution of All Promise including rejeceted
// // - race : will provide first settled promise (including both success and failure)
// // - any: will provide first successfuly settled promise
// // - resolve: immediatedly resolved the promise
// // - reject: immediatedly reject the promise

function promiseFactory(data, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), ms);
  });
}

const promiseOne = promiseFactory("First Package", 1000);
const promiseTwo = promiseFactory("Second Package", 1500);
const promiseThree = promiseFactory("Third Package", 2000);
const promiseFour = Promise.resolve("Resolved");
const promiseFive = Promise.reject(new Error("Something went wrong"));

const promiseArray = [
  promiseOne,
  promiseTwo,
  promiseThree,
  promiseFour,
  promiseFive,
];

// Promise.any(promiseArray)
//   .then((result) => {
//     console.log("[ANY]", result);
//   })
//   .catch(console.error);

// Promise.race(promiseArray)
//   .then((result) => {
//     console.log("[RACE]", result);
//   })
//   .catch(console.error);

Promise.allSettled(promiseArray)
  .then((result) => {
    console.log("[ALL SETTLED]", result);
  })
  .catch(console.error);

Promise.all(promiseArray)
  .then((result) => {
    console.log("[ALL]", result);
  })
  .catch(console.error);

let x = "20";
let y = 20;

console.log(x == y); // Loose type checking
console.log(x === y); // Strong type checking
