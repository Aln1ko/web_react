import React from "react";
import TaskItem from './TaskItem';

const TaskList = ({tasks, tittle, remove, execute, setTaskToRedact, isVisible}) =>{
    return(
        <div>
            <h1 style = {{textAlign:'center'}}>
                {tittle}
            </h1>
            {tasks.map((task,index) =>
                <TaskItem setTaskToRedact ={setTaskToRedact} execute = {execute} remove = {remove}
                          number = {index + 1} task = {task}  isVisible = {isVisible} key = {task.id}/>
            )}
        </div>
    )
}

export default TaskList;
