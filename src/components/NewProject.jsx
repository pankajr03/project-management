import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal'

const NewProject = ({onSaveProject, onCloseDialog}) => {
  const title = useRef()
  const description = useRef()
  const dueDate = useRef()
  const modal = useRef()

  const handleSave = () => {
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value
    if ( enteredTitle.trim() === ''  || enteredDescription.trim() === '' || enteredDueDate.trim() === '' ) {
        // error
        modal.current.open()
        return;
    }
    onSaveProject({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate
    })
  }
  return (
    <>
    <Modal ref={modal} buttonCaption="Close">
        <h2 className='text-xl font-bold text-stone-300 my-4'>Invalid input</h2>
        <p className='mb-4 text-stone-400'>Oops ... look like you forget to enter a value.</p>
        <p className='mb-4 text-stone-400'>Please make sure you provide a value for each input field.</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button className='text-stone-800 hover:text-stone-950' onClick={onCloseDialog}>Cancel</button></li>
            <li>
                <button onClick={handleSave}
                className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>
                Save
                </button></li>
        </menu>
        <div>
            <Input label="Title" ref={title} />
            
            <Input label="Description" textarea={true} ref={description} />
            
            <Input label="Due Date" type="date" ref={dueDate} />
            
        </div>
      
    </div>
    </>
  )
}

export default NewProject
