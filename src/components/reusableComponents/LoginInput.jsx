import React from 'react'
import styles from '../../styles/LoginInput.module.scss'

const LoginInput = (props) => {
    return (
        <div className={styles.userNameContainer}>   
            <div>{props.value}:</div>
            <input className={styles.userNameInput}></input>
        </div>
    )
    
}

export default LoginInput