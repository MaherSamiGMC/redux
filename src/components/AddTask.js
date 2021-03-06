import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTask } from '../redux/actions'

function AddTask() {
    const dispatch = useDispatch()
    const [input, setInput] = useState({})
    return (
        <div>
            <label> add new task </label>
            <input onChange={(e)=>setInput(e.target.value)} type="text"/>
            <button onClick={()=>dispatch(addNewTask({text:input,done:false,id:Math.random()}))} > submit </button>
        </div>
    )
}

export default AddTask
