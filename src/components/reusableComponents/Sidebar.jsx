import React, { useState } from 'react'
import styles from '../../styles/Sidebar.module.scss'
import { List, ChevronLeft, PersonCircle, Soundwave, ListCheck, Screwdriver, ChatLeft } from 'react-bootstrap-icons'
import { useAuth } from '../../context/AuthContext'

const Sidebar = () => {
    const { currentUser } = useAuth()
    const [collapse, setCollapse] = useState(false)
    const handleClick = () => {
        setCollapse(!collapse)
    }
    return currentUser ? (
        <div>
            <div className={styles.burgerContainer}>
                <ChevronLeft 
                    size={10}
                    className={collapse ? styles.lefty : styles.leftyHidden}
                />
                <List 
                    size={25} 
                    onClick={handleClick}
                    className={styles.list}
                />
            </div>
            <div className={collapse ? styles.sidebarActive : styles.sidebarShrunk}>
                <div className={styles.profileContainer}>
                    <PersonCircle
                        className={styles.avatar} 
                        size={35}
                    />
                    <div className={collapse ? styles.username : styles.usernameHidden}>
                        <p>John <span className={styles.lastName}>Doh</span></p>
                    </div>
                </div>
                <div className={styles.tester}>
                    <ListCheck size={25}/>
                    <span className={collapse ? styles.sidebarText : styles.sidebarTextHidden}>My Progress</span>
                </div>
                <div className={styles.tester}>
                    <Soundwave size={25}/>
                    <span className={collapse ? styles.sidebarText : styles.sidebarTextHidden}>My Listening</span>
                </div>
                <div className={styles.tester}>
                    <ChatLeft size={25}/>
                    <span className={collapse ? styles.sidebarText : styles.sidebarTextHidden}>My Speaking</span>
                </div>
                <div className={styles.tester}>
                    <Screwdriver size={25}/>
                    <span className={collapse ? styles.sidebarText : styles.sidebarTextHidden}>My Vocabulary</span>
                </div>
            </div>
        </div>
        
    ) :
    <div className={styles.sidebarHidden}></div>
}
export default Sidebar
