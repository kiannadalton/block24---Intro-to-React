const state = {
  people: [
    {
      id: 1,
      name: "Iain",
      email: "iain@example.com",
      distance: 10, //miles
      weight: 200, //lbs
    },
    {
      id: 2,
      name: "Luna",
      email: "luna@example.com",
      distance: 20, //miles
      weight: 155, //lbs
    },
    {
      id: 3,
      name: "Ashwin",
      email: "ashwin@example.com",
      distance: 1, //miles
      weight: 155, //lbs
    },
    {
      id: 4,
      name: "Jamie",
      email: "jamie@example.com",
      distance: 10, //miles
      weight: 227, //lbs
    },
  ],
  words:
    "Learning JavaScript for the first time can feel daunting, but it's an exciting journey. Start by understanding the fundamentals deeply: variables, data types, control structures, and functions. Practice consistently and experiment by building small projects to solidify your understanding. Beyond the technical skills, cultivate a mindset of continuous learning: technology evolves rapidly, and adaptability is crucial. Collaboration matters, so actively seek opportunities to work with peers. Don't fear failure; it's a part of growth. Embrace debugging as a valuable skill; errors are stepping stones to mastery. Leverage resources like documentation, tutorials, and online communities for support and learning from others' experiences. The instructors and mentors are great avenues to seek support from. Keep learning, collaborating, and embracing challenges — you're laying the groundwork for an exciting and impactful career.".split(
      " "
    ),
};

/**
 * 👉 STEP 1: Create a function called filterList with the following attributes
 *
 *
 * Type of function: curried, higher order
 *
 * @param {object[]} list - an array of objects
 * @returns {(key: string, itemToFilter: string) => object[]} a function that takes a key
 * and itemToFilter and returns an array of objects filtered by that criteria
 */

function filterList(list) {
  return (key, itemToFilter) => {
    return list.filter((item) => item[key] !== itemToFilter);
  };
}

//tests
// console.log(filterList(state.people)("id", 4));
// console.log(filterList(state.people)("name", "Luna"));

/**
 * 👉 STEP 2: Create a function called converter with the following attributes
 *
 * @param {Number} input - number to convert
 * @param {Number} rate - conversion rate
 * @returns {Number} - converted number
 */

function converter(input, rate) {
  //.toFixed(x) the x will say how many decimal places we go to
  // parseFloat since it's not a whole number
  return parseFloat((input * rate).toFixed(2));
}

/**
 * 👉 STEP 3: Create a function called milesToYards with the following attributes
 *
 * Type of function: partial application
 *
 * @param {Number} input - number to convert
 * @returns {Number} - converted number
 */

function milesToYards(input) {
  return converter(input, 1760);
}

// test
// console.log(milesToYards(2));

/**
 * 👉 STEP 4: Create a function called lbsToKg with the following attributes
 *
 * Type of function: partial application
 *
 * @param {Number} input - number to convert
 * @returns {Number} - converted number
 */

function lbsToKg(input) {
  return converter(input, 0.453592);
}

//test
// console.log(lbsToKg(10));

/**
 * 👉 STEP 4: Create a function called convertMilesFilterByYards with the following attributes
 *
 * Type of function: composition
 *
 * @param {object[]} list - an array of objects
 * @param {Number} yards - number of yards to filter by
 * @returns {object[]} - an array of objects filtered by yards provided
 */

function convertMilesFilterByYards(list, yards) {
  const newList = list.map((item) => {
    item.yards = milesToYards(item.distance);
    return item;
  });
  return filterList(newList)("yards", yards);
}

console.log(convertMilesFilterByYards(state.people, 1760));

/**
 *  What are the 5 most frequent words that appear in state.words, and how many times do they each appear?
 */

/**
 * getFrequency
 *
 * @param {object} frequencies - object holding the current frequencies
 * @param {object} key - name of the object key we want the frequency count for
 * @returns {object} - object holding the updated frequencies
 */

function getFrequency(frequencies, key) {
  //   if (!frequencies[key]) {
  //     frequencies[key] = 1;
  //   } else {
  //     frequencies[key] += 1;
  //   }

  //rewrite if / else as ternary conditional
  frequencies[key] = !frequencies[key] ? 1 : (frequencies[key] += 1);
  return frequencies;
}

/**
 * getTokenFrequency
 *
 * @param {string[]} list - array of strings
 * @returns {object} - object where each key is a word from the array given and the value is the frequency the word appeared
 */
function getTokenFrequency(list) {
  return list.reduce(getFrequency, {});
}

const freq = getTokenFrequency(state.words);
console.log("freq", freq);

const sortedTokens = Object.entries(freq).sort((t1, t2) => {
  return t2[1] - t1[1];
});

console.log(
  `The 5 most frequent words and their frequencies are: \n${sortedTokens
    .slice(0, 5)
    .join("\n")}`
);

module.exports = {
  filterList,
  milesToYards,
  lbsToKg,
  convertMilesFilterByYards,
  getTokenFrequency,
  fullList: state.people,
  tokens: state.words,
};
