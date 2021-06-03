import React, { useState } from 'react'
import styles from '../../styles/VocabWord.module.scss'

const VocabWord = () => {
  const [reveal, setReveal] = useState(false)
  const handleClick = () => {
    setReveal(!reveal)
  }
  return (
    <div className={reveal ? styles.wordContainerReveal : styles.wordContainer} onClick={handleClick}>
      Word
    </div>
  )
}

export default VocabWord