import { FaUser, FaLock } from "react-icons/fa";
import React, { useState } from "react";
import styles from '../styles/Forms.module.css';

export function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados cadastrados: ", { name, password });
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      
      <div className={styles.inputGroup}>
      <label htmlFor="name">Name</label>
        <FaUser className={styles.inputIcon} />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

      <button type="submit" className={styles.button}>Create account</button>
    </form>
  );
}
