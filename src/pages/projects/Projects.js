import { Project } from '../../Component/project/Project'
import { projects } from '../../helpers/projectsList'

import './styles.scss'

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>

        <ul className="projects">
          {projects.map((item) => {
            return <Project item={item} key={item.id} />
          })}
        </ul>
      </div>
    </main>
  )
}
