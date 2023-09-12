import React from 'react'
import { createPortal } from 'react-dom'

const DeleteModal = (props) => {

    const { onDelete, isVisible, title } = props;

    if(!isVisible) {
        return null
    }

    return createPortal(
        <div className='modal-wrapper'>
            <div className='modal-content'>
                <p>Are you sure you want to delete <b>{title}</b> ?</p>
                <div className='modal-buttons'>
                    <button onClick={isVisible}>Cancel</button>
                    <button onClick={onDelete}>DELETE</button>
                </div>
            </div>
        </div>, document.body)
}

export default DeleteModal