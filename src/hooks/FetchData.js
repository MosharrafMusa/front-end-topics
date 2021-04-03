import React, {useState, useEffect} from 'react'
import axios from 'axios'

const FetchData = () => {
    const [todos, setTodos]= useState()
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/todos`)
           .then(res=>{
             const responedTodos = res.data
             setTodos(responedTodos)
           })
  
    }, [])
    return (
        <div>
            <h2>Todo list</h2>
            {todos && todos.map(todo=>{
                const {id, userId, title}= todo;
                return (
                    <div key={id}>
                        <h4>{title}</h4>
                        <h5>{userId}</h5>

                    </div>
                )
            })}
        </div>
    )
}

export default FetchData
