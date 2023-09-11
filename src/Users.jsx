import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data));
    }, []);

    return (
        <>
            {
                user.map(user => <User person={user}></User>)
            }
        </>
    )
}

export default Users;