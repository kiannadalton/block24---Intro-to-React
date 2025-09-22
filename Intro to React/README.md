# Intro to React

This is the first assignment where React is utilized in conjunction with Vite.
Deployed React application: puppypalsassignment.netlify.app

## Learning Lessons:

The biggest learning lesson was understanding how useState works, especially how it relates to ternary operators. as I was going through this assignment, I found an error in the instructions. They stated that the ternary should be tied to the setFeatPupId. This caused issues when the page was initially rendered since it was considered always true. As a result, there would be an error as featuredPup tried to find data on 'undefined'. I fixed this by trading out setFeatPupId with featPupId and this solved the issue.

After further looking into the useState hook, I noted that the parameters are [(currentValue), (functionToChangeValue)]. We'd want to check the boolean based on the currentValue, and not the paramater that changes is the value.

## Demonstrates use of:

useState, onClick, .map, .find, ternary operator
