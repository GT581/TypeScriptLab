/**
 * Basic Types in TypeScript
 * 
 * Examples of several basic types that help catch errors during compilation.
 * Run this example with: npx ts-node examples/01-basic-types.ts
 */

export {};

// Boolean type
const isActive: boolean = true;
console.log('Boolean example:', isActive);

// Number type (includes integer, float, hex, binary, octal)
const integer: number = 10;
const decimal: number = 10.1;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
console.log('Number examples:', integer, decimal, hex, binary, octal);

// String type
const firstName: string = 'John';
const lastName: string = "Smith";
const greeting: string = `Hello, my name is ${firstName} ${lastName}`;
console.log('String example:', greeting);

// Array types (two syntaxes)
const listOfNumbers: number[] = [1, 2, 3];
const listOfStrings: Array<string> = ['apple', 'banana', 'cherry'];
console.log('Array examples:', listOfNumbers, listOfStrings);

// Tuple type
const coordinates: [number, number] = [10, 20];
const nameAndAge: [string, number] = ['Alice', 30];
console.log('Tuple examples:', coordinates, nameAndAge);

// Enum type
enum Color {
  Red,
  Green,
  Blue
}
const favoriteColor: Color = Color.Blue;
console.log('Enum example:', favoriteColor, Color[favoriteColor]);

// Any type - avoid when possible, defeats TypeScript's benefits
let dynamicValue: any = 4;
dynamicValue = 'a string';
dynamicValue = true;
console.log('Any example:', dynamicValue);

// Void type - absence of a type, used for functions with no return value
function logMessage(message: string): void {
  console.log(message);
}
logMessage('Void example: This function returns nothing');

// Null and Undefined types
const nullValue: null = null;
const undefinedValue: undefined = undefined;
console.log('Null and Undefined examples:', nullValue, undefinedValue);

// Never type - for functions that never return (throw error or infinite loop)
function throwError(message: string): never {
  throw new Error(message);
}

// Object type
const person: object = {
  name: 'John',
  age: 25
};
console.log('Object example:', person);

// Type assertions - two syntaxes
let someValue: any = 'This is a string';
let strLength1: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length; // This syntax cannot be used in TSX
console.log('Type assertion examples:', strLength1, strLength2);

// Unknown type - safer alternative to any
let userInput: unknown;
userInput = 5;
userInput = 'Hello';

// Need to verify type before using unknown
if (typeof userInput === 'string') {
  console.log('Unknown example (as string):', userInput.toUpperCase());
}

// BigInt (ES2020)
const bigNumber: bigint = 9007199254740991n;
console.log('BigInt example:', bigNumber);

// Symbol - unique and immutable primitive
const sym1: symbol = Symbol('key');
const sym2: symbol = Symbol('key');
console.log('Symbol example:', sym1 === sym2); // Always false

console.log('\nEnd of Basic Types Example'); 