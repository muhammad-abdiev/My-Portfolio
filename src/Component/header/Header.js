import React from 'react'

import Us from './../../img/Us.jpg'

import './styles.scss'

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header__row">
          <div className="header__body">
            <h1 className="header__title">
              <strong>
                Hi, my name is <em>Magomed</em>
              </strong>
              {/* <br />a frontend developer */}
            </h1>

            <div className="header__text">
              <p>With passion for learning and creating</p>
            </div>

            <a
              href="https://github.com/muhammad-abdiev"
              target="blank"
              className="btn"
            >
              GitHub
            </a>
          </div>

          <div className="header__img">
            <img src={Us} alt="Us" />
          </div>
        </div>
      </div>
    </header>
  )
}
