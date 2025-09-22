import { useState } from "react";
import { puppyList } from "./data";

function App() {
  //puppyList is the default value. puppies is the value I'm storing, setPuppues is a function I can use to reset the value (puppies).
  const [puppies, setPuppies] = useState(puppyList);
  // setting default value to null helps let me conditionally render this
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div>
      <h1>Puppy Pals</h1>
      {/* This a shortcut to conditionally render. If featPupId is true, it renders the right code. If it's not true, it's considered false and renders nothing. */}{" "}
      {featPupId ? (
        <div className="singlePup">
          <h3>Name: {featuredPup.name}</h3>
          <p>Email: {featuredPup.email}</p>
          <p>
            Are they cute?{" "}
            {featuredPup.isCute ? <span>Yes</span> : <span>No</span>}
          </p>
          <p>Age: {featuredPup.age}</p>
        </div>
      ) : (
        <p>Click on a puppy to see more!</p>
      )}
      <h2>Available Puppies:</h2>
      <div className="allPups">
        {puppies.map((puppy) => {
          return (
            <p
              className="puppyName"
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
