import "./App.css";
import * as React from "react";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [list, setList] = React.useState([]);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addElementHandler = () => {
    setList([...list, inputValue]);
    setInputValue("");
  };

  const removeElementHandler = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div className="App">
      <div id="inputRowContainer">
        <input type={"text"} value={inputValue} onChange={inputChangeHandler} />
        <button onClick={addElementHandler}>Add</button>
      </div>
      <div id="listContainer">
        <ul>
          {list.map((value: string, index: number) => {
            return (
              <li
                onClick={() => {
                  removeElementHandler(index);
                }}
                key={"element_" + index}
              >
                {value}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
