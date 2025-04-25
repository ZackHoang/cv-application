import DisplayItem from "./ListItem"

function Display({infos, educations, experiences}) {
    return(
        <div>
            <div>
                <h2>{infos.fullName}</h2>
                <div>
                    <h3>{infos.email}</h3>
                    <h3>{infos.phoneNumber}</h3>
                    <h3>{infos.location}</h3>
                </div>
            </div>
            <h2>Educations</h2>
            <div>
                {educations.map((education) => {
                    return <DisplayItem key={education.id} startDate={education.startDate} endDate={education.endDate} location={education.location} institution={education.school} role={education.degree}/>
                })}
            </div>
            <h2>Experiences</h2>
            <div>
                {experiences.map((experience) => {
                    return <DisplayItem key={experience.id} startDate={experience.startDate} endDate={experience.endDate} location={experience.location} institution={experience.company} role={experience.descriptions} position={experience.position}/>
                })}
            </div>
        </div>
    )
}

export default Display