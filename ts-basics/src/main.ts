// // // Explicit Types
// // let x: string;

// // x = "Hello TypeScript!";

// // console.log("X : ", x);

// // console.log(typeof x);

// // // Implicit Types - Recommended
// // let y = 200;

// // console.log("Type of Y:", typeof y);

// // // Custom Type with 'type' keyword

// // type MyCustomType = string | number;

// // let x: MyCustomType;

// // x = "Twenty Three";

// // x = 23;

// // // TYPES IN TYPESCRIPT

// let varString: string;
// varString = "Hello World";

// let varBoolean: boolean;
// varBoolean = true;

// let varDate: Date;
// varDate = new Date("Dec 20, 2024");

// // let varArray: string[];
// let varArray: Array<string>;
// varArray = ["Monica", "Joey", "Chandler"];

// let varFunction: () => void;
// varFunction = () => console.log("Function - does not return");

// let varObject: { firstName: string; lastName: string };
// varObject = { firstName: "John", lastName: "Doe" };

// let varAny: any; // NOT RECOMMENDED
// varAny = "String Value";
// varAny = 101;
// varAny = true;
// varAny = [];
// varAny = {};
// varAny = () => {};

// let varUnknow: unknown; // Perform type-checking before any operation
// varUnknow = "Hello There";
// if (typeof varUnknow === "string") {
//   console.log("Length : ", varUnknow.length);
// }
// varUnknow = 201;
// varUnknow = true;

// let varUnion: string | number;
// varUnion = "Twenty";
// varUnion = 20;

// let varTuple: [string, number];
// varTuple = ["John Doe", 21];

// let varUndefined: string | null;
// varUndefined = null;
// varUndefined = "Hello There";

// function doSomething(): void {
//   console.log("Void function");
// }

// function throwError(): never {
//   throw new Error("Throwing the error");
// }

// // // Custom Types

// //// - type keyword
// //// - Classes
// //// - Interfaces

// type AgeType = string | number;

// //// Interface as a type
// interface Todo {
//   label: string;
//   status: boolean;
// }

// let todoCollection: Todo[] = [];
// todoCollection.push({ label: "Shopping", status: true });

// //// Classes as a type
// class Foo {}
// class Bar {}

// let foo: Foo = new Foo();
// let bar: Bar = new Bar();

// //// Classes

// class Person {
//   //// private name: string;
//   //// private age: number;

//   //// constructor(name: string, age: number) {
//   ////   this.name = name;
//   ////   this.age = age;
//   //// }

//   constructor(private name: string, private age: number) {}

//   public getDetails(): string {
//     return `Name : ${this.name} | Age : ${this.age}`;
//   }
// }

// class Student extends Person {
//   constructor(name: string, age: number, private studId: string) {
//     super(name, age);
//   }

//   // Method Overriding
//   getDetails() {
//     return `${super.getDetails()} | Student ID : ${this.studId}
//     `;
//   }
// }

// const personOne = new Student("Monica Geller", 21, "S001");
// const personTwo = new Student("Chandler Bing", 24, "S002");

// console.log(personOne.getDetails());
// console.log(personTwo.getDetails());

// // // Getter and Setter
// class Animal {
//   private _species!: string;
//   private static numberOfAnimals = 0;

//   constructor() {
//     Animal.numberOfAnimals += 1;
//   }

//   get species() {
//     return this._species;
//   }

//   set species(value: string) {
//     this._species = value;
//   }

//   static getTotalAnimals() {
//     return Animal.numberOfAnimals;
//   }
// }

// let bunny = new Animal();
// bunny.species = "Rabbit";
// console.log("Bunny Species is : ", bunny.species);

// let kitty = new Animal();
// kitty.species = "Cat";
// console.log("Kitty Species is : ", kitty.species);

// console.log("Total animals so far : ", Animal.getTotalAnimals());

//// ABSTRACT CLASSES

// abstract class Receipe {
//   abstract collectIngredients(): void;
//   abstract prepareTheReceipte(): void;
//   abstract cleanUp(): void;

//   execute() {
//     this.collectIngredients();
//     this.prepareTheReceipte();
//     this.cleanUp();
//   }
// }

// class Tea extends Receipe {
//   collectIngredients(): void {
//     console.log("Tea leafs, sugar, water, ginger");
//   }
//   prepareTheReceipte(): void {
//     console.log("Boil the water");
//     console.log("Add all ingredients");
//   }
//   cleanUp(): void {
//     console.log("Clean up all dishes and boiler");
//   }
// }

// const gingerTea = new Tea();
// gingerTea.execute();

// interface HasFormatter {
//   format: () => void;
// }

// class Paint implements HasFormatter {
//   format() {
//     console.log("Performs formatting");
//   }
// }

// // GENERICS
// function addAtBeginning(item: string, arr: Array<string>): Array<string> {
//   return [item, ...arr];
// }

// const modifedArray = addAtBeginning("Monica", ["Joey", "Rachel", "Chandler"]);
// console.log("Modified Array : ", modifedArray);

// // GENERIC FUNCTION
// function addAtBeginning<T>(item: T, arr: Array<T>): Array<T> {
//   return [item, ...arr];
// }

// const numberArray = addAtBeginning<number>(99, [98, 92, 89, 84]);
// console.log("Number Array : ", numberArray);

// const stringArray = addAtBeginning<string>("Monica", [
//   "Joey",
//   "Rachel",
//   "Chandler",
// ]);
// console.log("String Array : ", stringArray);

// // GENERIC CLASS

// class Stack<T> {
//   private items: Array<T> = [];

//   addItem(item: T) {
//     this.items.push(item);
//   }

//   getAllItems(): Array<T> {
//     return this.items;
//   }
// }

// let stringStack = new Stack<string>();
// stringStack.addItem("Monica");
// stringStack.addItem("Joey");
// console.log("String Stack : ", stringStack.getAllItems());

// let numberStack = new Stack<number>();
// numberStack.addItem(99);
// numberStack.addItem(101);
// numberStack.addItem(199);
// console.log("Number Stack : ", numberStack.getAllItems());

// interface ITodo {
//   label: string;
//   status: boolean;
// }

// let todoStack = new Stack<ITodo>();
// todoStack.addItem({ label: "Planting", status: true });
// todoStack.addItem({ label: "Insurance", status: false });
// console.log("Todo Stack : ", todoStack.getAllItems());

// // // GENERIC INTERFACE
// interface IResource<T, K> {
//   resourceName: T;
//   resourceLocation: K;
// }

// let serverOne: IResource<string, number> = {
//   resourceName: "Pune",
//   resourceLocation: 22.1,
// };

// // GENERIC CONSTRAINTS
// function getLength<T extends { length: number }>(item: T) {
//   return item.length;
// }

// interface IObject {
//   width: number;
//   length: number;
//   volume: number;
// }

// let obj: IObject = {
//   width: 8,
//   length: 10,
//   volume: 8 * 10,
// };

// console.log("Object Length : ", getLength<IObject>(obj));

// NAMED EXPORT (ANGULAR FRAMEWORK)

// import { add, square, getMyLuckyNumber } from "./utils/maths";
import * as maths from "./utils/maths";

import { getRoutine } from "./utils/fortune";

// // DEFAULT EXPORT (REACT LIB)
import Student from "./utils/fortune";

const joey = new Student("Joey", 23);
console.log("New Student : ", joey);

const result = maths.add(3, 4);
console.log("Result : ", result);

const squareOfFour = maths.square(4);
console.log("Square of Four :", squareOfFour);

console.log("Your lucky number today is " + maths.getMyLuckyNumber() + "!");
console.log("Your routine for today - ", getRoutine());
