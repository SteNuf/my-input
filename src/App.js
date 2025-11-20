import { useState } from "react";
import "./App.css";

//UseStateHook:
function ButtonUseState() {
  const [stateCounter, setStateCounter] = useState(0);

  function onHandleClick() {
    setStateCounter(stateCounter + 1);
  }
  return <button onClick={onHandleClick}>{stateCounter}</button>;
}

function Input({ inputValue, handleInputChange, handleCheckboxChange }) {
  return (
    <div>
      <input onChange={handleInputChange} />
      <input onChange={handleCheckboxChange} type="checkbox" />
      {inputValue}
    </div>
  ); //Es wird immer bei Inputeingaben eine onchange Funktion erstellt.
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false); // Daten aus dem Input gespeiuchert.

  function handleInputChange(changeEvent) {
    console.log(changeEvent.target.value);
    setInputValue(changeEvent.target.value);
    console.log(inputValue);
  }

  function handleCheckboxChange(changeEvent) {
    console.log(changeEvent.target.checked);
    setCheckboxValue(changeEvent.target.checked);
    console.log(checkboxValue);
  }

  return (
    <>
      <ButtonUseState />
      <Input
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        handleCheckboxChange={handleCheckboxChange}
      />
    </>
  );
}

export default App;
