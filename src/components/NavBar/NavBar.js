import './NavBar.css';
import Widget from '../Widget/Widget.js';
import Main from '../Main/Main.js'
import{
    Navlink,
} from "react-router-dom";


function NavBar() {
    return(
        <nav className="topnav">
                <div className='logo' ><img src='images/logo.png' alt='' width='60px' height='50px'/></div>
                <Widget/>
                <a href="#Inicio">Inicio</a>
                <a href="#Productos">Productos</a>
                <a href="#Detalles">Detalles</a>
        </nav>
    );
}

function NavLink(){
  return(
  <ul>
    <li><NavLink activeClassName="#Inicio" exact to={'/'}></NavLink></li>
    <li><NavLink activeClassName="#Productos" exact to='/productos'></NavLink></li>
    <li><NavLink activeClassName="#Detalles" exact to='/detalles'></NavLink></li>
</ul>
  );
}

export default NavBar;
