import { useState } from "react";

function Info({infos, setInfos}) {
    const [editable, setEditable] = useState(true); 
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
        <div>
            <h2>General</h2>
            {Object.keys(infos).length > 0 &&
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
            <form>
                <div>
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} id="full_name" name="full_name" required></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" required></input>
                </div>
                <div>
                    <label htmlFor="phone_number">Phone Number</label>
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} id="phone_number" name="phone_number" required></input>
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} id="location" name="location" required></input>
                </div>
                <button type="submit" onClick={handleSubmitInfo}>Save</button>
                <button onClick={handleClearInputs}>Cancel</button>
            </form>
            }
        </div>
    ); 
}

export default Info