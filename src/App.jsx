import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
import { AiOutlineUserAdd } from "react-icons/ai";
import ModalDelete from './components/ModalDelete'
const baseURL = 'https://users-crud1.herokuapp.com'


function App() {
 
  const [users, setUsers] = useState()
  const [updateUser, setUpdateUser] = useState()
  const [modal, setModal] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
}

const createNewUser = data => {
    const url = `${baseURL}/users/`
    axios.post(url, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
}

const deleteUserById = id => {
  handleModalDelete()
  const URL = `${baseURL}/users/${id}/`
  axios.delete(URL)
  .then(res => {
    console.log(res.data)   
    getAllUsers()
})
  .catch(err => console.log(err))
}

const updateUserById = (id,data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
    .then(res => {
      console.log(res.data)   
      getAllUsers()
    })
  .catch(err => console.log(err))
  }

  const handleModal = () => {
    setModal(!modal)
    console.log(modal);

  }
  const handleModalDelete = () => {
    setModalDelete(!modalDelete)
    console.log(modal);

  }

  return (
    <div className="App">
    <header className='header'>
      <h1 className='header__title'>USERS CRUD</h1>
      <div className='header__btn' onClick={handleModal}><AiOutlineUserAdd/></div>  
    </header>
      <section className={`modal ${modal ? 'modal--show' : 'modal--hide'}`}>
        <div className="modal__container">
          <FormUsers 
          createNewUser = {createNewUser}
          updateUser = {updateUser}
          setUpdateUser = {setUpdateUser}
          updateUserById = {updateUserById}
          handleModal = {handleModal}
          />
        </div>
      </section>
      <section className={`modal ${modalDelete ? 'modal--show' : 'modal--hide'}`}>
        <div className="modal__container">
            <ModalDelete
              handleModalDelete = {handleModalDelete}
            />
        </div>
      </section>
     
        <div className="users-container">
        {
        users?.map(user => (          
          <UserCard 
            key={user.id}
            user = {user}
            deleteUserById = {deleteUserById}
            handleModal = {handleModal}
            setUpdateUser = {setUpdateUser}
            handleModalDelete = {handleModalDelete}
          />
        ))
      }      
        </div>
    </div>
    
  )
}

export default App
