import styles from '../styles/CardHome.module.css'
import React from 'react';

export function Card({ title, icon }) {
  const styledIcon = React.cloneElement(icon, {
    className: styles.icon, // Aplica a classe do CSS Module
  });

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        {styledIcon}
      </div>
      <h3 className={styles.h3}>{title}</h3>
    </div>
  );
}