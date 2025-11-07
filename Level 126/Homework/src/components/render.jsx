import React from "react"

const UserProf = ({ user }) => {
    if(!user){
        return <p>Loading for the user...</p>
    }

    return(
        <div>
            <h2>Welcome {user.username || user.email}!</h2>
            <p>Email {user.email}</p>
        </div>
    )
}

export default UserProf