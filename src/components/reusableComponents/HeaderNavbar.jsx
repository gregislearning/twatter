import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import styles from '../../styles/HeaderNavbar.module.scss'

const HeaderNavbar = () => { 
  return (
    <div>
      <Navbar className={styles.navBar}>
        <Navbar.Brand className={styles.appName} href="#home">App Name</Navbar.Brand>
        <Nav className={`${styles.navBarTabs} ${styles.outsideTab}`}>
          <Nav.Link href="#home">Listening</Nav.Link>
        </Nav>
        <Nav className={`${styles.navBarTabs} ${styles.secondTab}`}>
          <Nav.Link href="#features">Speaking</Nav.Link>
        </Nav>
        <Nav className={`${styles.navBarTabs} ${styles.middleTab}`}>
          <Nav.Link href="#features">Vocabulary</Nav.Link>
        </Nav>
        <Nav className={`${styles.navBarTabs} ${styles.outsideTab}`}>
          <Nav.Link href="#pricing">Community</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default HeaderNavbar