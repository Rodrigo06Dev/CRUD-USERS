import React from 'react'
import '../styles/modalDelete.css'

const ModalDelete = ({handleModalDelete}) => {
  return (
    <article className='modal__delete'>
        <h2 className='delete__title'> Delete User</h2>
        <p className='delete__text'>the user has been deleted successfully</p>
        <button onClick={handleModalDelete} className='delete__btn'>OK</button>    
    </article>
  )
}

export default ModalDelete