import { useState } from "react"

import Presentational from "../components/Presentational"
const Container = () => {
    const[userName, setUsername] = useState("")
    const[password, setPassword] = useState("")

    return <Presentational userName = {userName} password = {password} setUsername = {setUsername} setPassword = {setPassword}/>
}

export default Container;