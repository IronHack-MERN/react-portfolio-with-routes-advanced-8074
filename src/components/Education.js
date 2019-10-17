
import React from 'react';

const education = () => {
  const myEducation = [
    {
        schoolName:"Ironhack",
        city: "Barcelona",
        country:"Spain",
        degree:"Full-Stack Web Developer",
        schoolStarted:"May - 2019",
        schoolEnded:"November - 2019"
    },
    {
        schoolName:"Institut Jaume Balmes",
        city: "Barcelona",
        country:"Spain",
        degree:"Web applications development",
        schoolStarted:"2015",
        schoolEnded:"2017"
    },
    {
        schoolName:"Training Center Adams",
        city: "Barcelona",
        country:"Spain",
        degree:"Linux network course",
        schoolStarted:"Sep - 2018",
        schoolEnded:"Nov - 2019"
    }
  ]

  return (
    <div>
      <h2>Education:</h2>
      {myEducation.map((eachSchool, index) => {
        return (
          <div key={index}>
            <h3>{eachSchool.schoolName}</h3>
            <p>{eachSchool.city}, {eachSchool.country}</p>
            <h4>{eachSchool.degree}</h4>
            <p>{eachSchool.schoolStarted} - {eachSchool.schoolEnded}</p>
          </div>
          )
      })}
    </div>
  )
}

export default education;