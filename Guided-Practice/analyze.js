const { bookText } = require("./book-text");

/* Your code here! */

// 1. How many tokens are in `bookText`?
const booktokens = bookText.length;
console.log(`There are ${booktokens} in bookText.`);

// 2. What is the total number of characters in `bookText`?
const joinedBookText = bookText.join("");
const charCount = joinedBookText.length;
console.log(`There are ${charCount} characters in bookText.`);

// 3. What is the mean length of a token?
const meanLength = Math.round(charCount / booktokens);
console.log(`The mean length of tokens in bookText is ${meanLength}.`);

// 4. What is the length of the longest token?
function longestToken(array) {
  let longest = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest.length;
}

console.log(longestToken(bookText));

// 5. How many tokens are longer than 4 characters?
function longerThanFour(array) {
  const newArray = array.filter((token) => token.length > 4);
  return newArray.length;
}

console.log(longerThanFour(bookText));

// 6. How many tokens start with the letter "s" (case-insensitive)?
function startWithLetter(array, letter) {
  const letterArray = array.filter(
    (token) => token[0].toLowerCase() === letter.toLowerCase()
  );
  return letterArray.length;
}

console.log(startWithLetter(bookText, "s"));

// 7. Do more tokens start with the letter "s" or "t"?
function moreTokensStart(array, letter1, letter2) {
  const firstLetter = startWithLetter(array, letter1);
  const secondLetter = startWithLetter(array, letter2);
  if (firstLetter > secondLetter) {
    return `More tokens start with ${letter1}, as there are ${firstLetter} compared to ${letter2} with only ${secondLetter} tokens.`;
  } else {
    return `More tokens start with ${letter2}, as there are ${secondLetter} compared to ${letter1} with only ${firstLetter} tokens.`;
  }
}

console.log(moreTokensStart(bookText, "s", "t"));

// 8. What are the 5 most frequent tokens that appear in the text, and how many times do they each appear?

function tokenFreq(array) {
  let newObj = {};
  for (let key of array) {
    if (!newObj[key]) {
      newObj[key] = 1;
    } else {
      newObj[key] += 1;
    }
  }
  return newObj;
}

function findTopFive(array) {
  const freq = tokenFreq(array);
  // Object.entries makes each key: value into an array of smaller arrays [key, value], [key, value]. That is why sort is t2[1] instead of t2. We need to access the value portion of the smaller arrays we created to help sort.
  let sortedObj = Object.entries(freq).sort((t1, t2) => {
    return t2[1] - t1[1];
  });

  //takes first 5 of the sorted array, then joines them with a break (\n)
  return sortedObj.slice(0, 5).join("\n");
}

console.log(`The top 5 most common tokens are: \n${findTopFive(bookText)}`);

// 9. What are the 5 most frequent characters that appear in the text, and how many times do they each appear?

const charArray = joinedBookText.split("");
console.log(`The top 5 most common tokens are: \n${findTopFive(charArray)}`);

// 10. How many tokens do not contain any vowels?
function dontContainVowels(token) {
  let vowels = "aeiou";
  for (let char of token) {
    let lowChar = char.toLowerCase();
    if (vowels.includes(lowChar)) {
      return false;
    }
  }

  //only returns true if all chars pass as not being vowel.
  return true;
}

function filterVowelsOut(array) {
  return array.filter(dontContainVowels).length;
}

console.log(filterVowelsOut(bookText));
