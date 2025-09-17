# block24---Intro-to-React

This block is an introduction to functional programming and React.

## Learning Lessons:

While completing the guided practice, there were two areas with learning lessons for me.

- Question 8 was an introduction to Object.entries, where I was able to console.log my way through understanding how that worked and it's valuable application for sorting.
- Question 10's answer from Fullstack was incorrect when I compared my answer. I found that they created their if statement similarly within a for..of loop. However, they missed two critical things:
  - They did not add a `toLowerCase()` to ensure the potential vowel could match, nor did they include capitalized vowels. This prevented their answer from capturing vowels due to capitalization.
  - Secondly, they did an if/else statement within the for...of loop. If char was true, `return false`, else `return true`. This was problematic because it still returns true even when it shouldn't. I moved my `return true` outside of the for...of loop so that if ALL chars did not match a vowel, THEN it would return true for the filter.

## Demonstrates use of:

Higher order functions, currying, partial application, .reduce, .filter, .slice, .map, .sort, Object.entries, .join, .split, .length, for loop, for...of loop, if/else, .toLowerCase(), template literals, .includes, arrays, objects, array of objects
