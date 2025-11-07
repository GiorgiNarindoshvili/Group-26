import { useState } from 'react'
import Register from './components/Register'
import UserProf from './components/render'
import Login from './components/Authorize'




const App = () => {
    const [user, setUser] = useState(null)
    const[isLogin, setIsLogin] = useState(false)


    const handleRegister = (data) => {
        setUser(data)
    }

    const handleLogIn = (data) => {
        setUser({username: "DemoUser", ...data});
    }

    if(user){
        return <UserProf user={user}/> 
    }



 return(
    <>
      {isLogin ? (
        <Login onLogin = {handleLogIn}/>
      ) : (
        <Register onRegister={handleRegister}/>
      )}
      <button onClick={() => setIsLogin(!isLogin)}>{!isLogin ? "Go To Registration" : "Go To Log In!"}</button>
    </>
 )
}

export default App
