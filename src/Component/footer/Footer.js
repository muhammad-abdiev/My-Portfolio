import vk from './../../img/icon/vk.svg'
import instagram from './../../img/icon/instagram.svg'
import gihub from './../../img/icon/gitHub.svg'
import './styles.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <footer className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/magusha_1" target="blank">
                <img src={vk} alt="vk" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.instagram.com/magusha_1/" target="blank">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/Magusha1" target="blank">
                <img src={gihub} alt="gihub" />
              </a>
            </li>
          </ul>

          <div className="copyright">
            <p>© 2023 frontend developer</p>
          </div>
        </footer>
      </div>
    </footer>
  )
}
