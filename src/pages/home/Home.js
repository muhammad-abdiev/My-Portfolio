import React, { useState } from 'react'
import { Header } from '../../Component/header/Header'

import './styles.scss'

export default function Home() {
  const [hard, setHard] = useState([
    { id: 1, title: 'HTML, CSS, SCSS' },
    { id: 2, title: 'Typescript' },
    { id: 3, title: 'Git' },
    { id: 4, title: 'React' },
    { id: 5, title: 'Redux Toolkit' },
  ])
  const [soft, setSoft] = useState([
    { id: 1, title: 'Creative' },
    { id: 2, title: 'Confident' },
    { id: 3, title: 'Determined' },
    { id: 4, title: 'Committed' },
    { id: 5, title: 'Responsible' },
  ])

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h2 className="title-1 title-home">About Me</h2>
          <div className="about">
            <ul className="about-list">
              <li className="about-list__item">
                <p>I'm a 5th-year student of PenzGTU</p>
                <p>And I'm a beginner frontend developer</p>
              </li>

              <li className="about-list__item">
                <h2 className="title-2">Hobby</h2>
                <p>I spend most of my time programming</p>
                <p>Learning English</p>
                <p>Read books</p>
                <p>I also like to play sports</p>
              </li>
            </ul>
          </div>

          <h2 className="title-1">Skills</h2>
          <div className="skills-row">
            <div className="skills-column">
              <div className="skills-column__item item">
                <div className="item__title">FRONTEND </div>
                <div className="item__subtitle">Hard Skills</div>
                <ul className="item__list">
                  {hard.map((item) => {
                    return (
                      <li className="item__li" key={item.id}>
                        {item.title}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="skills-column">
              <div className="skills-column__item item">
                <div className="item__title">FRONTEND </div>
                <div className="item__subtitle">Soft Skills</div>
                <ul className="item__list">
                  {soft.map((item) => {
                    return (
                      <li className="item__li" key={item.id}>
                        {item.title}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
