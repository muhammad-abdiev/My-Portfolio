import { NavLink } from 'react-router-dom'

import './style.scss'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode'
import BurgerMenu from '../burgerMenu/BurgerMenu'

export function Navbar() {
  const activeLink = 'nav-list__link nav-list__link--active'
  const normalLink = 'nav-list__link'

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="nav-logo">
            <strong>My</strong>Portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>

          {/* <button className="nav-toggle" onClick={toggleHandler}>
            <img src={menu} alt="BurgerMenu" />
          </button> */}
          <BurgerMenu />
        </div>
      </div>
    </nav>
  )
}
