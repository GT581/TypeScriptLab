/**
 * Interfaces and Type Aliases in TypeScript
 * 
 * Interfaces define contracts for your objects, while
 * type aliases create new names for types.
 * Run this example with: npx ts-node examples/03-interfaces-and-types.ts
 */

export {};

// Basic Interface
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const person1: Person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30
};
console.log('Basic interface:', person1);

// Optional Properties
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional property, ?
}

const product1: Product = { id: 1, name: 'Laptop', price: 999 };
const product2: Product = { id: 2, name: 'Phone', price: 699, description: 'Latest model' };
console.log('Optional properties:', product1, product2);

// Readonly Properties
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// Error: Cannot assign to 'x' because it is a read-only property
// point.x = 5;
console.log('Readonly properties:', point);

// Extending Interfaces
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

const dog: Dog = {
  name: 'Buddy',
  breed: 'German Shepherd',
  bark: function() { console.log('Woof!'); }
};
console.log('Extended interface:', dog);
dog.bark();

// Implementing Interfaces in Classes
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;
  
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  start() {
    console.log(`Starting ${this.make} ${this.model}...`);
  }
}

const myCar = new Car('BMW', 'M3', 2004);
console.log('Class implementing interface:', myCar);
myCar.start();

// Interface for Function Types
interface MathFunc {
  (x: number, y: number): number;
}

const addFunc: MathFunc = (x, y) => x + y;
const subtract: MathFunc = (x, y) => x - y;
console.log('Interface for functions:', addFunc(10, 5), subtract(10, 5));

// Index Signatures
interface Dictionary {
  [key: string]: any;
}

const dict: Dictionary = {
  name: 'John',
  age: 30,
  isActive: true
};
console.log('Index signature:', dict);

// Type Alias
type ID = string | number;

function printID(id: ID) {
  console.log(`ID: ${id}`);
}

printID(101);
printID("A-202");

// Intersection Types
type Employee = {
  id: number;
  name: string;
};

type Manager = {
  department: string;
  level: number;
};

type ManagerEmployee = Employee & Manager;

const manager: ManagerEmployee = {
  id: 1,
  name: 'John',
  department: 'Engineering',
  level: 2
};
console.log('Intersection type:', manager);

// Union Types
type Status = 'active' | 'inactive' | 'pending';

function setStatus(status: Status) {
  console.log(`Status set to: ${status}`);
}

setStatus('active');
// Error: Argument of type '"disabled"' is not assignable to parameter of type 'Status'
// setStatus('disabled');

// Literal Types
type Direction = 'North' | 'South' | 'East' | 'West';
const direction: Direction = 'North';
console.log('Literal type:', direction);

// Type Guards
type Pet = Dog | { name: string, meow(): void };

function makeSound(pet: Pet) {
  if ('bark' in pet) {
    pet.bark();
  } else {
    pet.meow();
  }
}

const cat = {
  name: 'Whiskers',
  meow: function() { console.log('Meow!'); }
};

console.log('Type guards:');
makeSound(dog);
makeSound(cat);

// Mapped Types
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type RequiredPerson = {
  name: string;
  age: number;
  email: string;
};

type OptionalPerson = Optional<RequiredPerson>;

const partialPerson: OptionalPerson = { name: 'Alice' };
console.log('Mapped type:', partialPerson);

// Template Literal Type
type CSSUnit = 'px' | 'em' | 'rem' | '%';
type CSSValue = `${number}${CSSUnit}`;

const fontSize: CSSValue = '16px';
const margin: CSSValue = '2rem';
console.log('Template literal types:', fontSize, margin);

console.log('\nEnd of Interfaces and Types Example'); 