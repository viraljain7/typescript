> [!IMPORTANT]
>
> # Typescript Notes

### Introduction

> convert typescript file into javascript

```js
tsc filename.ts
```

> Typescript file

```js
const anExampleVariable: string = "Hello World";
console.log(anExampleVariable);
```

> Javascript file

```js
"use strict";
const anExampleVariable = "Hello World";
console.log(anExampleVariable);
```

### Variable

```tsx
let rollNo: number = 34;

let name: string = "viral";

let isAdmin: boolean = true;
```

### Dont use `any`

```js
let object: any = {
  name: "viral",
};
```

### Function

```tsx
function addFive(num: number): number {
  return num + 5;
}

let addSeven = (num: number): number => {
  return num + 7;
};
```

#

> ```js
> function getUppercase(str: string): string {
>   return str.toUpperCase();
> }
> ```
>
> ```js
> let getLowerCase = (str: string): string => {
>   return str.toLocaleLowerCase();
> };
> ```

#

```js
function isNumGreaterThanFive(num: number): boolean {
  return num > 5;
}

let isNumLessThanFive = (num: number): boolean => {
  return num < 5;
};
```

#

```js
function loginUser(name: string, pass: string, isAdmin: boolean): void {}
```

#

```js
const heros = ["Dhoni", "Virat", "Rohit", "Yuvraj", "Gautam"];

const print = heros.map((hero: string): string => {
  return `${hero} is in my cricket team`;
});
```

#

```js
function fn(x: string | number): void {
  //do something
}

function fail(msg: string): never {
  throw new Error(msg);
}
```
