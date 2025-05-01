import {FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
import React, { useState } from 'react';

export function SignUpForm(){

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword ] = useState('');
    
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Dados cadastrados: ", {name, email, password});
        };
    

    return(
        <form className='sign-up-form' onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <div className='input-group'>
        <FaUser className='input-icon' />
            <input type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>

        <label htmlFor="name">E-mail</label>
        <div className='input-group'>
        <FaEnvelope className='input-icon' />
            <input type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <label htmlFor="name">Password </label>
        <div className='input-group'>
        <FaLock className='input-icon' />
            <input type='text'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

        </div>

            <button type='submit'>Create account</button>
            </form>
    )
    
}