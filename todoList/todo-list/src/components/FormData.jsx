import React from 'react'
import { useRef, useState, useEffect } from 'react';
import CustomAlert from './alert';
 const FormData = () => {
    const [submittedData, setSubmittedData] = useState({
      taskTitle: "no title",
      importancia:"normal" ,
      textDescription: "no descripion",
    });
    const [tasksToDo, setTasksToDo] = useState([]);
    const [tasksInProgress, setTasksInProgress] = useState([]);
    const [tasksDone, setTasksDone] = useState([]);
    const actualizarInfo = (event) => {
      const { name, value } = event.target;
      setSubmittedData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
    const submit = (event) => {
      event.preventDefault()
      setTasksToDo([...tasksToDo, submittedData]);
      setSubmittedData({
         taskTitle: "no title", 
         importancia: "normal", 
         textDescription: "no descripion" });
    }
    const moveIntoProgress = (taskIndex) => {
      const selectedTask = tasksToDo[taskIndex];
      const selectedTaskwithDate = {
        ...selectedTask ,
        postDate: new Date().toLocaleString('es-ES', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: undefined
        }),
      };
      setTasksToDo(tasksToDo.filter((_, index) => index !== taskIndex));
      setTasksInProgress([...tasksInProgress, selectedTaskwithDate]);
    }

    const moveIntoDone = (taskIndex) => {
      const selectedTask = tasksInProgress[taskIndex];
      const selectedTaskwithDate = {
        ...selectedTask ,
        doneDate: new Date().toLocaleString(),
      };
      setTasksInProgress(tasksInProgress.filter((_, index) => index !== taskIndex));
      setTasksDone([...tasksDone, selectedTaskwithDate]);
    }
    const toDoTaskRemove = (taskIndex) => {
      setTasksToDo(tasksToDo.filter((_, index) => index !== taskIndex));
    }
 
    const doneTaskRemove = (taskIndex) => {
      CustomAlert().then((result) => {
        if (result.isConfirmed) {
          setTasksToDo(tasksToDo.filter((_, index) => index !== taskIndex));
        }
      });
    };
    let tasksToDoConstructor = tasksToDo.map((task, index) => (
      <div key={index}>
      <h2>Title</h2>
      <h3 className='Titulo'>{task.taskTitle}</h3>
      <p className='Importancia'>importancia:{task.importancia}</p>
      <h2>Description</h2>
      <p className='Descripcion'>{task.textDescription}</p>
      <h4>Post Date:{new Date().toLocaleDateString()}</h4>
      <div className='divToDoButtons'>
      <button className='buttons' onClick={() => moveIntoProgress(index)}>Start</button>
      <button className='buttonRemove' id='buttonRemoveInToDo' onClick={() => doneTaskRemove(index)}>🗑</button></div>
      </div>
  ));
  let tasksInProgressConstructor = tasksInProgress.map((task, index) => (
    <div key={index}>
    <h2>Title</h2>
    <h3 className='Titulo'>{task.taskTitle}</h3>
    <p className='Importancia'>importancia:{task.importancia}</p>
    <h2>Description</h2>
    <p className='Descripcion'>{task.textDescription}</p>
    <h4>Start Date:{task.postDate}</h4>
    <button className='buttons' onClick={() => moveIntoDone(index)}>Done</button>
    </div>
));
let doneTasksConstructor = tasksDone.map((task, index) => (
  <div key={index}>
  <h2>Title</h2>
  <h3 className='Titulo'>{task.taskTitle}</h3>
  <h2>Description</h2>
  <p className='Descripcion'>{task.textDescription}</p>
  <h4>Done Date:{task.doneDate}</h4>
  <button className='buttons' onClick={() => doneTaskRemove(index)}>❌</button>
  </div>
));
  return (
    <>

    <form id='formulario' onSubmit={submit}>
    <input name='taskTitle' onChange={actualizarInfo} id='taskTitle' type='text' placeholder='Title' />
    <select name='importancia' onChange={actualizarInfo} id='select'>
  <option value="normal">normal</option>
  <option value="medio">medio</option>
  <option value="urgente">urgente</option>
</select>
    <textarea name='textDescription' onChange={actualizarInfo} id='textDescription' placeholder='Description Task' />
    <button type='submit' id='añadir'>➕ ADD</button>
    </form> 
    <div id='tasksRute'>
    <div id='taskDo' className='tasksProccess'>
    <h1>({tasksToDo.length}) Tasks to do</h1>
    <div className="taskDo">
    {tasksToDoConstructor};
    </div>
    </div>
    <div className='tasksProccess'><h1>({tasksInProgress.length})Tasks in progress</h1>
    <div className="taskDo">
    {tasksInProgressConstructor};
    </div>
    </div>
    <div className='tasksProccess'><h1>({tasksDone.length})Completed tasks</h1>
    <div className='taskDo'>
    {doneTasksConstructor};
    </div>
    </div>
    </div>
    </>
  )
}
  export default FormData;

