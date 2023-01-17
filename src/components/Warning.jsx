import React from 'react';
import axios from 'axios';

const Warning = ({userToDelete, cancelDelete, getUsers}) => {

    const deleteUser = (userToDelete)=>{
        axios.delete(`https://users-crud.academlo.tech/users/${userToDelete?.id}/`)
        .then(()=> {getUsers()})
        cancelDelete()
    }
    return (
        <div className='delete-back'>
            <div className='delete-user'>
                <h2>Eliminar usuario</h2>
                <p> ¿Deseas eliminar al usuario <strong>{userToDelete?.first_name}</strong>?</p>
                <div className='delete-actions'>
                    <button onClick={()=> deleteUser(userToDelete)}>Eliminar</button>
                    <button onClick={()=>cancelDelete()}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default Warning;