import { useEffect } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'

import sun from './sun.svg'
import moon from './moon.svg'

import './style.scss'

export default function BtnDarkMode() {
  const [dark, setDark] = useLocalStorage('darkMode', false)

  // const btnRef = useRef(null)

  useEffect(() => {
    if (!dark) {
      document.body.classList.add('dark')
      // btnRef.current.classList.add('dark-mode-btn--active')
    } else {
      document.body.classList.remove('dark')
      // btnRef.current.classList.remove('dark-mode-btn--active')
    }
  }, [dark])

  const btnHandler = () => {
    setDark((prev) => (prev = !prev))
  }

  const btnNormal = 'dark-mode-btn'
  const bntActive = 'dark-mode-btn dark-mode-btn--active'

  return (
    <button
      // ref={btnRef}
      className={dark ? btnNormal : bntActive}
      onClick={btnHandler}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  )
}
