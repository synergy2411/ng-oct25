export const getRoutine = () => "Run 5 miles today!";

export interface IPerson {}

export const randomNumber = 101;

// DEFAULT EXPORT
export default class Person {
  constructor(private name: string, private age: number) {}

  getDetaild() {
    return `${this.name} - ${this.age}`;
  }
}
