const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

// map()

function toUpper(string) {
    return string.toUpperCase()
}

const upperCats = cats.map(toUpper)

console.log(upperCats);

// filter()

function lCat(cat) {
    return cat.startsWith("L")
}

const filtered = cats.filter(lCat)

// or you can rewrite it:

const filtered2 = cats.filter((cat) => cat.startsWith("L"))

console.log(filtered);
