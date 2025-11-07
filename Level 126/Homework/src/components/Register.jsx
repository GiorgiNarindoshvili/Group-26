import userAccept from "../hooks/userAccept";


const Register = ({onRegister}) => {
    const {values, loading, handleChange, handleSubmit} = userAccept({username: "", email: "", password: ""}, onRegister);



    return(
        <>
            <form onSubmit={handleSubmit}>
                <h2>Make A Registration!</h2>
                <input type="text" name="name"  placeholder="Enter Your Username" onChange={handleChange} value={values.username}/>
                <input type="email" name="email" placeholder="Enter Your Email" onChange={handleChange}  value={values.email}/>
                <input type="password" name="password" placeholder="Enter Your Password" onChange={handleChange} value={values.password}/>
                <button onSubmit={handleSubmit} disabled={loading}>Click to Register</button>
            </form>
        </>
    )
}

export default Register;