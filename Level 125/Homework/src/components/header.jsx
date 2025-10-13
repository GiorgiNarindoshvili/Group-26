import img1 from "../assets/images/logo-dark-theme.svg"
import img2 from "../assets/images/icon-sun.svg"
import img3 from "../assets/images/icon-moon.svg"
import otherLogo from "../assets/images/logo-light-theme.svg"



const Header = ({toggle, darkMode}) => {
    return(
        <>
           <div id="toppart">
            <img src={darkMode ? img1 : otherLogo} alt="hello" id="blacklogo" />
                <div id="sun">
                    <img src = {darkMode ? img2 : img3} alt="toggletheme" className="theme-icon" onClick={toggle} /> 
                </div>
            </div>  
            <div id="Titlepage">
                <h1>Analyze your text in real-time.</h1>
            </div>
        </>
        
        
    )
}
export default Header;