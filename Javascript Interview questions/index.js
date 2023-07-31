// 1 

// let a = []
// let b = []

// console.log(a == b)  false
// console.log(a === b) false

//2

// let a = [];
// let b = a;

// console.log(a == b); true
// console.log(a === b) true

//3

// let a = [20]
// let b = [20]

// console.log(a[0] == b[0]); true
// console.log(a[0] === b[0]); true

//4

// let z = [1,2,3,4]
// let a = {name : 'anil'}
// console.log(...z)

//5

// console.log(typeof NaN)

//6

// let a = 10 - -10;
// console.log(a)

//7

// const set = new Set([1,1,2,3,4]);
// console.log(set.has(3)); true

//8

// const data = {name : 'anil'};
// console.log(delete data.name); true

//9

// const data = {name : 'anil'}
// console.log(delete data); false

//10

// const data = ['peter', 'bruce', 'clark'];
// const [y] = data;
// console.log(y);  peter

//11

// const data = ['peter', 'bruce', 'clark'];
// const [,y] = data;
// console.log(y); bruce

//12

// const data = {name : 'anil', age : 23, city : 'New Delhi'};
// const {name} = data;
// console.log(name); anil

//13

// let data = {name : 'anil', age : 23, city : 'New Delhi'};
// let info = {email : 'anil@gmail.com', mobile : 5894758454};
// data = {...data, ...info};
// console.log(data); two merged obj

// Primitive

let user = 'Arya';
let newUser = user;

user = 'Sam';
// console.log(newUser)

// In primitive data types when we pass the value of one variable to another only value of that variable copies but not the reference.

// COPY BY VALUE AND COPY BY REFERENCE

// Non - Primitive

let data = {
    name : 'Arya',
    age : 17
}

let newData = data;

data.name = 'Sam';

// console.log(newData)

// In Non-Primitive data types if we copy the value of a variable to another variable the reference of that variable copies but not the exact value itself.

// PASSED BY VALUE AND PASSED BY REFERENCE

let a = 10, b = 20;
              
function abc(num1, num2){
    num1 = num1 + num2;
    return num1;
}

// console.log(abc(a, b));


function xyz(data){
    data.name = 'Bruce Wayne';
    return data;
}

// console.log(xyz(data));
// console.log(data)


// After knowing about string methods, practice those by solving problems given below.

let from = "Syrio Forel";
let quote = "There is only one thing we say to death: Not today";
let to = "Arya Stark";

/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/

const indexOfIs = quote.indexOf('is');
console.log(indexOfIs)

/*
2. Find the character at the index indexOfIs (Problem 1) in quote.

*/

console.log(quote.charAt(indexOfIs));

/*
3. Log the message saying `The index of first is in quote is 7`
*/

console.log(`The index of first is in quote is ${indexOfIs}`);

/*
4. Log the message for first 6 characters of quote like this.
  The character at index 0 is 'T'
  The character at index 1 is 'h'
  The character at index 2 is 'e'
  The character at index 3 is 'r'
  The character at index 4 is 'e'
  The character at index 5 is ' '
*/

console.log(`The character at index 0 is ${quote.charAt(0)}`);
console.log(`The character at index 1 is ${quote.charAt(1)}`);
console.log(`The character at index 2 is ${quote.charAt(2)}`);
console.log(`The character at index 3 is ${quote.charAt(3)}`);
console.log(`The character at index 4 is ${quote.charAt(4)}`);
console.log(`The character at index 5 is ${quote.charAt(5)}`);

/*
5. Using the variable from , to and quote variable dispaly this message
  "Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/

console.log(from.concat(' ' + 'said'+ ' ' + quote + ' ' + 'to' + ' ' + to));

/*
6. Does from, to and quote ends with "rk". Check all three.
*/

console.log(from.endsWith('rk'));
console.log(to.endsWith('rk'));
console.log(quote.endsWith('rk'));

/*
7. Does quote includes the word "Only"

*/

console.log(quote.includes('only'));

/*
8. Does quote includes the word " we"
*/

console.log(quote.includes('we'));

/*
9. Find the index of the the word `we` in quote
*/

console.log(quote.indexOf('we'));

/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/

const quoteSplitted = quote.split(' ');

/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
*/

const joinedQuote = quoteSplitted.join(' ').replace('today', 'tomorrow');
console.log(joinedQuote);

/*
12. Find the index of second "o" in quote. Use indexOf
*/

console.log(quote.indexOf('o'));

/*
13. Find the last index of letter "a" in quote.
*/

console.log(quote.indexOf('a'));

/*
14. Find the second last index of letter "a" in quote.
*/

console.log(quote.lastIndexOf('o'));

/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
Store the output in a new variable
*/

console.log(quote.padEnd(70, '.'));

/*
16. Do same as (15) but the ... should come in start. Store the output in a new variable
*/

const extendedQuote = quote.padStart(70, '.');
console.log(extendedQuote)

/*
17. Log the repeat of "Hello World!" 10 times.
*/

for(let i = 0; i<10; i++){
    console.log('Hello World!');
}

/*
18. Replace today to tomorrow in quote.
*/

console.log(quote.replace('today', 'tomorrow'));

/*
19. Replace Stark to Lannister in quoteTo
*/

const quoteTo = to.replace('Stark', 'Lannister');
console.log(quoteTo)

/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/

console.log(`${quote.slice(0, 30)}...`);

/*
21. Find out does quote, from, to starts with "A"
*/

console.log(quote.startsWith('A'));

// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

let newNumArr = [...numbers];
let newStrArr = [...strings];

// - Find the index of `101` in numbers

console.log(newNumArr.indexOf(101));

// - Find the last index of `9` in numbers

console.log(newNumArr.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"

console.log(newStrArr.join(' '));

// - Add two new words in the strings array "called" and "sentance"

newStrArr.push('called', 'sentence');

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

console.log(newStrArr.join(' '));

// - Remove the first word in the array (strings)

newStrArr.shift();

// - Find all the words that contain 'is' use string method 'includes'

const filterIs = strings.filter(el => el.includes('is'));
console.log(filterIs)

// - Find all the words that contain 'is' use string method 'indexOf'

const filterIs2 = strings.filter(el => el.indexOf('is') >= 0);
console.log(filterIs2)

// - Check if all the numbers in numbers array are divisible by three use array method (every)

const divBy3 = numbers.every(el => el % 3 === 0);
console.log(divBy3);

// -  Sort Array from smallest to largest

newNumArr.sort((a, b) => a - b);
console.log(newNumArr);

// - Remove the last word in strings

console.log(newStrArr.pop());

// - Find largest number in numbers

const largestNum = numbers.reduce((acc, curr) => {
    acc = Math.max(acc, curr);
    return acc;
}, 0)

// console.log(Math.max(...numbers));

console.log(largestNum);

// - Find longest string in strings

const longestStr = strings.reduce((acc, curr) => {
    if(curr.length > acc.length){
        acc = curr;
    }
    return acc;
}, '')

console.log(longestStr);

// - Find all the even numbers

const evenNums = numbers.reduce((acc, curr) => {
    curr % 2 === 0 && acc.push(curr);
    return acc;
}, [])
console.log(evenNums)

// - Find all the odd numbers

const oddNums = numbers.reduce((acc, curr) => {
    curr % 2 === 1 && acc.push(curr);
    return acc;
}, [])
console.log(oddNums);

// - Place a new word at the start of the array use (unshift)

strings.unshift('Hello');

// - Make a subset of numbers array [18,9,7,11]

let firstInd = numbers.indexOf(18);
let secondInd = numbers.indexOf(11);
console.log(numbers.slice(firstInd, secondInd + 1));

// - Make a subset of strings array ['a','collection']

let firstStrInd = strings.indexOf('a');
let secondStrInd = strings.indexOf('collection');
console.log(strings.slice(firstStrInd, secondStrInd + 1));

// - Replace 12 & 18 with 1221 and 1881

// let numbersArr = numbers.join(' ').replace(12, 1221).split(' ').map(Number);
// console.log(numbersArr);
// let numbersArr2 = numbersArr.join(' ').replace(18, 1881).split(' ').map(Number);
// console.log(numbersArr2);

let replacedArr = numbers.map(el => {
    if(el == 12){
        return 1221
    }
    if(el == 18){
        return 1881
    }
    return el;
})

console.log(replacedArr)

// - Replace words in strings array with the length of the word

let replacedStr = strings.map(el =>  el.length);
console.log(replacedStr);

// - Find the sum of the length of words using above question

let lengthSum = replacedStr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0)

console.log(lengthSum);

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// - Find all customers whose firstname starts with 'J'

console.log(customers.filter(el => el.firstname.startsWith('J')));

// - Create new array with only first name

console.log(customers.reduce((acc, curr) => {
    acc.push(curr.firstname);
    return acc;
}, []))

// - Create new array with all the full names (ex: "Joe Blogs")

console.log(customers.reduce((acc, curr) => {
    acc.push(curr.firstname + ' ' + curr.lastname);
    return acc;
}, []))

// - Sort the array created above alphabetically

console.log(customers.sort((a, b) => {
    if(a.firstname > b.firstname){
        return 1;
    }
    else if(a.firstname < b.firstname){
        return -1;
    }
    else{
        return 0;
    }
}));

// - Create a new array that contains only user who has at least one vowel in the firstname.

const filteredArr = customers.filter(el => {
    if(el.firstname.includes('a') || el.firstname.includes('e') || el.firstname.includes('i') || el.firstname.includes('o') || el.firstname.includes('u')){
        return el;
    }
})

console.log(filteredArr);