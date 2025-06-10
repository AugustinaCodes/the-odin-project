// length returns the length of a string
let text = "hello"
console.log(`length: ${text.length}`);

// charAt() returns the character at a specified index (position) in a string
let text2 = "Hello World"
console.log(`charAt(): ${text2.charAt(0)}`);

// charCodeAt() returns the code of the character at a specified index in a string
console.log(`charCodeAt(): ${text2.charCodeAt(0)}`);

// at() method returns the character at a specified index in a string. 
// the at() method is a new addition to JavaScript
// it allows the use of negative indexes while charAt() do not
const name = "W3Schools"
let letter = name.at(2)
console.log(`at(): ${letter}`);

// property access
let char = name[5]
console.log(`property access: ${char}`);

// slice() extracts a part of a string and returns the extracted part in a new string
let fruits = "Apple, Banana, Kiwi"
let part = fruits.slice(7, 13)
let part2 = fruits.slice(7)
console.log(`slice(): ${part}`);
console.log(`slice(): ${part2}`);
// if parameter is negative, the position is counted from the end of the string
console.log(`slice() negative parameter: ${fruits.slice(-12)}`);
console.log(`slice() negative parameter: ${fruits.slice(-12, -6)}`);
// substring() is similar to slice()
// The difference is that start and end values less than 0 are treated as 0 in substring
console.log(`substring(): ${fruits.substring(7, 13)}`);

// toUpperCase()
let text3 = "Hello World"
console.log(`toUpperCase(): ${text3.toUpperCase()}`);
// toLowerCase()
console.log(`toLowerCase(): ${text3.toLowerCase()}`);

// concat() joins two or more strings
let text4 = "Hello"
let text5 = "World"
let result = text4.concat(" ", text5)
console.log(`concat(): ${result}`);

// trim() removes whitespace from both sides of a string
let text6 = "     Hello world     "
console.log(`trim(): ${text6.trim()}`);
// trimStart() method works like trim() but removes whitespace only from the start of a string
console.log(`trimStart(): ${text6.trimStart()}`);
// timEnd() works simialrly but removes whitespace only at the end of a string
console.log(`trimEnd(): ${text6.trimEnd()}`);

// padStart() and padEnd() supports padding at the beginnign and at the end of a string
let text7 = "5"
console.log(`padStart(): ${text7.padStart(4, "0")}`);
console.log(`padEnd(): ${text7.padEnd(4, "x")}`);

// repeat() returns a string with a number of copies of a string
let text8 = "Moon and stars"
console.log(`repeat(): ${text8.repeat(2)}`);

// replace() replaces a specified value with another value in a string
let text9 = "Please visit Microsoft!"
console.log(`replace(): ${text9.replace("Microsoft", "W3Schools")}`);
let text10 = "Please visit Microsoft and Microsoft!"
console.log(`replace() all: ${text10.replace(/Microsoft/g, "W3Schools")}`);

// replaceAll()
let text11 = "I love cats. Cats are very easy to love. Cats are very popular."
text11 = text11.replaceAll("cats", "dogs")
text11 = text11.replaceAll("Cats", "Dogs")
console.log(`replaceAll(): ${text11}`);

// split() can convert string to an array
console.log(`split(): ${text11.split(" ")}`);

