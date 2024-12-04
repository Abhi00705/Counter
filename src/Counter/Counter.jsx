import React, { useState } from 'react'
import '../../Style.css';
const Counter = () => {
    const[count, setCount] = useState(0);

  return (
    <div className='mainContainer'>
    
        <span className='countContainer'>
            <h1>count:{count}</h1>
        </span>
        <span className='buttonContainer'>
            <button className='button' onClick={()=>setCount((preCount)=>preCount+1)}>+</button>
            
            <button className='button' onClick={()=>setCount((preCount)=>preCount-1)}>-</button>
        </span>
    </div>
  )
}

export default Counter