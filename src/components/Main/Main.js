import NavBar from '../NavBar/NavBar.js';
import './Main.css';
import ItemList from '../ItemList/ItemList.js';
import Counter from '../Counter/Counter'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";

function Main() {
  return (
    <div className="App">
       <NavBar/>
      <Router>
      <Switch>
        <Route path="/productos">
        <ItemList/>
      </Route>
      <Route path="/detalles">
      <ItemDetailContainer/>
      </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default Main;

