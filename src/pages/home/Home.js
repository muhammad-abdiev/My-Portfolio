import React, { useState } from 'react'
import { Header } from '../../Component/header/Header'

import './styles.scss'

export default function Home() {
  const [hard, setHard] = useState([
    { id: 1, title: 'HTML, CSS, SCSS' },
    { id: 2, title: 'JavaScript' },
    { id: 3, title: 'Git' },
    { id: 4, title: 'ReactJS' },
    { id: 5, title: 'Typescript' },
  ])
  const [soft, setSoft] = useState([
    { id: 1, title: 'Креативный' },
    { id: 2, title: 'Амбициозный' },
    { id: 3, title: 'Умение работать в команде' },
    { id: 4, title: 'Быстро обучаюсь' },
    { id: 5, title: 'Умение коммуницировать с людьми' },
  ])

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h2 className="title-1">About Me</h2>
          <div className="about">
            <ul className="about-list">
              <li className="about-list__item">
                <p>Я студент 5-го курса ПензГТУ</p>
                <p>И я начинающий Frontend разработчик</p>
              </li>

              <li className="about-list__item">
                <h2 className="title-2">Hobby</h2>
                <p>Большую часть времени я уделяю програмированию</p>
                <p>Изучаю английский язык</p>
                <p>Читаю книги</p>
                <p>Так же люблю заниматься спортом</p>
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
