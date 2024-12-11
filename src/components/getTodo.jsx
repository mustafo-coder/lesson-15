import React from 'react'
import useGetInputValues from '../hooks/useGetInputValues'

const GetTodo = () => {
  const {values, handleChange, resetHandler} = useGetInputValues({
    name: "",
    email: "",
    password: ""
  })
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(values);
    resetHandler()
  } 
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input className='border mb-2 ms-2 rounded px-3 py-1' value={values.name} onChange={handleChange} type="text" name="name" />
        <input className='border mb-2 ms-2 rounded px-3 py-1' value={values.email} onChange={handleChange} type="email" name="email" />
        <input className='border mb-2 ms-2 rounded px-3 py-1' value={values.password} onChange={handleChange} type="password" name="password" />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default GetTodo