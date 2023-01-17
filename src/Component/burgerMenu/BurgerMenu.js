import { useState, useEffect } from 'react'

import './styles.scss'

export default function BurgerMenu() {
  const [burger, setBurger] = useState({ isOpen: false })

  const toggleHandler = () => {
    setBurger((prev) => (prev = !prev))
  }

  useEffect(() => {
    if (!burger) {
      document.querySelector('.nav-list').classList.add('opened')
    } else {
      document.querySelector('.nav-list').classList.remove('opened')
    }
  }, [burger])

  const btnNormal = 'btn-burger'
  const bntActive = 'btn-burger opened'

  return (
    <button className={burger ? btnNormal : bntActive} onClick={toggleHandler}>
      <span></span>
    </button>
  )
}
