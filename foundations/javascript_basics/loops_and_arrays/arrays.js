const fruits = ["Apple", "Orange", "Banana"];
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

// translate border-left-width to borderLeftWidth
/**
 * Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.
 */

function camelize(string) {
  const toArr = string.split("");
  let newArr = [];
  for (let i = 0; i < toArr.length; i++) {
    if (toArr[i] === "-") {
      newArr += toArr[i + 1].toUpperCase();
      i++;
      continue;
    }
    newArr += toArr[i];
  }
  return newArr;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));

// OR a lot easier version

function camelise(str) {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelise("background-color"));

// filter range
/**
 * Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.
 */

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

console.log(filtered); //should be 3, 1
console.log(arr); //should not be modified

// filter range ''in place''
/**
 * Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
 */

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
filterRangeInPlace(arr, 1, 4);
console.log(`filterRangeInPlace function: ${arr}`);

// sort in decreasing order
let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b - a);
console.log(`sorted array ${arr2}`);

// copy and sort array
/**
 * We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.
 */

let arr3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr3);

function copySorted(arr) {
  return arr.slice().sort();
}

console.log(sorted);
console.log(arr3); //no changes

// shuffle an array
let arr4 = [1, 2, 3];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

console.log(shuffle(arr4));

// filter unique array members
let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

console.log(unique(strings));
