import { useState } from 'react'
import Header from './components/header.jsx'
import Inputbar from './components/inputbar.jsx'
import Rects from './components/threefigs.jsx'


const App = () => {
    const[text, setText] = useState("")
    const [darkMode, setDarkMode] = useState(true)

    const toggle = () => {
        setDarkMode(!darkMode)
    }
    
    return(
        <div className={darkMode ? 'app dark' : 'app light'}>
        
            <Header toggle={toggle} darkMode={darkMode}/>
            <Inputbar onTextChange={setText}/>
            <Rects text={text}/>
        </div>
    )
  
  
}

export default App
