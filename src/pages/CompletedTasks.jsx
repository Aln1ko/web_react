import '../styles/App.css';
import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import MyButton from '../UI/button/MyButton';
import TaskForm from '../components/TaskForm';
import MyModal from '../UI/modalWindow/MyModal';
import TaskRedact from '../components/TaskRedact';
import MyHeader from '../UI/header/MyHeader';

function CompletedTasks() {
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

  const[modal, setModal] = useState(false);
  const[visibleRedact, setVisibleRedact] = useState(false);

  const[taskToRedact, setTaskToRedact] = useState({id:0, tittle: '',
                                                   body: ''});

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

  const editTask = (rtask) => {
    // Создаем новый массив задач с обновленными данными
    const updatedTasks = tasks.map( task => {
        if (task.id === rtask.id) {
             return rtask;
        }
        return task;
    });
    SetTasks( updatedTasks ) ;
  }

  const ModalRedact = () => {
    if(!visibleRedact) return null;
    return(
        <MyModal modal = {visibleRedact} setVisible={setVisibleRedact}>
           <TaskRedact editTask = {editTask} taskToRedact = {taskToRedact}
                       setVisible={setVisibleRedact}></TaskRedact>
        </MyModal>
    )
 }


  return (
    <div className='App'>
       <MyHeader>
        <MyButton style = {{ marginLeft:15,color: 'rgb(255,255,255)',border: '1px solid rgb(255, 255, 255)'}} onClick = {() => setModal(true)}>
          Додати задачу
        </MyButton>
      </MyHeader>

        <MyModal  modal={modal} setVisible = {setModal}>
          <TaskForm create = {createTask} modal = {modal}/>
        </MyModal>

        <ModalRedact />

          {
          tasks2.length !== 0 ? (
            <TaskList   remove = {removeTask2} tasks = {tasks2} tittle="Виконані задачі" />
            ):

            (<h1 style={{ textAlign: 'center' }}>Задач немає</h1>)
          }

    </div>
  );
}

export default CompletedTasks;
