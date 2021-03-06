import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doneTask, updateTask } from '../redux/actions'

function ListOfTasks() {
    const dispatch = useDispatch()
    const {tasks} = useSelector(state => state)
    const [input, setInput] = useState("")
    return (
        <div>
            <h1> tasks done </h1>
            <p>                 
                {tasks.filter(el=>el.done).map(el=> <div> <p style={{textDecoration:"line-through"}}> {el.text}  </p> <button onClick={()=>dispatch(doneTask(el.id))} > not done yet </button>   </div> )}
</p>
            <h1> tasks not done yet </h1>
            <p>
                {tasks.filter(el=>!el.done).map(el=> <div> <p> {el.text}  </p> <button onClick={()=>dispatch(doneTask(el.id))}> done </button> <input onChange={(e)=>setInput(e.target.value)} type="text" /> <button onClick={()=>dispatch(updateTask(el.id,input))} > submit </button>   </div> )}
            </p>
        </div>
    )
}

export default ListOfTasks
