import { useCallback, useState } from "react";
import Todos from "./calc";

const Form = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    console.log("func");
    
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div className="flex gap-5 mt-10">
        Count: {count}
        <button
          className="px-5 py-2 bg-black rounded text-white"
          onClick={increment}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Form;
