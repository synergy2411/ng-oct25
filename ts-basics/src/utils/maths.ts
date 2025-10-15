const RANDOM_NUMBER = Math.round(Math.random() * 100);

const getMyLuckyNumber = () => RANDOM_NUMBER;

const add = (n1: number, n2: number) => n1 + n2;

const square = (num: number) => num ** 2;

export { add, square, getMyLuckyNumber };
