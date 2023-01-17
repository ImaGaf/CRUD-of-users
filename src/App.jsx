import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import UserList from './components/UsersList'
import UsersForm from './components/UsersForm'
import Warning from './components/Warning'

function App() {
  
  const [usersList,setUsersList] = useState([])
  const [form,setForm] = useState(false)
  const [userSelected, setUserSelected] = useState(null)
  const [warning, setWarning] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = ()=>{
    axios.get(`https://users-crud.academlo.tech/users/`)
      .then(res => setUsersList(res.data))
  }
  
  const selectUser = (user) =>{
    setForm(true)
    setUserSelected(user)
  }

  const getWarning = (user) =>{
    setWarning(true)
    setUserToDelete(user) 
  }

  const cancelDelete = ()=>{
    setWarning(false)
    setUserToDelete(null)
  }

  return (
    <div className="App">
      <UserList usersList = {usersList} setForm={setForm} selectUser={selectUser} getUsers = {getUsers} getWarning={getWarning}/>
      { form &&
        <UsersForm setForm={setForm} getUsers={getUsers} userSelected={userSelected} setUserSelected={setUserSelected}/>
      }
      { warning &&
        <Warning userToDelete = {userToDelete} cancelDelete={cancelDelete} getUsers={getUsers}/>
      }

    </div>
  )
}

export default App
