import React, { useState } from "react";
import ProjectSideBar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  const handleStartNewProject = () => {
    setProjectState(prevState=> {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  const handleSaveProject =(projectData)=>{
    let newProject = {
      ...projectData,
      id: Math.random()
    }
    setProjectState(prevState=> {
     
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }


  const handleClose = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  const handleSelectedProject = (id) => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  let content = ''
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
  if ( projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartNewProject={handleStartNewProject} />
  } else if ( projectState.selectedProjectId === null ) {
    content = <NewProject onSaveProject={handleSaveProject} onCloseDialog={handleClose}/>
  } else {
    content = <SelectedProject project={selectedProject} />
  }

    return (
      <main className="h-screen my-8 gap-8 flex">
        <ProjectSideBar onStartNewProject={handleStartNewProject} projects={projectState.projects} onSelectProject={handleSelectedProject} />
       
        {content}
        
      </main>
    );
  }
  
  export default App;
  