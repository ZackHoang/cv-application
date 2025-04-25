function Display({infos, educations, experiences}) {
    return(
        <div>
            <h1>{infos.fullName}</h1>
            <h2>{infos.email}</h2>
            <h2>{infos.phoneNumber}</h2>
            <h2>{infos.location}</h2>
        </div>
    )
}

export default Display