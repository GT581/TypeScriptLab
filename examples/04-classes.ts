/**
 * Classes in TypeScript
 * 
 * TypeScript offers full support for class-based object-oriented programming.
 * Run this example with: npx ts-node examples/04-classes.ts
 */

export {};

// Basic Class
class PersonClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const personInstance = new PersonClass("John", 30);
console.log('Basic class:', personInstance);
console.log(personInstance.greet());

// Access Modifiers
class EmployeeClass {
  private id: number;
  protected salary: number;
  public department: string;

  constructor(id: number, salary: number, department: string) {
    this.id = id;
    this.salary = salary;
    this.department = department;
  }

  // Public method (default)
  getDetails() {
    return `Employee ID: ${this.id}, Department: ${this.department}`;
  }

  // Private method
  private calculateBonus() {
    return this.salary * 0.1;
  }

  // Public method that uses private method
  getBonus() {
    return this.calculateBonus();
  }
}

const employeeInstance = new EmployeeClass(101, 50000, "Engineering");
console.log('Access modifiers:');
console.log(employeeInstance.getDetails());
console.log(`Bonus: $${employeeInstance.getBonus()}`);
// Error: Property 'id' is private and only accessible within class 'EmployeeClass'
// console.log(employeeInstance.id);

// Inheritance
class ManagerClass extends EmployeeClass {
  team: string[];

  constructor(id: number, salary: number, department: string, team: string[]) {
    super(id, salary, department);
    this.team = team;
  }

  getDetails() {
    return `${super.getDetails()}, Team size: ${this.team.length}`;
  }

  // Can access protected member from parent class
  getSalaryDetails() {
    return `Salary: $${this.salary}`;
  }

  // Cannot access private member from parent class
  // getId() {
  //   return this.id; // Error: Property 'id' is private and only accessible within class 'EmployeeClass'
  // }
}

const managerInstance = new ManagerClass(102, 80000, "Product", ["Alice", "Bob", "Charlie"]);
console.log('Inheritance:');
console.log(managerInstance.getDetails());
console.log(managerInstance.getSalaryDetails());

// Abstract Classes
abstract class Shape {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  abstract calculateArea(): number;

  displayColor() {
    return `This shape is ${this.color}`;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

// Cannot instantiate an abstract class
// const shape = new Shape("red");

const circle = new Circle("blue", 5);
const rectangle = new Rectangle("green", 4, 6);

console.log('Abstract classes:');
console.log(circle.displayColor());
console.log(`Circle area: ${circle.calculateArea().toFixed(2)}`);
console.log(`Rectangle area: ${rectangle.calculateArea()}`);

// Static Members
class MathUtils {
  static PI = 3.14159;

  static add(x: number, y: number): number {
    return x + y;
  }

  static multiply(x: number, y: number): number {
    return x * y;
  }
}

console.log('Static members:');
console.log(`PI: ${MathUtils.PI}`);
console.log(`5 + 3 = ${MathUtils.add(5, 3)}`);
console.log(`4 * 2 = ${MathUtils.multiply(4, 2)}`);

// Getters and Setters
class BankAccount {
  private _balance: number;
  private _owner: string;

  constructor(owner: string, initialBalance: number) {
    this._owner = owner;
    this._balance = initialBalance;
  }

  // Getter
  get balance(): number {
    return this._balance;
  }

  // Setter with validation
  set balance(amount: number) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = amount;
  }

  get owner(): string {
    return this._owner;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    this.balance -= amount;
  }
}

const account = new BankAccount("John", 1000);
console.log('Getters and setters:');
console.log(`${account.owner}'s balance: $${account.balance}`);
account.deposit(500);
console.log(`After deposit: $${account.balance}`);
account.withdraw(200);
console.log(`After withdrawal: $${account.balance}`);

// Implementing interfaces
interface VehicleInterface {
  make: string;
  model: string;
  year: number;
  start(): void;
  stop(): void;
}

class CarClass implements VehicleInterface {
  make: string;
  model: string;
  year: number;
  private _isRunning: boolean = false;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    this._isRunning = true;
    console.log(`${this.make} ${this.model} started`);
  }

  stop() {
    this._isRunning = false;
    console.log(`${this.make} ${this.model} stopped`);
  }

  get isRunning(): boolean {
    return this._isRunning;
  }
}

const carInstance = new CarClass("BMW", "M3", 2004);
console.log('Implementing interfaces:');
carInstance.start();
console.log(`Car is running: ${carInstance.isRunning}`);
carInstance.stop();
console.log(`Car is running: ${carInstance.isRunning}`);

// Readonly properties
class Configuration {
  readonly apiKey: string;
  readonly apiUrl: string;

  constructor(apiKey: string, apiUrl: string) {
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
  }

  // Cannot modify readonly properties after initialization
  // updateApiKey(newKey: string) {
  //   this.apiKey = newKey; // Error: Cannot assign to 'apiKey' because it is a read-only property
  // }
}

const config = new Configuration("abc123", "https://api.example.com");
console.log('Readonly properties:');
console.log(config);

// Parameter properties (shorthand)
class ProductClass {
  // Declare and initialize properties in constructor params
  constructor(
    public id: number,
    public name: string,
    public price: number,
    private _stock: number = 0
  ) {}

  get stock(): number {
    return this._stock;
  }

  set stock(value: number) {
    if (value < 0) throw new Error("Stock cannot be negative");
    this._stock = value;
  }
}

const productInstance = new ProductClass(1, "Laptop", 999, 10);
console.log('Parameter properties:');
console.log(productInstance);
console.log(`Stock: ${productInstance.stock}`);

console.log('\nEnd of Classes Example'); 