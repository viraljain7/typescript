function addFive(num: number): number {
  return num + 5;
}

let addSeven = (num: number): number => {
  return num + 7;
};

function getUppercase(str: string): string {
  return str.toUpperCase();
}

let getLowerCase = (str: string): string => {
  return str.toLocaleLowerCase();
};
function isNumGreaterThanFive(num: number): boolean {
  return num > 5;
}

let isNumLessThanFive = (num: number): boolean => {
  return num < 5;
};

function loginUser(name: string, pass: string, isAdmin: boolean): void {}

const heros = ["Dhoni", "Virat", "Rohit", "Yuvraj", "Gautam"];

const print = heros.map((hero: string): string => {
  return `${hero} is in my cricket team`;
});

function fn(x: string | number): void {
  //do something
}

function fail(msg: string): never {
  throw new Error(msg);
}
export {};
