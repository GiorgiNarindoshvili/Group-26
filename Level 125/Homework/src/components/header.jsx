import img1 from "../assets/images/logo-dark-theme.svg"
import img2 from "../assets/images/icon-sun.svg"
const Header = () => {
    return(
        <>
           <div id="toppart">
            <img src={img1} alt="hello" id="blacklogo" />
                <div id="sun">
                    <img src = {img2} alt="" /> 
                </div>
            </div>  
            <div id="Titlepage">
                <h1>Analyze your text in real-time.</h1>
            </div>
        </>
        
        
    )
}
export default Header;