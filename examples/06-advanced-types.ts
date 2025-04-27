/**
 * Advanced Types in TypeScript
 * 
 * TypeScript offers sophisticated type features for expressing complex type relationships.
 * Run this example with: npx ts-node examples/06-advanced-types.ts
 */

export {};

// Union Types
type StringOrNumber = string | number;

function formatValue(value: StringOrNumber): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

console.log('Union Types:');
console.log(formatValue('hello')); // HELLO
console.log(formatValue(42.1234)); // 42.12

// Intersection Types
type PersonType = {
  name: string;
  age: number;
};

type EmployeeType = {
  employeeId: string;
  department: string;
};

type EmployeePerson = PersonType & EmployeeType;

const worker: EmployeePerson = {
  name: 'John Smith',
  age: 30,
  employeeId: 'E123',
  department: 'Engineering'
};

console.log('Intersection Types:');
console.log(worker);

// Type Guards
function isPersonType(value: any): value is PersonType {
  return value &&
         typeof value === 'object' &&
         'name' in value &&
         'age' in value;
}

function processValue(value: PersonType | EmployeeType): void {
  if (isPersonType(value)) {
    console.log(`Person: ${value.name}, ${value.age}`);
  } else {
    console.log(`Employee: ${value.employeeId}, ${value.department}`);
  }
}

console.log('Type Guards:');
processValue({ name: 'Jane', age: 25 });
processValue({ employeeId: 'E456', department: 'Marketing' });

// Discriminated Unions
type CircleShape = {
  kind: 'circle';
  radius: number;
};

type SquareShape = {
  kind: 'square';
  sideLength: number;
};

type RectangleShape = {
  kind: 'rectangle';
  width: number;
  height: number;
};

type ShapeUnion = CircleShape | SquareShape | RectangleShape;

function calculateArea(shape: ShapeUnion): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    case 'rectangle':
      return shape.width * shape.height;
  }
}

const circleShape: CircleShape = { kind: 'circle', radius: 5 };
const squareShape: SquareShape = { kind: 'square', sideLength: 4 };
const rectangleShape: RectangleShape = { kind: 'rectangle', width: 3, height: 6 };

console.log('Discriminated Unions:');
console.log(`Circle area: ${calculateArea(circleShape).toFixed(2)}`);
console.log(`Square area: ${calculateArea(squareShape)}`);
console.log(`Rectangle area: ${calculateArea(rectangleShape)}`);

// Nullable Types
type NullableString = string | null | undefined;

function printLength(text: NullableString): void {
  // Using type guard
  if (text === null) {
    console.log('Text is null');
  } else if (text === undefined) {
    console.log('Text is undefined');
  } else {
    console.log(`Text length: ${text.length}`);
  }
}

console.log('Nullable Types:');
printLength('Hello');
printLength(null);
printLength(undefined);

// Index Types
function pluck<T, K extends keyof T>(obj: T, propertyNames: K[]): T[K][] {
  return propertyNames.map(name => obj[name]);
}

const personObj = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
  phone: '123-456-7890'
};

console.log('Index Types:');
console.log(pluck(personObj, ['name', 'email']));

// Mapped Types
type ReadonlyProps<T> = {
  readonly [P in keyof T]: T[P];
};

type PartialProps<T> = {
  [P in keyof T]?: T[P];
};

type NullableProps<T> = {
  [P in keyof T]: T[P] | null;
};

const readonlyPersonObj: ReadonlyProps<PersonType> = {
  name: 'John',
  age: 30
};

// Error: Cannot assign to 'name' because it is a read-only property
// readonlyPersonObj.name = 'Jane';

const partialPersonObj: PartialProps<PersonType> = {
  name: 'John'
  // age is optional
};

const nullablePersonObj: NullableProps<PersonType> = {
  name: 'John',
  age: null
};

console.log('Mapped Types:');
console.log(readonlyPersonObj);
console.log(partialPersonObj);
console.log(nullablePersonObj);

// Conditional Types
type IsString<T> = T extends string ? true : false;

type CheckString = IsString<'hello'>; // true
type CheckNumber = IsString<42>; // false

// infer in conditional types
type FunctionReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

function fetchData(): Promise<string> {
  return Promise.resolve('Data');
}

type FetchReturn = FunctionReturnType<typeof fetchData>; // Promise<string>

function addNumbers(a: number, b: number): number {
  return a + b;
}

type AddReturn = FunctionReturnType<typeof addNumbers>; // number

console.log('Conditional Types:');
const checkString: CheckString = true;
const checkNumber: CheckNumber = false;
console.log({ checkString, checkNumber });

// Template Literal Types
type Vertical = 'top' | 'middle' | 'bottom';
type Horizontal = 'left' | 'center' | 'right';

type Position = `${Vertical}-${Horizontal}`;

const position1: Position = 'top-left';
const position2: Position = 'bottom-right';
// Error: Type '"wrong-position"' is not assignable to type 'Position'
// const position3: Position = 'wrong-position';

type EventName<T extends string> = `${T}Changed`;
type UserEvents = EventName<'name' | 'email' | 'password'>;

const userEvent: UserEvents = 'nameChanged';

console.log('Template Literal Types:');
console.log({ position1, position2, userEvent });

// Recursive Types
type JSONPrimitive = string | number | boolean | null;
type JSONArray = JSONValue[];
type JSONObject = { [key: string]: JSONValue };
type JSONValue = JSONPrimitive | JSONArray | JSONObject;

const jsonValue: JSONValue = {
  name: 'Product',
  price: 42.99,
  inStock: true,
  tags: ['electronics', 'gadget'],
  details: {
    manufacturer: 'Tech Corp',
    model: 'XYZ',
    specifications: null
  }
};

console.log('Recursive Types:');
console.log(jsonValue);

// Literal Types
type DirectionLiteral = 'North' | 'East' | 'South' | 'West';
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function move(direction: DirectionLiteral, distance: number): void {
  console.log(`Moving ${distance} units ${direction}`);
}

function rollDice(): DiceRoll {
  return (Math.floor(Math.random() * 6) + 1) as DiceRoll;
}

console.log('Literal Types:');
move('North', 10);
console.log(`Dice roll: ${rollDice()}`);

console.log('\nEnd of Advanced Types Example'); 