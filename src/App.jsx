import React, { useState } from "react";
import ProjectSideBar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
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

  const handleProjectDeletion = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project)=> project.id !== projectState.selectedProjectId)
      }
    })
  }

  const handleDeleteTask= (taskId) => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: prevState.selectedProjectId,
        tasks: prevState.tasks.filter((task)=> task.id !== taskId)
      }
    })
  }
  const handleAddTask = (title) => {
    
    setProjectState(prevState=> {
      let newTask = {
        title: title,
        projectId: prevState.selectedProjectId,
        id: Math.random()
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
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
    content = <SelectedProject 
      project={selectedProject} 
      onProjectDelete={handleProjectDeletion} 
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks.filter((task)=> task.projectId === projectState.selectedProjectId)}
      //tasks={projectState.tasks}
      />
  }

  console.log(projectState.tasks)
    return (
      <main className="h-screen my-8 gap-8 flex">
        <ProjectSideBar 
          onStartNewProject={handleStartNewProject} 
          projects={projectState.projects} 
          onSelectProject={handleSelectedProject} 
          selectProjectId={projectState.selectedProjectId}
          />
       
        {content}
        
      </main>
    );
  }
  
  export default App;
  