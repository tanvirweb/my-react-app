const User = ({person}) => {
    return (
        <>
            <h4>Name: {person.name}</h4>
            <p>Email: {person.email}</p>
        </>
    )
}

export default User;