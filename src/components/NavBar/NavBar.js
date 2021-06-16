import './NavBar.css';
import Widget from '../Widget/Widget.js';


function NavBar() {
    return(
        <nav className="topnav">
                <div className='logo' ><img src='images/logo.png' alt='' width='60px' height='50px'/></div>
                <Widget/>
                <a href="#section3">Login</a>
                <a href="#section2">Cart</a>
                <a href="#section1">Home</a>
        </nav>
    );
}

export default NavBar;
