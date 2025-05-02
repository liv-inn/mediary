import {FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
import React, { useState } from 'react';
import styles from '../styles/Forms.module.css'

export function SignUpForm(){

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword ] = useState('');
    
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Dados cadastrados: ", {name, email, password});
        };
    

    return(
      <form className={styles.container} onSubmit={handleSubmit}>

        
        <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="name">Name</label>
        <FaUser className={styles.inputIcon} />
            <input type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>


        <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="name">E-mail</label>
        <FaEnvelope className={styles.inputIcon} />
            <input type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

      <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor="password">Password</label>
        <FaLock className={styles.inputIcon} />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

            <button className={styles.button} type='submit'>Create account</button>
            </form>
    )
    
}