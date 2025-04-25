function DisplayItem({startDate, endDate, location, institution, position, role, id}) {
    return (
        <div key={id} className="item_display">
            <p>{startDate.slice(5, 7)}/{startDate.slice(0, 4)}-{endDate.slice(5, 7)}/{endDate.slice(0, 4)}</p>
            <p><b>{institution}</b></p>
            <p>{location}</p>
            {position !== undefined && <p>{position}</p>}
            <p id="role">{role}</p>
        </div>
    )
}

export default DisplayItem