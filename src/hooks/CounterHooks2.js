import React, {useState,useContext} from 'react'
import {ThemeContext} from '../App'

const CounterHooks2 = ({initialCount}) => {
    const [count, setCount]=useState(initialCount)
    const style = useContext(ThemeContext)

    function handleIncrease(){
        setCount(prevCount=>prevCount+1)
    }
    function handleDecrease(){
        setCount(prevCount=>prevCount-1)
    }
    return (
        <>
          <button style = {style} onClick={handleDecrease}>Decrease</button>  
          <span> {count} </span>  
          <button style = {style} onClick={handleIncrease}>Increase</button>  
        </>
    )
}

export default CounterHooks2
