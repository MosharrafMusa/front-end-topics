import React, {useState} from 'react';



const CounterHook = ({initialCount})=>{
 const [count, setCount] = useState(initialCount)

 function handleClick(){
     setCount(count + 1)
 }
    return(
     <>
     <h3>React Counter: {count} </h3>
     <button onClick={handleClick}>Increase</button>
     </>
    )
}

export default CounterHook;