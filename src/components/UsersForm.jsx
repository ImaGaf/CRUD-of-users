import axios from 'axios';
import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form'

const UsersForm = ({setForm, getUsers,userSelected,setUserSelected}) => {

    const {handleSubmit, register, reset} = useForm();
    const inputNull = {first_name: "", last_name:"", email: "", password: "", birthday: ""}
    
    useEffect(()=>{
        if(userSelected){
            reset(userSelected)
        }else{
            reset(inputNull)
        }
    },[userSelected])
    
    const submit = (data)=>{
        if(userSelected){
            axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`,data)
            .then(()=> {
                getUsers()
                closeForm()
            })
        }else{
        axios.post("https://users-crud.academlo.tech/users/", data)
        .then(()=>{
            getUsers()
            closeForm()
            })
        }
    }

    const closeForm =()=>{
        setForm(false)
        setUserSelected(null)
    }

    return (
        <div className='form-back'>
            <div className='form'>
                <button onClick={()=> closeForm()}>x</button>
                <h3>{userSelected? "Edit User":"New User"}</h3>
                <form className='form-in' onSubmit={handleSubmit(submit)}>
                    <div className='input'>
                        <p>Name</p>
                        <input type="text" placeholder='First Name' id="first_name" {...register("first_name")}/>
                    </div>
                    <div className='input'>
                        <p>Last Name</p>
                        <input type="text" placeholder='Last Name' id="last_name" {...register("last_name")}/>
                    </div>
                    <div className='input'>
                        <p>E-mail</p>
                        <input type="email" placeholder='E-mail' id="email" {...register("email")}/>
                    </div>
                    <div className='input'>
                        <p>Password</p>
                        <input type="password" placeholder='Password' id="password" {...register("password")}/>
                    </div>
                    <div className='input'>
                        <p>Birthday</p>
                        <input type="date" placeholder='Birthday' id="birthday" {...register("birthday")}/>
                    </div>
                    <button type='submit'> {userSelected? "Upload":"Add new user"}</button>
                </form>
            </div>
        </div>
    );
};

export default UsersForm;