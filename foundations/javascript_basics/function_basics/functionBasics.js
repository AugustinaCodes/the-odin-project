// Anonymous functions
// Example when to use them:

function logKey(event) {
  console.log(`You pressed "${event.key}"`);
}

textBox.addEventListener("keydown", logKey);

// Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener()

textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}"`);
});

// a function with an empty return or without it returns undefined

function doNothing(){
    return;
}

console.log(doNothing());

// odin practice

function add7(number){
    return number + 7
}
console.log(add7(10));

function multiply(num1, num2) {
    return num1 * num2
}

console.log(multiply(5, 5));

function capitalize(str) {
    const fullWord = str.toLowerCase();
    const firstLetter = str[0].toUpperCase()

    return `${firstLetter}${fullWord.slice(1)}`
}

console.log(capitalize("BoTh"));

function lastLetter(str) {
    const toArray = str.split("")
    return toArray[toArray.length - 1]
}

console.log(lastLetter("sunshine"));

