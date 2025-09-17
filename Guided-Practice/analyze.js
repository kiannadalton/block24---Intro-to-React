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
function startWithLetter(array, letter){
    const letterArray = array.filter((token) => 
        token[0].toLowerCase() === letter.toLowerCase()
    );
    return letterArray.length;
};

console.log(startWithLetter(bookText, "s"));

// 7. Do more tokens start with the letter "s" or "t"?



// 8. What are the 5 most frequent tokens that appear in the text, and how many times do they each appear?

// 9. What are the 5 most frequent characters that appear in the text, and how many times do they each appear?

// 10. How many tokens do not contain any vowels?
