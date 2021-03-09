import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)
   

    return (
        <div>
            <h2>You have clicked <span>{count } </span>times</h2>
            <button onClick={()=>setCount(count+1)}>Click here</button>
        </div>
    )
}

export default Counter
