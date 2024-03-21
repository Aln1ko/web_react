import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const TaskForm = ({create}) =>{
    const [task, setTask] = useState({ tittle: '' , body:'' });

    const addNewTask = (e) =>{
        e.preventDefault()
        const newTask = {
            ...task, id: Date.now()
        }
        create(newTask)
        setTask({ tittle: '', body: ''});
    }

    return(
        <div>
            <form>
            <MyInput
                value = {task.tittle}
                onChange = {e => setTask({...task,tittle: e.target.value})}
                type='text'
                placeholder = "Задача">
            </MyInput>
            <MyInput
                value = {task.body}
                onChange = {e => setTask({...task,body: e.target.value})}
                type='text'
                placeholder = "Опис задачі">
            </MyInput>
            <MyButton onClick = {addNewTask}>Додати задачу</MyButton>
            </form>
        </div>
    )
};

export default TaskForm;
