import "../../css/NavBar.css"
import { Link } from "react-router-dom";
const NavBar = () => {
    return(
       
        <ol>
            <li><Link to ="/Home" style={{textDecoration:"none"}}>Home</Link></li>
            <li><Link to ="/About"style={{textDecoration:"none"}}>About</Link></li>
            <li><Link to ="/skills"style={{textDecoration:"none"}}>Skills</Link></li>
            <li><Link to ="/login"style={{textDecoration:"none"}}>Login</Link></li>
            <li><Link to ="/Reference"style={{textDecoration:"none"}}>Reference</Link></li>
            <li><Link to ="/callback"style={{textDecoration:"none"}}>Callback</Link></li>
        </ol>
    )

}
export default NavBar;