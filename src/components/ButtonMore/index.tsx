
import { MouseEvent, useCallback } from 'react'
import { cva } from 'class-variance-authority'

import styles from './styles.module.css'

const buttonMore = cva(styles.button)

export const ButtonMore = () => {
  const _handleClick = useCallback((event: MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault()
  }, [])

  return <button onClick={_handleClick} className={buttonMore()}>
    More
  </button>
}
