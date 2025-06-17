const fruits = ["Apple", "Orange", "Banana"]
// to get the last elements of the array:
console.log(fruits.at(-1));

// pop method - returns the last element of an array and modifies the array
console.log(fruits.pop()); 
console.log(fruits);

// push - equal to fruits.length
console.log(fruits.push("Kiwi"));
console.log(fruits);

// shift - extacts the first element of the array and returns it
console.log(fruits.shift());
console.log(fruits);

// unshift - add element to the beginning of the array
console.log(fruits.unshift("Mango"));
console.log(fruits);
