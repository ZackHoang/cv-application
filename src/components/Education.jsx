import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Education({educations, setEducations}) {
    const [editable, setEditable] = useState(false);
    const [editing, setEditing] = useState(false);  
    const [school, setSchool] = useState(""); 
    const [degree, setDegree] = useState(""); 
    const [startDate, setStartDate] = useState(""); 
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState(""); 
    const [currentID, setCurrentID] = useState(""); 

    const handleFormDisplay = () => {
        setEditable(!editable); 
    }

    const handleClearInputs = () => {
        setSchool(""); 
        setDegree(""); 
        setStartDate(""); 
        setEndDate(""); 
        setLocation(""); 
    }

    const handleSubmitEducation = () => {
        if (editing === true) {
            const editEducation = educations.find((education) => education.id === currentID); 
            editEducation.school = school; 
            editEducation.degree = degree; 
            editEducation.startDate = startDate; 
            editEducation.endDate = endDate; 
            editEducation.location = location; 
            const index =  educations.map((education) => education.id).indexOf(currentID); 
            const copyEducations = [...educations]; 
            copyEducations[index] = editEducation; 
            console.log(copyEducations); 
            setEducations(copyEducations); 
            setEditing(false); 
        } else {
            setEducations([...educations, {
                school: school, 
                degree: degree, 
                startDate: startDate, 
                endDate: endDate, 
                location: location, 
                id: crypto.randomUUID(), 
            }])
        }
    }

    const handleEdit = (key) => {
        setEditing(true); 
        console.log(key); 
        const edit = educations.find(({id}) => id === key); 
        console.log(edit); 
        setEditable(!editable); 
        setSchool(edit.school); 
        setDegree(edit.degree); 
        setStartDate(edit.startDate); 
        setEndDate(edit.endDate); 
        setLocation(edit.location); 
        setCurrentID(edit.id); 
    }

    const handleSubmitAll = () => {
        handleFormDisplay(); 
        handleSubmitEducation(); 
        handleClearInputs(); 
    }

    const handleDelete = (key) => {
        setEducations(educations.filter((education) => education.id !== key))
    }

    return(
        <div>
            <h2>Education</h2>
            {!editable &&
            <div>
                {educations.map((education) => {
                    return <div key={education.id}>
                        <h3 onClick={() => handleEdit(education.id)}>{education.school}</h3>
                        <button onClick={() => handleDelete(education.id)}><FaTrashAlt/></button>
                    </div>
                })}
            </div>
            }
            {editable && 
            <form onSubmit={handleSubmitAll}>
                <div>
                    <label htmlFor="school">School</label>
                    <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} id="school" name="school" required></input>
                </div>
                <div>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} id="degree" name="degree" required></input>
                </div>
                <div>
                    <div>
                        <label htmlFor="start_date">Start Date</label>
                        <input type="date" value={startDate} onChange={(e)=> setStartDate(e.target.value)} id="start_date" name="start_date" required></input>
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
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => {handleFormDisplay(); handleClearInputs()}} >Cancel</button>
                </div>
            </form>
            }
            {!editable && <button className="add" onClick={handleFormDisplay}>Add</button>}
        </div>
    ); 
}

export default Education 