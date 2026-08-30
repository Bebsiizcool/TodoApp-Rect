import React from 'react'
import { useState, useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
const Hero = () => {
  
  const [input, setinput] = useState("")
  const [main, setmain] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(main));
  }, [main])
  
  
const submithandler = (e)=>{
  e.preventDefault()
  
  if (input.trim() === ""){ toast.error("Please enter a Todo!")
    return
  } 

  setinput("")
  setmain([...main,{input}])
}

const deletehandler = (i)=>{
  let deleteii = [...main]
  deleteii.splice(i,1)
  setmain(deleteii)
}

let tasks = <h1> No Tasks Available</h1>

if(main.length>0  ){
tasks = main.map((t,i)=>{
    return(
      <div className='bg-gray-200 border-2 border-amber-50 m-4 text-black items-center' >
        {/* <h1 className=' text-2xl font-medium mt-10'>Your Todos:</h1> */}
        <li key={i} className='p-3 flex items-center justify-between' >
        {t.input}
         <MdDelete onClick={()=>{deletehandler(i)}}/>
        </li>

      </div>
    )
})

}

  return (
    <div className='flex justify-center items-center '>
      
      <div className="flex flex-col p-12 mt-20 justify-center items-center">
        <h1 className='text-6xl font-medium '>Create Your Todos</h1>
        <div >
          <form  onSubmit={submithandler} >

          <input className='bg-amber-50 relative text-black w-3xl mt-5 p-3'
           type="text" 
           placeholder='Enter your Todos' 
           value={input}
           onChange={(e)=> setinput(e.target.value)}
           
            />

          <button className='p-3 bg-blue-900 hover:cursor-pointer'>ADD</button>
          </form>
        </div>
         

        <div className=' bg-slate-500 w-4xl m-10 flex flex-col '>

            <ul>
              <div className='text-center p-4 '>
            {tasks}
            </div>
          </ul>
          <div>
          

          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Hero
