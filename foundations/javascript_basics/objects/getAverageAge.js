/**
 * Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.
 */

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(users) {
    return users.reduce((sum, user) => sum + user.age, 0) / users.length
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
