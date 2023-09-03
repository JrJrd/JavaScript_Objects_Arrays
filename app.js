// Exercise 1 Section
const num = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
  let sum = 0;
  arr.forEach((number) => {
    sum += number;
  });

  return sum;
}

console.log(arraySum(num));
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 1);

console.log(sum); // Output: 16

// Exercise 2 Section
let favBook = {

    
};

favBook.title = "book title";
favBook.author = " fav author";
favBook.pageCount = 300;
favBook.readCount = 1;

// console.log(favBook);

// favBook.info = function () {
//     return `${this.title} by ${this.author} is ${this.pageCount}`
// }
function info() {
  return `${this.title} by ${this.author} is ${this.pageCount} pages`;
}

favBook.info = info;

let favBook2 = {
  title: "2nd fav book",
  author: "2nd author name",
  pageCount: 300,
  readCount: 1,
  info,
};

console.log(favBook.info());
console.log(favBook2.info());

// Exercise 3 Section
let sentence = "The quick brown fox jumps over the lazy dog";

let words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
  let characters = words[i].split("");

  let reversedCharacters = characters.reverse();

  words[i] = reversedCharacters.join("");
}

let reversedSentence = words.join(" ");

console.log(reversedSentence);


// Exercise 4 Section


let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

const rows = csvData.split('\n');

const headers = rows[0].split(',');

const result = [];

for (let i = 1; i < rows.length; i++) {
  const rowData = rows[i].split(',');
  const obj = {};

  for (let j = 0; j < headers.length; j++) {
    obj[headers[j]] = rowData[j];
  }

  result.push(obj);
}

console.log(result);



