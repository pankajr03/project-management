import React, { useState } from "react";
import ProjectSideBar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
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
    const newProject = {
      ...projectData,
      id: Math.random()
    } 
    setProjectState(prevState=> {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [prevState.projects, newProject]
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

    return (
      <main className="h-screen my-8 gap-8 flex">
        <ProjectSideBar onStartNewProject={handleStartNewProject} projects={projectState.projects} />
        {/* <NewProject /> */}
        {projectState.selectedProjectId === undefined ? 
        <NoProjectSelected onStartNewProject={handleStartNewProject} /> : 
        <NewProject onSaveProject={handleSaveProject} onCloseDialog={handleClose}/>
        }
        
      </main>
    );
  }
  
  export default App;
  