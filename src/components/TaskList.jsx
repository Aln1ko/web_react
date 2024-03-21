import React from "react";
import TaskItem from './TaskItem';

const TaskList = ({tasks,tittle,remove,execute,redact}) =>{
    return(
        <div>
            <h1 style = {{textAlign:'center'}}>
                {tittle}
            </h1>
            {tasks.map((task,index) =>
                <TaskItem redact ={redact} execute = {execute} remove = {remove} number = {index + 1} task = {task} key = {task.id}/>
            )}
        </div>
    )
}

export default TaskList;
