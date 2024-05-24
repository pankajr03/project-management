import React, { useState } from 'react'
import NewTask from './NewTask'

const Tasks = ({tasks, onAddTask, onDeleteTask}) => {
  const handleDeleteTask = (taskId) => {
    onDeleteTask(taskId);
  }
  return (
    <section>
        <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
        <NewTask onAddTask={onAddTask}/>
        {tasks.length === 0 && 
          <p className='text-stone-800 my-4'>This project does not have any task yet.</p>
        
        }
        {tasks.length > 0 && 
          <ul className='p-4 mt-8 rounded-md bg-stone-100'>
          {tasks.map(task=> {
            return <li key={task.id} className='flex justify-between my-4'>
              <span>{task.title}</span>
              <button className='text-stone-700 hover:text-stone-600' onClick={()=>handleDeleteTask(task.id)}>Clear</button>
              </li>
          })}
          </ul>
        }
               
    </section>
  )
}
export default Tasks
