import { useState } from 'react'
import React from 'react'

//props is way that helps you to pass data or information from one component to another, from parent component to child

const App = () => {
    const myName = "Giorgi";
    return(
        <>
            <h1>{myName}</h1>        
        </>
    )
}

export default App
