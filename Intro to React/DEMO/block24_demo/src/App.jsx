import { useState } from "react";
import "./App.css";

function App() {
  const [pets, setPets] = useState([
    { id: 1, name: "Thor", type: "cat", age: "6" },
    { id: 2, name: "Loki", type: "cat", age: "8" },
    { id: 3, name: "Deku", type: "dog", age: "3" },
  ]);

  const [newPets, setNewPets] = useState([
    { id: 4, name: "Rocky", type: "dog", age: "3" },
    { id: 5, name: "Porky", type: "pig", age: "1" },
    { id: 6, name: "Spirit", type: "horse", age: "5" },
  ]);

  const addPet = () => {
    // grabs last pet in newPets array
    const newPet = newPets.pop();
    // ..pets keeps all pets originally in the setPets state, then adds the newPet
    setPets([...pets, newPet]);
  };

  return (
    <div>
      <h1>Block 24 Demo</h1>
      {
        // show message if newPets length === 0
        newPets.length === 0 ? (
          <p>No more pets to add</p>
        ) : (
          // otherwise show button
          <button onClick={addPet}>Add Pet</button>
        )
      }

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => {
            return (
              // the key is required and it needs to be unique.
              <tr key={pet.id}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>{pet.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
