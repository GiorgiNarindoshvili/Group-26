import userAccept from "../hooks/userAccept";


const Login = ({onLogin}) => {
    const {values, loading, handleChange, handleSubmit} = userAccept({email: "", password: ""}, onLogin);



    return(
        <>
            <form onSubmit={handleSubmit}>
                <h2>Log In!</h2>
                <input type="email" name="email" placeholder="Enter Your Email" onChange={handleChange} value={values.email}/>
                <input type="password" name="password" placeholder="Enter Your Password" onChange={handleChange} value={values.password}/>
                <button onSubmit={handleSubmit} disabled={loading}>Click to Log In!</button>
            </form>
        </>
    )
}

export default Login;