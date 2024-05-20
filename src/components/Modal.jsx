import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import Button from './Button';

const Modal = forwardRef(({children, buttonCaption}, ref) => {
    const dialog = useRef();
    useImperativeHandle(ref, ()=> {
        return {
            open() {
                if (dialog.current) {
                    dialog.current.showModal();
                  } else {
                    // Handle the case where the dialog element is not yet available (e.g., console.warn)
                    console.warn("Modal element not ready for opening.");
                  }
            }
        }
    })
  return createPortal(
    <dialog ref={dialog} className='bg-stone-200 backdrop: bg-stone-900/90 p-4 rounded-md shadow-md text-stone-200'>
      {children}
      <form method='dialog' className='mt-4 text-right'>
        <Button>{buttonCaption}</Button>
        
      </form>
    </dialog>, document.getElementById('modal-root')
  ) 
})

export default Modal
