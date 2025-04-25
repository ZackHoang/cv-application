import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Experience({experiences, setExperiences}) {
    const [editable, setEditable] = useState(false); 
    const [editing, setEditing] = useState(false); 
    const [company, setCompany] = useState(""); 
    const [position, setPosition] = useState(""); 
    const [startDate, setStartDate] = useState(""); 
    const [endDate, setEndDate] = useState(""); 
    const [location, setLocation] = useState(""); 
    const [descriptions, setDescriptions] = useState(""); 
    const [currentID, setCurrentID] = useState(""); 

    const handleFormDisplay = () => {
        setEditable(!editable); 
    }

    const handleClearInputs = () => {
        setCompany(""); 
        setPosition(""); 
        setStartDate(""); 
        setEndDate(""); 
        setLocation(""); 
        setDescriptions(""); 
    }

    const handleSubmitExperience = () => {
        if (editing === true) {
            const editExperience = experiences.find((experience) => experience.id === currentID); 
            editExperience.company = company; 
            editExperience.position = position; 
            editExperience.startDate = startDate; 
            editExperience.endDate = endDate; 
            editExperience.location = location; 
            editExperience.descriptions = descriptions; 
            const index = experiences.map((experience) => experience.id).indexOf(currentID); 
            const copyExperiences = [...experiences]; 
            copyExperiences[index] = editExperience; 
            console.log(copyExperiences); 
            setExperiences(copyExperiences); 
        } else {
            setExperiences([...experiences, {
                company: company, 
                position: position, 
                startDate: startDate, 
                endDate: endDate, 
                location: location, 
                descriptions: descriptions,
                id: crypto.randomUUID(), 
            }])
        }
    }

    const handleEdit = (key) => {
        setEditing(!editing); 
        console.log(key); 
        const edit = experiences.find(({id}) => id === key); 
        console.log(edit); 
        setEditable(!editable); 
        setCompany(edit.company); 
        setPosition(edit.position); 
        setStartDate(edit.startDate); 
        setEndDate(edit.endDate); 
        setLocation(edit.location); 
        setDescriptions(edit.descriptions); 
        setCurrentID(edit.id); 
    }

    const handleSubmitAll = () => {
        handleFormDisplay(); 
        handleSubmitExperience(); 
        handleClearInputs(); 
    }

    const handleDelete = (key) => {
        setExperiences(experiences.filter((experience) => experience.id !== key)); 
    }

    return (
        <div>
            <h2>Experience</h2>
            {!editable && 
            <div>
                {experiences.map((experience) => {
                    return <div key={experience.id}>
                        <h3 onClick={() => handleEdit(experience.id)}>{experience.company}</h3>
                        <button onClick={() => handleDelete(experience.id)}><FaTrashAlt></FaTrashAlt></button>
                    </div>  
                })}
            </div>
            }
            {editable && 
            <form onSubmit={handleSubmitAll}>
                <div>
                    <label htmlFor="company">Company</label>
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} id="company" name="company" required></input>
                </div>
                <div>
                    <label htmlFor="position">Position</label>
                    <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} id="position" name="position" required></input>
                </div>
                <div>
                    <div>
                        <label htmlFor="start_date">Start Date</label>
                        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} id="start_date" name="start_date" required></input>
                    </div>
                    <div>
                        <label htmlFor="end_date">End Date</label>
                        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} id="end_date" name="end_date" required></input>
                    </div>
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} id="location" name="location" required></input>
                </div>
                <div>
                    <label htmlFor="descriptions">Descriptions</label>
                    <textarea value={descriptions} onChange={(e) => setDescriptions(e.target.value)} id="descriptions" required></textarea>
                </div>
                <div>
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => {handleFormDisplay(); handleClearInputs()}} >Cancel</button>
                </div>
            </form>
            }
            {!editable && <button className="add" onClick={handleFormDisplay}>Add</button>}
        </div>
    )
}

export default Experience