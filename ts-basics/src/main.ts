// // Explicit Types
// let x: string;

// x = "Hello TypeScript!";

// console.log("X : ", x);

// console.log(typeof x);

// // Implicit Types - Recommended
// let y = 200;

// console.log("Type of Y:", typeof y);

// // Custom Type with 'type' keyword

// type MyCustomType = string | number;

// let x: MyCustomType;

// x = "Twenty Three";

// x = 23;

// // TYPES IN TYPESCRIPT

let varString: string;
varString = "Hello World";

let varBoolean: boolean;
varBoolean = true;

let varDate: Date;
varDate = new Date("Dec 20, 2024");

// let varArray: string[];
let varArray: Array<string>;
varArray = ["Monica", "Joey", "Chandler"];

let varFunction: () => void;
varFunction = () => console.log("Function - does not return");

let varObject: { firstName: string; lastName: string };
varObject = { firstName: "John", lastName: "Doe" };

let varAny: any; // NOT RECOMMENDED
varAny = "String Value";
varAny = 101;
varAny = true;
varAny = [];
varAny = {};
varAny = () => {};

let varUnknow: unknown; // Perform type-checking before any operation
varUnknow = "Hello There";
if (typeof varUnknow === "string") {
  console.log("Length : ", varUnknow.length);
}
varUnknow = 201;
varUnknow = true;

let varUnion: string | number;
varUnion = "Twenty";
varUnion = 20;

let varTuple: [string, number];
varTuple = ["John Doe", 21];

let varUndefined: string | null;
varUndefined = null;
varUndefined = "Hello There";

function doSomething(): void {
  console.log("Void function");
}

function throwError(): never {
  throw new Error("Throwing the error");
}

// // Custom Types

//// - type keyword
//// - Classes
//// - Interfaces

type AgeType = string | number;

//// Interface as a type
interface Todo {
  label: string;
  status: boolean;
}

let todoCollection: Todo[] = [];
todoCollection.push({ label: "Shopping", status: true });

//// Classes as a type
class Foo {}
class Bar {}

let foo: Foo = new Foo();
let bar: Bar = new Bar();
