import './styles.scss'

export function Project({ item }) {
  return (
    <li className="project">
      <a href={item.gitHubLink} target="blank">
        <img src={item.img} alt={item.title} className="project__img" />
        <h3 className="project__title">{item.title}</h3>
      </a>
    </li>
  )
}
