import './NavBar.css';
import Widget from '../Widget/Widget.js';

function NavBar() {
    return(
        <nav class="topnav">
                <div class='logo' ><img src='images/logo.png' alt='' width='60px' height='50px'/></div>
                <Widget/>
                <a href="#section1">Sección 1</a>
                <a href="#section2">Sección 2</a>
        </nav>
    );
}

export default NavBar;
