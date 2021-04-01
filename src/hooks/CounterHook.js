import React, {useState, useContext} from 'react';

import {ThemeContext} from '../App'

const CounterHook = ({initialCount})=>{
 const [count, setCount] = useState(initialCount)
 const style = useContext(ThemeContext)

    return(
     <>
     <h3>React Counter: {count} </h3>
     <button style={style}
     onClick={()=>setCount(prevCount=>prevCount + 1)}>Increase</button>
     </>
    )
}

export default CounterHook;