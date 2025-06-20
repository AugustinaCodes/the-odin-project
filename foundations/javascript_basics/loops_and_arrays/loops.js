const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

// map()

function toUpper(string) {
  return string.toUpperCase();
}

const upperCats = cats.map(toUpper);

console.log(upperCats);

// filter()

function lCat(cat) {
  return cat.startsWith("L");
}

const filtered = cats.filter(lCat);

// or you can rewrite it:

const filtered2 = cats.filter((cat) => cat.startsWith("L"));

console.log(filtered);

// Last loop value
// What is the last value alerted by this code, why?

let i = 3;
while (i) {
  alert(i--);
}

// so 1. i = 3; alert 3
// i = 2; alert 2;
// i = 1; alert 1;
// i = 0, the loop stops as 0 is falsy.

// Which values does the while loop show?
// 1
let j = 0;
while (++j < 5) alert(j);

// 1, 2, 3, 4

// 2
let k = 0;
while (k++ < 5) alert(k);
// k++ increments after? Use the current value, then increase it by one
// use 0 < 5, true --> increase it --> 1
// use 1 < 5, true --> increase it --> 2
// use 2 < 5, true --> increase it --> 3
// use 3 < 5, true --> increase it --> 4
// use 4 < 5, true --> increase it --> 5
//  5 < 5, false, the loop stops

// Which values get shown by the for loop?
// 1

for (let z = 0; z < 5; z++) alert(z);

// 0 < 5 --> 0
// 1 < 5 --> 1
// 2 < 5 --> 2
// 3 < 5 --> 3
// 4 < 5 --> 4

// for (y = 0; y < 5; ++y) alert (y)

// and here it's also 0, 1, 2, 3, 4, not different, because of the way the for loop works.
// Execute once i = 0, before we begin
// Then check the condition
// If true, execute the loop body (here alert)
// And then i++
// the value returned by the increment is not used here so there is no difference if it's i++ or ++i

// Out put even numbers in the loop
// Use for loop to output even number from 2 to 10

for (let g = 2; g <= 10; g += 2) {
  console.log(g);
}

// Replace for with while

for (let s = 0; s < 3; s++){
    alert(`number ${s}!`)
}
// 0, 1, 2

let a = -1;
while (++a < 3) alert (`number ${a}!`)
// 0, 1, 2,
// or this is also correct:
// let i = 0;
// while(i < 3) {
// alert(i)
// i++
// }

// Repeat until the input is correct
/**
 * Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
 */

// here we can use the do while loop

let num;

do {
    num = prompt("Enter a number greater than 100?", 0)
} while (num <= 100 && num)

// Output prime numbers
/**
 * An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.
 */

let n = 10;

nextPrime: for (let p = 2; p <= n; p++) { 
  for (let v = 2; v < p; v++) { 
    if (p % v === 0) continue nextPrime;
  }
  console.log(p);
}
