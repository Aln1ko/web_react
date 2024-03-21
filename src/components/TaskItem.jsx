import React from "react";
import MyButton from "../UI/button/MyButton";
import '../styles/TaskItem.css';
import MyModal from "../UI/modalWindow/MyModal";
import TaskForm from "./TaskForm";

const TaskItem = (props) =>{
    if(props.execute){
        return(
            <div className='task'>
                <div className='task_content'>
                    <strong>{props.number}. {props.task.tittle}</strong>
                    <div>
                        {props.task.body}
                    </div>
                </div>

                <div className="task_buttons">
                    <div className='task_execute'>
                        <MyButton onClick = {()=>props.execute(props.task)}>
                            Виконати
                        </MyButton>
                    </div>

                    <div className='task_redact'>
                        <MyButton onClick = { () => props.redact(props.task)}>
                            Редагувати
                        </MyButton>

                    </div>

                    <div className='task_delete'>
                        <MyButton onClick = {()=>props.remove(props.task)}>
                            Видалити
                        </MyButton>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className='task'>
                <div className='task_content'>
                    <strong>{props.number}. {props.task.tittle}</strong>
                    <div>
                        {props.task.body}
                    </div>
                </div>
                <div className="task_buttons">
                    <div className='task_redact'>
                        <MyButton onClick = { () => props.redact(props.task)}>
                            Редагувати
                        </MyButton>

                    </div>
                    <div className='task_delete'>
                        <MyButton onClick={() => props.remove(props.task)}>
                            Видалити
                        </MyButton>
                    </div>
                </div>
            </div>
        );
    }
}
export default TaskItem;
