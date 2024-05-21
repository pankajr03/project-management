import React from 'react'
import Button from './Button'

const ProjectSideBar = ({onStartNewProject, projects=[], onSelectProject, selectProjectId}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className='font-bold mb-8 uppercase md:text-xl text-stone-200'>Your Project</h2>
      <div>
        <Button onClick={onStartNewProject}> + Add Project</Button>
      </div>

      <ul>
      {projects.map((project) => {
        let cssClasses = 'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone:200 hover:bg-stone-800'
        if (project.id === selectProjectId ) {
          cssClasses += ' bg-stone-800 text-stone-200'
        } else {
          cssClasses += ' text-stone-400'
        }
        return (
          <li key={project.id}>
            <button onClick={()=>onSelectProject(project.id)} className={cssClasses}>
              {project.title}
            </button>
          </li>
        )
        } )}
      </ul>
    </aside>
  )
}

export default ProjectSideBar
