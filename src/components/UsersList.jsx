import axios from 'axios';
import React from 'react';

    const UserList = ({usersList, setForm, selectUser, getUsers, getWarning}) => {

    const orderedList = usersList.sort((a,b)=> a.first_name.localeCompare(b.first_name))

    return (
        <div className='main-container'>
            <div className='header'>
                <h2><strong>USUARIOS</strong></h2>
                <button onClick={()=> setForm(true)}>+ Crear nuevo usuario</button>
            </div>
            <div className='card-container'>
                {
                    orderedList.map((user)=>(
                        <div className='card' key={user.id}>
                            <h4>{user.first_name}, {user.last_name} </h4>
                            <p><strong>Email:</strong><br />{user.email}</p>
                            <p><strong>Birthday: </strong> <br /><i class='bx bx-gift'></i>{user.birthday}</p>
                            <div className='actions'>
                                <div className='delete' onClick={()=>  getWarning(user)}>
                                    <i className='bx bx-trash'></i>
                                </div>
                                <div className='edit' onClick={()=> selectUser(user)}>
                                    <i className='bx bx-edit-alt' ></i>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default UserList;