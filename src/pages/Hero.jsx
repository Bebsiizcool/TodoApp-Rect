import React from 'react'
import { useState } from 'react'
const Hero = () => {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const addtodo = () => {
    settodos([
      ...todos, {
        id: Date.now(),
        text: todo,
        completed: false
      }
    ])

    settodo("")
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-12">
        <h1 className='text-5xl font-medium '>Create Your Todos</h1>
        <div >
          <input className='bg-amber-50 relative text-gray-500 w-3xl mt-5 p-3' type="text" placeholder='Enter your Todos' value={todo}
            onChange={(e) => settodo(e.target.value)} />
          <button onClick={addtodo} className='p-3 bg-blue-900 hover:cursor-pointer'>ADD</button>
        </div>

        <div className=' bg-blue-300 w-4xl flex  mt-5'>
          <h1 className='text-2xl p-4'>Your Todos</h1>
          <div>
  {todos.map((item) => (
    <div key={item.id}>
      <span>{item.text}</span>

      
    </div>
  ))}
</div>
        </div>
      </div>

    </div>
  )
}

export default Hero
