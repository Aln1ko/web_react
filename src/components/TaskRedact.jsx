import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const TaskRedact = ({editTask, taskToRedact, setVisible}) => {
    const [task, setTask] = useState({
        id: taskToRedact.id,
        tittle: taskToRedact.tittle,
        body:  taskToRedact.body
    });

    return (
        <div>
            <form>
                <MyInput
                    value = {task.tittle}
                    onChange = {e => setTask({ ...task, tittle: e.target.value })}
                    type = 'text'
                    placeholder = "Задача"
                />
                <MyInput
                    value = {task.body}
                    onChange = {e => setTask({ ...task, body: e.target.value })}
                    type = 'text'
                    placeholder = "Опис задачі"
                />
                <MyButton onClick = {(e) => { e.preventDefault();
                                            editTask(task);
                                            setVisible(false); } }>
                 Редагувати задачу</MyButton>
            </form>

        </div>
    )
};

export default TaskRedact ;
