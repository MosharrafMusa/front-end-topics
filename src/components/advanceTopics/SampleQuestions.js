import React from 'react'
import Test1 from './Test1'

const sample=[
    {id: 1,
    title: "Question 1",
    text: "answer1 "
    },
    {id: 1,
    title: "Question 2",
    text: "answer2 "
    },
    {id: 1,
    title: "Question 3",
    text: "answer3 "
    }
]

export const SampleQuestions = (samples) => {
    return (
        <div>
           {samples.map(sample=>{
            <Test1 {...samples}></Test1>
           })} 
        </div>
    )
}

