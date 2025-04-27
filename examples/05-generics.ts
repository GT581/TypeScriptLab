/**
 * Generics in TypeScript
 * 
 * Generics allow you to create reusable components that can work with a variety of types.
 * Run this example with: npx ts-node examples/05-generics.ts
 */

export {};

// Basic Generic Function
function identityGen<T>(arg: T): T {
  return arg;
}

// Using the generic function
const stringResult = identityGen<string>("Hello Generic World");
const numberResult = identityGen<number>(42);
const booleanResult = identityGen(true); // Type inference works here

console.log('Basic generic function:');
console.log(stringResult);
console.log(numberResult);
console.log(booleanResult);

// Generic Interface
interface GenericResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Using the generic interface
const stringResponse: GenericResponse<string> = {
  data: "Success",
  status: 200,
  message: "OK"
};

const numberResponse: GenericResponse<number> = {
  data: 42,
  status: 200,
  message: "OK"
};

console.log('Generic interface:');
console.log(stringResponse);
console.log(numberResponse);

// Generic Classes
class GenericBox<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  getValue(): T {
    return this._value;
  }

  setValue(value: T): void {
    this._value = value;
  }
}

const stringBox = new GenericBox<string>("TypeScript");
const numberBox = new GenericBox<number>(100);

console.log('Generic class:');
console.log(stringBox.getValue());
console.log(numberBox.getValue());

stringBox.setValue("JavaScript");
console.log(`After setValue: ${stringBox.getValue()}`);

// Generic Constraints
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(`Length: ${arg.length}`);
  return arg;
}

console.log('Generic constraints:');
logLength("Hello"); // String has length property
logLength([1, 2, 3]); // Array has length property
logLength({ length: 10, value: "Custom" }); // Object with length property
// Error: Argument of type 'number' is not assignable to parameter of type 'HasLength'
// logLength(123);

// Using Multiple Type Parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pairResult = pair<string, number>("key", 42);
console.log('Multiple type parameters:', pairResult);

// Generic Type Aliases
type Container<T> = { value: T };

const numberContainer: Container<number> = { value: 42 };
const stringContainer: Container<string> = { value: "Hello" };

console.log('Generic type aliases:');
console.log(numberContainer);
console.log(stringContainer);

// Default Type Parameters
interface ApiResponse<T = any> {
  data: T;
  error?: string;
}

const defaultResponse: ApiResponse = { data: "Default type" };
const typedResponse: ApiResponse<number[]> = { data: [1, 2, 3] };

console.log('Default type parameters:');
console.log(defaultResponse);
console.log(typedResponse);

// Generic Constraints with keyof
function getPropertyGen<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const personGen = { name: "John", age: 30, location: "New York" };

console.log('Generic constraints with keyof:');
console.log(getPropertyGen(personGen, "name"));
console.log(getPropertyGen(personGen, "age"));
// Error: Argument of type '"height"' is not assignable to parameter of type '"name" | "age" | "location"'
// console.log(getPropertyGen(personGen, "height"));

// Generic Factory Function
interface Constructable<T> {
  new (): T;
}

function create<T>(c: Constructable<T>): T {
  return new c();
}

class Example {
  name: string = "Example";
  description: string = "This is a generic factory function example";
}

const example = create(Example);
console.log('Generic factory function:', example);

// Conditional Types
type TypeName<T> = 
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  T extends undefined ? "undefined" :
  T extends Function ? "function" :
  "object";

const typeName1: TypeName<string> = "string";
const typeName2: TypeName<number> = "number";
const typeName3: TypeName<boolean> = "boolean";
const typeName4: TypeName<() => void> = "function";
const typeName5: TypeName<{}> = "object";

console.log('Conditional types:');
console.log(typeName1, typeName2, typeName3, typeName4, typeName5);

// Generic Utility Types
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Partial<T> - Makes all properties optional
const partialTodo: Partial<Todo> = {
  title: "Learn TypeScript"
};

// Required<T> - Makes all properties required
const requiredTodo: Required<Todo> = {
  title: "Learn TypeScript",
  description: "Learn TypeScript Generics",
  completed: false
};

// Readonly<T> - Makes all properties readonly
const readonlyTodo: Readonly<Todo> = {
  title: "Learn TypeScript",
  description: "Learn TypeScript Generics",
  completed: false
};

// Error: Cannot assign to 'title' because it is a read-only property
// readonlyTodo.title = "Updated";

// Pick<T, K> - Creates a type with only the specified properties
const titleOnly: Pick<Todo, "title"> = {
  title: "Learn TypeScript"
};

// Omit<T, K> - Creates a type without the specified properties
const withoutCompleted: Omit<Todo, "completed"> = {
  title: "Learn TypeScript",
  description: "Learn TypeScript Generics"
};

// Record<K, T> - Creates a type with properties of type K and values of type T
const todoMap: Record<string, Todo> = {
  "task1": {
    title: "Learn TypeScript",
    description: "Learn basic syntax",
    completed: true
  },
  "task2": {
    title: "Learn Generics",
    description: "Learn TypeScript Generics",
    completed: false
  }
};

console.log('Utility types:');
console.log(partialTodo);
console.log(requiredTodo);
console.log(readonlyTodo);
console.log(titleOnly);
console.log(withoutCompleted);
console.log(todoMap);

// Mapped types with modifiers
type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
};

type OptionalProps<T> = {
  [P in keyof T]?: T[P]
};

console.log('\nEnd of Generics Example'); 