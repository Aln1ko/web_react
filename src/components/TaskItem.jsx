//import React from 'react';
import MyButton from "../UI/button/MyButton";
import '../styles/TaskItem.css';

const TaskItem = ({setTaskToRedact, execute, remove, number, task, isVisible}) =>{
    if(execute){
        return(
            <div className='task'>
                <div className='task_content'>
                    <strong>{number}.  {task.tittle}</strong>
                    <div>
                        {task.body}
                    </div>
                </div>

                <div className="task_buttons">
                    <div className='task_execute'>
                        <MyButton onClick = {() => execute(task)}>
                            Виконати
                        </MyButton>
                    </div>

                    <div className='task_redact'>
                        <MyButton  onClick = {() =>{ setTaskToRedact(task);
                                                     isVisible(true)  } }>
                            Редагувати
                        </MyButton>

                    </div>

                    <div className='task_delete'>
                        <MyButton onClick = {() => remove(task)}>
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
                    <strong>{number}. {task.tittle}</strong>
                    <div>
                        {task.body}
                    </div>
                </div>
                <div className="task_buttons">
                    <div className='task_delete'>
                        <MyButton onClick={() => remove(task)}>
                            Видалити
                        </MyButton>
                    </div>
                </div>
            </div>
        );
    }
}
export default TaskItem;
