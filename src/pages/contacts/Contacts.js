import './styles.scss'

export default function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <div className="content">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Moscow, Russia</p>
            </li>

            <li className="content-list__item">
              <h2 className="title-2">Telegram / WatsApp</h2>
              <p>
                <a href="tel:+79962471018">+7 (996) 247-10-18</a>
              </p>
            </li>

            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:magomed040217@gmail.com">
                  magomed040217@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
