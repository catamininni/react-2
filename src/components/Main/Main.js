import NavBar from '../NavBar/NavBar.js';
import './Main.css';
import ItemList from '../ItemList/ItemList.js';
import Counter from '../Counter/Counter'



function Main() {
  return (
    <div className="App">
      <NavBar/>
      <ItemList/>
      <Counter/>
    </div>
  );
}
export default Main;

