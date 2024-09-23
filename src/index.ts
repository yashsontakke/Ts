// // Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
// const json = JSON.parse("55");
// // Most expect json to be an object, but it can be a string or a number like this example
// console.log(typeof json);

// let w:unknown=1;
// w="abc";

// let a:number=1;
// a="kbc";

// const names:readonly string[] = [];
// names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// const numbers = [1, 2, 3 ,"$"]; // inferred to type number[]
// numbers.push(4); // no error
// // comment line below out to see the successful assignment 
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// // define our tuple
// let ourTuple: [number, boolean, string];
// // initialize correctly
// ourTuple = [5, false, 'Coding God was here'];
// // We have no type safety in our tuple for indexes 3+
// ourTuple.push('Something new and wrong');
// console.log(ourTuple);

// const car:{a:number,b:string,d:boolean}={
//     a:4,
//     b:"c",
//     d:true
// }

// const bike={
//     name:"yamaha"
// }
// bike.name=13;

// const scooty: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   type: "Toyota",
// };
// const carr: { type: string, mileage?: number } = { // no error
//     type: "Toyota"
//   };
// carr.mileage = 2000;
// scooty.mileage = 3000;

// 1. Reverse a given string
// function reverseString(str: string): string {
//   return str.split('').reverse().join('');
// }
 // Output: "olleh"

// 2. Check if both numbers have the same last digit
// function haveSameLastDigit(num1: number, num2: number): boolean {
//   return (num1 % 10) === (num2 % 10);
// }
// console.log(haveSameLastDigit(123, 43)); // Output: true

// // 3. Replace names of multiple object keys with the values provided
// function replaceKeys(obj: Record<string, any>, keyMap: Record<string, string>): Record<string, any> {
//   return Object.keys(obj).reduce((acc, key) => {
//       const newKey = keyMap[key] || key;
//       acc[newKey] = obj[key];
//       return acc;
//   }, {} as Record<string, any>);
// }
// const obj = { firstName: "John", lastName: "Doe" };
// const keyMap = { firstName: "first", lastName: "last" };
// console.log(replaceKeys(obj, keyMap)); // Output: { first: "John", last: "Doe" }

// // 4. Get the first non-null/undefined argument
// function firstNonNull(...args: (any | null | undefined)[]): any {
//   return args.find(arg => arg !== null && arg !== undefined);
// }
// console.log(firstNonNull(null, undefined, "first", "second")); // Output: "first"

// // 5. Check if a value is object-like
// function isObjectLike(value: any): boolean {
//   return value != null && typeof value === 'object';
// }
// console.log(isObjectLike({})); // Output: true
// console.log(isObjectLike(null)); // Output: false

// // 6. Compare two objects to determine if the first contains equivalent property values to the second
// function isEquivalent(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
//   return Object.keys(obj2).every(key => obj1[key] === obj2[key]);
// }
// const objA = { a: 1, b: 2 };
// const objB = { a: 1, b: 2 };
// console.log(isEquivalent(objA, objB)); // Output: true

// // 7. Convert a two-dimensional array into an object
// function arrayToObject(arr: [string, any][]): Record<string, any> {
//   return Object.fromEntries(arr);
// }
// const arr: [string, any][] = [['a', 1], ['b', 2]];
// console.log(arrayToObject(arr)); // Output: { a: 1, b: 2 }

// // 8. Iterate over a JavaScript object
// function iterateObject(obj: Record<string, any>): void {
//   for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//           console.log(`${key}: ${obj[key]}`);
//       }
//   }
// }
// const sampleObj = { x: 10, y: 20 };
// iterateObject(sampleObj); // Output: x: 10, y: 20

// // 9. Remove duplicates from an array of objects
// function removeDuplicates(arr: Array<Record<string, any>>, key: string): Array<Record<string, any>> {
//   const seen = new Set();
//   return arr.filter(item => {
//       const value = item[key];
//       if (seen.has(value)) {
//           return false;
//       }
//       seen.add(value);
//       return true;
//   });
// }
// const objectsArray = [{ id: 1 }, { id: 2 }, { id: 1 }];
// console.log(removeDuplicates(objectsArray, 'id')); // Output: [{ id: 1 }, { id: 2 }]

// // 10. Get a subset of a TypeScript object's properties
// function getSubset<T>(obj: T, keys: Array<keyof T>): Partial<T> {
//   return keys.reduce((acc, key) => {
//       acc[key] = obj[key];
//       return acc;
//   }, {} as Partial<T>);
// }
// const fullObj = { a: 1, b: 2, c: 3 };
// console.log(getSubset(fullObj, ['a', 'c'])); // Output: { a: 1, c: 3 }