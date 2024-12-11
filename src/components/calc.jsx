import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p className="border p-5 mb-2 bg-red-200" key={index}>{todo}</p>;
      })}
      <button className="mb-5 px-5 mx-auto rounded border py-2 bg-blue-500 text-white" onClick={addTodo}>Add Todo</button>
    </>
  );
}

export default memo(Todos);