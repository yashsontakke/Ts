// Creating a Map
const map = new Map();

// Adding key-value pairs
map.set('name', 'John');      // Key is a string
map.set(1, 'one');            // Key is a number
map.set(true, 'boolean');     // Key is a boolean
map.set({ id: 1 }, 'object'); // Key is an object

// Accessing values
console.log(map.get('name')); // Output: John
console.log(map.get(1));      // Output: one
console.log(map.get(true));   // Output: boolean

// Checking existence of a key
console.log(map.has(1)); // Output: true

// Deleting a key-value pair
map.delete(1);
console.log(map.has(1)); // Output: false

// Iterating through a Map
map.forEach((value, key) => {
  console.log(key, value);
});


//only allows objects as keys 
const weakMap = new WeakMap();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

// Adding key-value pairs
weakMap.set(obj1, 'Object 1');
weakMap.set(obj2, 'Object 2');

console.log(weakMap.get(obj1)); // Output: Object 1
console.log(weakMap.has(obj2)); // Output: true

// Creating a Set
const set = new Set();

// Adding values to the Set
set.add(1);      // Number
set.add(2);
set.add(2);      // Duplicate, will be ignored
set.add('hello');  // String
set.add({ id: 1 });  // Object

// Checking if a value exists
console.log(set.has(1));      // Output: true
console.log(set.has(3));      // Output: false

// Deleting a value
set.delete(1);
console.log(set.has(1));      // Output: false

// Iterating through the Set
set.forEach(value => {
  console.log(value);
});

// Getting the size of the Set
console.log(set.size); // Output: 3

// Converting Set to Array
const setArray = Array.from(set);
console.log(setArray); // Output: [ 2, 'hello', { id: 1 } ]


