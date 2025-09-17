# Block 24 Workshop: Puppy Pals

In this workshop, we will learn the basics of manipulating data in React. So far, we have used React via a CDN. But from now on, we will use npm to create our front-end React applications.

Be aware that these projects will use a few more files than we have used before. But, do not worry. All the complicated setup has already been done. And, we need to work in only one directory.

The [React documentation](https://react.dev/learn) recommends using a framework like Remix or Next JS to start a project. Although both are terrific frameworks, we do not yet need that much complexity in our applications. So instead, we will use a tool named Vite to help us build our project.

## What is Vite?

Vite uses tools in the background to bundle all our JavaScript files together, to transpile our JavaScript code, to manage packages that we might download through npm, and more.

In this workshop, we will use a list of furry friends as our data. And, we will learn how to work with the `useState` hook to render that data in the browser.

## Steps

- [Scaffold React App](#scaffold-react-app)
- [Puppy Data with useState](#puppy-data-with-usestate)
- [Select a Featured Puppy](#select-a-featured-puppy)
- [Adding CSS](#adding-css)
- [Wrapping Up](#wrapping-up)

### Scaffold React App

#### Create the React Application

- In your terminal, navigate to the location where you want your application to live.
- In your terminal, run the following code:
  - `npm create vite@latest`
- Note that a new folder gets created and that it contains your React application.
- Note that your terminal prompts you to provide the application name. Name the project anything that you want.
- When prompted to select a framework, select React.
- When prompted to select a variant, select JavaScript.
- In your terminal, run the following commands:
  - `cd your-app-name`
  - `npm install`
  - `code .`
- Note that the preceding commands move you into your application's directory, install the dependencies, and then open the project in VS Code.

#### Familiarize Yourself with the Directory Structur

Examine the structure of the project.

Notice that the structure includes a lot. Specifically, it includes an HTML file, some package files, a public folder, a `src` directory, and a `vite.config` file. The `src` directory is where you will work.

#### Start the Application

- Examine the `package.json` file. Find the `"scripts"` property, and then notice what it includes:
  - `dev`
  - `build`
  - `preview`
- Be aware that for developing your application, you want to run the `dev` script.
- In your terminal, in the current project directory, run:
  - `npm run dev`
- Notice that the server starts in development mode.
- Follow the localhost URL that appears in the terminal. Then observe the Vite application, which contains a prebuilt counter example.
- Select the button, and then observe the count increase.

#### Refactor the Starting Point

- Delete the prebuilt counter example as follows: delete all the JSX code except for one parent `div` element.
  - Remember that all JSX code must be returned within one parent element or fragment.
- Delete the line that includes the `useState` hook.
- Delete all the unused `import` statements.
- Save the application, and then go to your browser. Notice the empty page, and then congratulate yourself.

### Puppy Data with useState

#### Add Data

Now that we have the application up and running, let us add some data that we can then render to the browser.

To do so, complete the following steps:

- In the `src` folder, create a file named `data.js`.
- In the `data.js` file, paste the following code:

```js
export const puppyList = [
  {
    id: 1,
    name: "Sir Waggington",
    email: "sir-wag@email.com",
    isCute: true,
    age: 5,
    ownerId: 1,
    tricks: [
      { id: 2, title: "Lay Down" },
      { id: 3, title: "Jump through flaming hoop" },
    ],
  },
  {
    id: 2,
    name: "Fiona Penny Pickles",
    email: "pick-your-pennies@email.com",
    isCute: true,
    age: 6,
    ownerId: 1,
    tricks: [],
  },
  {
    id: 3,
    name: "Professor Wagglesworth",
    email: "waggie@email.com",
    isCute: true,
    age: 6,
    ownerId: 2,
    tricks: [{ id: 1, title: "Sit" }],
  },
  {
    id: 4,
    name: "Sergeant Barkowitz",
    email: "the-sarge@email.com",
    isCute: true,
    age: 4,
    ownerId: 2,
    tricks: [{ id: 2, title: "Lay Down" }],
  },
  {
    id: 5,
    name: "Captain Sniffer",
    email: "capn-sniff@email.com",
    isCute: true,
    age: 7,
    ownerId: 3,
    tricks: [],
  },
  {
    id: 6,
    name: "Miss Furbulous",
    email: "miss-furby@email.com",
    isCute: true,
    age: 1,
    ownerId: 3,
    tricks: [],
  },
  {
    id: 7,
    name: "Alfred von Wigglebottom",
    email: "alfie@email.com",
    isCute: true,
    age: 2,
    ownerId: 3,
    tricks: [],
  },
];
```

- Inspect the data. Specifically, notice an array of puppy objects. Each puppy has `id`, `name`, `email`, `isCute`, `age`, `ownerID`, and `tricks` properties. Also, notice that we use ES6 syntax and that we export the array out of this file.
- Import the array into the `App.jsx` component. To do so, at the beginning of your `App.jsx` file, import the `puppyList` array by adding the following line of code:
  - `import {puppyList} from './data.js'`

#### Use the Data in React

Let us now go step by step and methodically examine the puppyList array:

- Before the `return` statement in the App component, log the `puppyList` array to the console:
  - `console.log(puppyList)  `
- Note that in the browser console, you should be able to observe the array of puppies. (You might also observe the logs displaying twice. That is because of `StrictMode`).
- Note that you can now access the `puppyList` array in your React component. But, the real strength of React is that it, well, reacts to changes in the data of your application. In fact, React can intelligently reflect the updated data. To use this feature of a React component, you need to use the `useState` hook.
- At the beginning of your `App.jsx` file, import the `useState` hook by adding the following line:
  - `import { useState } from 'react'`
- Invoke the hook at the top level, inside the App component (and before the `return` statement). Remember that `useState` returns an array. And, the array contains two elements. The first is the value that you are storing. The second is a function, which you can use to reset the value. You can deconstruct both of those values from the array, ending up with this:
  - `const [puppies, setPuppies] = useState(puppyList)`
- Notice that you have passed the `puppyList` array from the `data.js` file as the default value.
  - Important: Always remember to pass your `useState` hook a default value. This will come into play later.
- If your `console.log`statement still exists, change it to log the `puppies` array from the `useState` hook.
- Note that you are now ready to work with the data in your application.

#### Map Over the Data

Throughout your life as a React developer, a common pattern that you will use is mapping over lists (or arrays) of data.

You will now do that with your `puppies` array:

- Inside your `div` element, add a set of braces (`{ }`).
  - Note: The braces allow you to use JavaScript, or escape into JavaScript, and use things like ternary operators and array methods. You will use the `Array.map()` method to map over your `puppies` array. And, you will return some JSX code for each puppy.
- For each puppy, return a `p` tag with the puppy name rendered. To do so, inside the empty set of braces, map over the `puppies` array, as the following code shows:

```js
{
  puppies.map((puppy) => {
    return <p>{puppy.name}</p>;
  });
}
```

- Save your work, and then go to the browser.
- Notice a list of the puppy names rendered to the screen. Congratulations, you successfully implemented your first `map()` statement in React.
- Observe your browser's console. Notice a warning:
  - Warning: Each child in a list should have a unique "key" prop.
- Note that although this warning will not break your application, you should take care of it.
- To do so, note that when working with lists of data, React needs a key to maintain the integrity of the order of elements. And, the key should be a unique identifier that comes directly from your data. In this case, the puppies each have a unique ID. So, you will use that as your key.

### Select a Featured Puppy

#### Add More Functionality

- Now that you have a list of puppies, note that you will add the following functionality:
  - Clicking a puppy from the list generates a detailed view of that puppy elsewhere in the application.
- To keep track of another piece of data in your application, create a new variable to store the ID of the selected puppy. As you did with `puppyList`, you will use the `useState` hook. Name this state variable `featPupId`:
  - `const [featPupId, setFeatPupId] = useState(null)`
- Notice that you set the default value to `null`. So, you can conditionally render an element in your JSX code.
- Note that the next problem you need to solve is this: how do you set this ID?
  - Remember that with vanilla JavaScript and the DOM, you had to reference a DOM element, add an event listener to it, pass it a callback function, and more. That was lots of work. But, you can more easily achieve the same functionality with React.
- Examine the `p` tag in your `map()` statement. Notice the `key` property. In a similar way, you can add an `onClick` handler to the element itself. Implement that now, as the following code shows:
  - `<p onClick={} key={puppy.id}>{puppy.name}</p>`
- In the preceding code, notice that the braces indicate escaping into JavaScript.
- Note that your server might have stopped working. That is because you need to pass a value to `onClick`. Specifically, you need to pass a function—just like you did with `addEventListener`—that defines what to do when someone clicks the element. And as with the vanilla DOM, you should not invoke this function. Instead, React will do that when someone clicks the element.
- Note that you can write the syntax for this callback in two ways:
  - As an arrow function:`onClick={()=>{}}`
  - As a function that appears before the `return` statement and then gets passed to `onClick`
- For now, keep things simple by passing the following arrow function to `onClick`:
  - `onClick={()=>{}}`
- Inside the body of the array function, add a `console.log` statement (to find out if you can display puppy.id):
  - `{()=>{console.log("puppy id: ", puppy.id)}}`
- Refresh the page, click a puppy's name, and observe the ID logged to your browser console.
- Note that you have now confirmed that your click handler works and that you can access the ID instead of logging it to the console. So, you will put it into the state.
- Call `setFeatPupId`, passing it the `puppy.id` that you just logged:
  - `onClick={()=>{ setFeatPupId(puppy.id)}}`
- Note that you are now tracking the ID via `useState`, so you can render the ID somewhere in the application.
- Somewhere in the application (outside the map and inside the parent `div` element) add a `p` tag, and render `featPupID` inside it:
  - `{featPupId}`
- Click various names, and observe the ID change for each.
- Take this a step further by conditionally rendering the `p` tag if `featPupId` is not null:
  - `{ featuPupID && <p>{ featPupId }</p> } `
- Click a couple of puppy names, and observe the featured ID change accordingly. But, keep in mind that this is not the envisioned functionality. Instead, you want to use the ID to reference the puppy in the list with that data. You will do so next.

#### Render the Puppy Data

Now that you have a dynamically changing ID, you will use more JavaScript and `featPupId` to find the correct puppy in the `puppies` array. To do so, think about the lifecycle of the component. Whenever a state change occurs, React re-renders the entire component. So, you can use the lifecycle to evaluate some JavaScript.

To do so, complete the following steps:

- After the click handlers but before the return statement, create a variable named featuredPup. Use the `Array.find()` method to find the puppy with a matching ID, as the following code shows:
  - `const featuredPup = puppies.find((pup)=> pup.id === featPupId)`
- Notice that the callback function passed to find searches for a puppy with an `id` property that matches the `featPupId` state value.
- On the next line, call `console.log()` for `featuredPup`.
- Check the browser. As you click different names, you should observe the featured puppy data logged to the console.
- Change your JSX code to display this information. Instead of rendering a `p` tag with the `id`, render a `div` tag with a list of info that comes from the puppy,

### Adding CSS

Now, you will add some finishing touches. Because you used Vite to use boilerplate for your application, some CSS is already written. Specifically, `App.css` and `index.css` already exist. Notice how they get imported into their respective files.

To link a CSS file to your React component, all you need to do is import the file path:

- `import './path-to-css.css'`

Remember the following final details:

- When writing JSX code, reference CSS classes by using className instead of class.
- Determine how you want to style your application, which is completely up to you.
- Use best practices when writing CSS and when implementing Flexbox or Grid.
- Make sure that you add and commit all your changes.

### Wrapping Up

Deploy your Application using Netlify
