import React, { useMemo, useState } from 'react'
import Form from './components/form';
import GetTodo from './components/getTodo';

const App = () => {
  
  // const [text, setText] = useState("");
  // const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const id = formData.get("id")
  }
  // const Calculate = (count) => {
  //   console.log("ishladi");
  //   let sum = 0;
  //   for (let i = 0; i < 1000000; i++) {
  //     sum += count;
  //   }
  //   return sum;
  // };

  // const result = useMemo(() => Calculate(count), [count])

  return (
    <div>
      <GetTodo/>
      <Form/>
      <br />
      {/* <p>{result}</p> */}
      {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
    </div>
  )
}

export default App