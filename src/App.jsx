import Info from './components/Info'
import Education from './components/Education'
import './App.css'
import Experience from './components/Experience'
import Display from './components/Display'
import { useState } from 'react'

function App() { 
  const [infos, setInfos] = useState({}); 
  const [educations, setEducations] = useState([]); 
  const [experiences, setExperiences] = useState([]); 

  // const [experiences, setExperiences] = useState([]); 
  // const [experienceLocation, setExperienceLocation] = useState(""); 

  return (
    <>
      <Info infos={infos} setInfos={setInfos}></Info>
      <Education educations={educations} setEducations={setEducations}></Education>
      <Experience experiences={experiences} setExperiences={setExperiences}></Experience>
      <Display infos={infos} educations={educations} experiences={experiences}></Display>
    </>
  )
}

export default App
