
import React from 'react';

const projects = () => {
  const myProjects = [
    {
        companyName:"Ironhack",
        projectName: "Project 1",
        schoolStarted:"May - 2019",
        schoolEnded:"November - 2019"
    },
    {
        companyName:"Ironhack",
        projectName: "Project 2",
        schoolStarted:"May - 2019",
        schoolEnded:"November - 2019"
    },
    {
        companyName:"Ironhack",
        projectName: "Project 3",
        schoolStarted:"May - 2019",
        schoolEnded:"November - 2019"
    },
  ]

  return (
    <div>
      <h2>Projects:</h2>
      {myProjects.map((eachProject, index) => {
        return (
          <div key={index}>
            <h3>{eachProject.companyName}</h3>
            <p>{eachProject.projectName}</p>
            {/* <h4>{eachProject.degree}</h4> */}
            <p>{eachProject.schoolStarted} - {eachProject.schoolEnded}</p>
          </div>
          )
      })}
    </div>
  )
}

export default projects;