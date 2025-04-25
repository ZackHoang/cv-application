function DisplayItem({startDate, endDate, location, institution, position, role, id}) {
    return (
        <div key={id}>
            <p>{startDate.slice(5, 7)}/{startDate.slice(0, 4)}-{endDate.slice(5, 7)}/{endDate.slice(0, 4)}</p>
            <p>{location}</p>
            <p><b>{institution}</b></p>
            {position !== undefined && <p>{position}</p>}
            <p>{role}</p>
        </div>
    )
}

export default DisplayItem