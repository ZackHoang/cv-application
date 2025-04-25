import Info from './components/Info'
import Education from './components/Education'
import './App.css'
import Experience from './components/Experience'
import Display from './components/Display'
import { useState } from 'react'

function App() { 
  const [infos, setInfos] = useState({
    fullName: "John Doe", 
    email: "johndoe@mail.com", 
    phoneNumber: "123-456-789", 
    location: "Los Angeles"
  }); 
  const [educations, setEducations] = useState([
    {
      school: "UCLA", 
      degree: "Bachelor of Science Economics", 
      startDate: "2008-09-10", 
      endDate: "2012-05-10", 
      location: "Los Angeles, US", 
      id: crypto.randomUUID(), 
    }, 
  ]); 
  const [experiences, setExperiences] = useState([
    {
      company: "Company A", 
      position: "Position A", 
      startDate: "2018-09-10", 
      endDate: "2022-05-10",
      location: "Location A", 
      descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum erat, eleifend et tempus sed, hendrerit nec diam. Aenean vel pretium ante, eget blandit erat. Sed sed dignissim libero. Suspendisse potenti. Integer a lorem egestas, vestibulum erat vitae, volutpat turpis. Cras suscipit quam sit amet augue sagittis efficitur. Maecenas gravida.", 
      id: crypto.randomUUID(), 
    }, 
    {
      company: "Company B", 
      position: "Position B", 
      startDate: "2023-09-10", 
      endDate: "2024-05-10",
      location: "Location B", 
      descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum erat, eleifend et tempus sed, hendrerit nec diam. Aenean vel pretium ante, eget blandit erat. Sed sed dignissim libero. Suspendisse potenti. Integer a lorem egestas, vestibulum erat vitae, volutpat turpis. Cras suscipit quam sit amet augue sagittis efficitur. Maecenas gravida.", 
      id: crypto.randomUUID(), 
    }
  ]);  

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
