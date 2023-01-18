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
                <h2>Delete User</h2>
                <p> Do you want to delete the user: <strong>{userToDelete?.first_name}</strong>?</p>
                <div className='delete-actions'>
                    <button onClick={()=> deleteUser(userToDelete)}>Delete</button>
                    <button onClick={()=>cancelDelete()}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Warning;