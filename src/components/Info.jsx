import { useState } from "react";

function Info({infos, setInfos}) {
    const [editable, setEditable] = useState(false); 
    const [fullName, setFullName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [phoneNumber, setPhoneNumber] = useState(""); 
    const [location, setLocation] = useState("");
    
    const handleClearInputs = () => {
        setEditable(!editable); 
        setFullName(""); 
        setEmail(""); 
        setPhoneNumber(""); 
        setLocation(""); 
    }

    const handleSubmitInfo = () => {
        setEditable(!editable); 
        setInfos({
            fullName: fullName, 
            email: email, 
            phoneNumber: phoneNumber, 
            location: location, 
        })
    }

    const handlEdit = () => {
        setEditable(!editable); 
        setFullName(infos.fullName); 
        setEmail(infos.email); 
        setPhoneNumber(infos.phoneNumber); 
        setLocation(infos.location); 
    }

    return (
        <div className="container">
            <h2>General</h2>
            {!editable &&
            <div>
                <ul>
                    {Object.values(infos).map((info, index) => {
                        return <li key={index}>{info}</li>
                    })}
                </ul>
                <button onClick={handlEdit}>Edit</button>
            </div>
            }
            {editable && 
            <form onSubmit={handleSubmitInfo}>
                <div className="field">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} id="full_name" name="full_name" required></input>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" required></input>
                </div>
                <div className="field">
                    <label htmlFor="phone_number">Phone Number</label>
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} id="phone_number" name="phone_number" required></input>
                </div>
                <div className="field">
                    <label htmlFor="location">Location</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} id="location" name="location" required></input>
                </div>
                <div className="btns">
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleClearInputs}>Cancel</button>
                </div>
            </form>
            }
        </div>
    ); 
}

export default Info