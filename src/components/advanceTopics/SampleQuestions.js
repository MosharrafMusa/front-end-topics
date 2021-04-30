import React from 'react'
import Test1 from './Test1'



export const SampleQuestions = () => {
    const samples=[
        {id: 1,
        ques: "Question 1",
        text: "answer1 "
        },
        {id: 1,
        ques: "Question 2",
        text: "answer2 "
        },
        {id: 1,
        ques: "Question 3",
        text: "answer3 "
        }
    ]
    return (
        <div>
           {samples.map(sample=>{
            <Test1 {...sample}></Test1>
           })} 
        </div>
    )
}

