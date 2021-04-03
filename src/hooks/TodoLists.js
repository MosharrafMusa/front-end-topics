import axios from 'axios'
import React, {useState, useEffect} from 'react'

const TodoLists = () => {
    const [todos, setTodos]= useState()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then((res)=>{
            const resTodos = res.data;
            setTodos(resTodos)
        });
    }, [])

    return (
        <div>
            <h3>Todo list</h3>
            {todos &&
            todos.slice(0, 15).map((todo =>{
                const {userId, title, id, completed}= todo;
                return(
                    <div style={{backgroundColor:'grey', margin: '10px', padding: '15px',width: '180px', display:'flex', flexWrap: 'wrap', flexDirection:'column'}} key ={id}>
                    <h4>Title: {title}</h4>
                    <h5>UserId: {userId} </h5>
                    <h5>ID: {id}</h5>
                    <h5>{`Completed: ${completed}`}</h5>
                    </div>
                )
            }))}
        </div>
    )
}

export default TodoLists
