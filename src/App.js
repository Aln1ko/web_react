import './styles/App.css';
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import TaskForm from './components/TaskForm';
import MyModal from './UI/modalWindow/MyModal';


function App() {
  const[tasks,SetTasks] = useState([
    {id:1, tittle: 'Task 1',body:'Describtion'},
    {id:2, tittle: 'Task 2',body:'Describtion'},
    {id:3, tittle: 'Task 3',body:'Describtion'}
  ])

  const[tasks2,SetTasks2] = useState([
    {id:4, tittle: 'Задача 1',body:'Describtion'},
    {id:5, tittle: 'Задача 2',body:'Describtion'},
    {id:6, tittle: 'Задача 3',body:'Describtion'}
  ])

  const[modal,setModal] = useState(false);
  const[redact,setRedact] = useState(false);


  const createTask = (newTask) => {
    SetTasks([...tasks,newTask])
    setModal(false)
  }

  const removeTask = (task) =>{
    SetTasks(tasks.filter(t => t.id !== task.id))
  }

  const removeTask2 = (task) =>{
    SetTasks2(tasks2.filter(t => t.id !== task.id))
  }

  const executeTask = (task) =>{
    const taskToExecute = tasks.find(t => t.id === task.id)
    const updatedTasks = tasks.filter(t => t.id !== task.id);
    SetTasks(updatedTasks)
    SetTasks2([...tasks2,taskToExecute])
  }

  const redactTask = (task)=>{
    //const taskToRedact = tasks.find(t => t.id === task.id)
    setRedact(true)
  }

  return (
    <div className='App'>
        <MyButton style = {{marginTop:15, marginLeft:15}} onClick = {() => setModal(true)}>
          Додати задачу
        </MyButton>

        <MyModal modal={modal} setVisible = {setModal}>
          <TaskForm create = {createTask} modal = {modal}/>
        </MyModal>

        <MyModal modal = {redact} setVisible={setRedact}>
          <TaskForm create = {redactTask} />
        </MyModal>

        {
          tasks.length !== 0 || tasks2.length !== 0 ? (
          <>
            {tasks.length !== 0 && (
              <TaskList redact ={redactTask} execute = {executeTask} remove = {removeTask} tasks = {tasks} tittle="Активні задачі" />
            )}
            {tasks2.length !== 0 && (
              <TaskList   remove = {removeTask2} tasks = {tasks2} tittle="Виконані задачі" />
            )}
          </>
          ) : (
          <h1 style={{ textAlign: 'center' }}>Задач немає</h1>
          )
       }

    </div>
  );
}

export default App;
