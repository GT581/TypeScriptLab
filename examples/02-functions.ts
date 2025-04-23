/**
 * Functions in TypeScript
 * 
 * Examples of adding type annotations to functions for better tooling.
 * Run this example with: npx ts-node examples/02-functions.ts
 */

export {};

// Basic function with type annotations
function add(x: number, y: number): number {
  return x + y;
}
console.log('Basic function:', add(5, 3));

// Function with optional parameter
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return `${firstName} ${lastName}`;
  }
  return firstName;
}
console.log('Optional parameter:', buildName('John'), buildName('John', 'Smith'));

// Function with default parameter
function greet(name: string, greeting: string = 'Hello'): string {
  return `${greeting}, ${name}!`;
}
console.log('Default parameter:', greet('John'), greet('Bob', 'Hi'));

// Rest parameters
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log('Rest parameters:', sumAll(1, 2, 3, 4, 5));

// Function type expressions
let combineStrings: (a: string, b: string) => string;
combineStrings = function(a: string, b: string) {
  return a + b;
};
console.log('Function type expression:', combineStrings('Hello, ', 'World!'));

// Function with object parameter
function printCoordinates(point: { x: number; y: number }): void {
  console.log(`Coordinates: (${point.x}, ${point.y})`);
}
printCoordinates({ x: 10, y: 20 });

// Arrow functions
const multiply = (a: number, b: number): number => a * b;
console.log('Arrow function:', multiply(4, 5));

// Function overloading
function parseInput(input: string): string;
function parseInput(input: number): number;
function parseInput(input: boolean): boolean;
function parseInput(input: string | number | boolean): string | number | boolean {
  return input;
}
console.log('Function overloading:', 
  parseInput('hello'), 
  parseInput(42), 
  parseInput(true)
);

// Generic function
function identity<T>(arg: T): T {
  return arg;
}
console.log('Generic function:', 
  identity<string>('TypeScript'),
  identity<number>(100)
);

// Generic function with constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user1 = { name: 'John', age: 30 };
console.log('Generic function with constraints:', 
  getProperty(user1, 'name'),
  getProperty(user1, 'age')
);

// Function with this parameter
interface User {
  id: number;
  name: string;
  greet(this: User): string;
}

const user: User = {
  id: 1,
  name: 'John',
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};
console.log('Function with this parameter:', user.greet());

// Callable interface
interface SearchFunc {
  (source: string, subString: string): boolean;
}
const mySearch: SearchFunc = function(source, subString) {
  return source.includes(subString);
};
console.log('Callable interface:', mySearch('TypeScript is great', 'great'));

// Function returning a promise
async function fetchData(url: string): Promise<string> {
  // In a real scenario, this would use fetch or axios
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Data from ${url}`), 100);
  });
}

// Using the async function with an IIFE (Immediately Invoked Function Expression)
(async () => {
  const result = await fetchData('https://example.com/api');
  console.log('Async function result:', result);
})();

console.log('\nEnd of Functions Example'); 