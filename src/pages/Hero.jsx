import React from 'react'
import { useState } from 'react'
const Hero = () => {

  const [todo, settodo] = useState("")    
  const [maintask, setMaintask] = useState([])

const deletehandler = (i)=>{
    let copytask  = [...maintask]
    copytask.splice(i)
      setMaintask(copytask)
    
}

  let rendertask = <h1> No Task Available</h1>
  
 if(maintask.length>0){
   rendertask = maintask.map((t,i) =>{
    return(
      <li key={i} className='flex justify-between items-center'>
      <div>
        <h5>{t.todo}</h5>
      </div>
      <button onClick={()=>{
        deletehandler(i)
      }}>delete</button>
      </li>
    )
  })
 }


 const onsubmit = (e)=>{
    e.preventDefault()
    setMaintask([...maintask,{todo}])
    settodo("")
    console.log(maintask)
 }

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-12">
        <h1 className='text-5xl font-medium '>Create Your Todos</h1>
        <div >
          <form onSubmit={onsubmit}>
          <input className='bg-amber-50 relative text-gray-500 w-3xl mt-5 p-3'
           type="text" 
           placeholder='Enter your Todos' 
           value={todo} 
           onChange={(e) => settodo(e.target.value)}
            />

          <button className='p-3 bg-blue-900 hover:cursor-pointer'>ADD</button>
          </form>
        </div>

        <div className=' bg-blue-300 w-4xl flex flex-col mt-5'>
          <h1 className='text-2xl p-4'>Your Todos</h1>

            <ul>
          {rendertask}
          </ul>
          <div>
          

          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero
