import NavBar from '../NavBar/NavBar.js';
import './Main.css';
import ItemList from '../ItemList/ItemList.js';
import Counter from '../Counter/Counter'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function Main() {
  return (
    <div className="App">
      <NavBar/>
      <ItemList/>
      <Counter initial={1} stock={10}/>
      <ItemDetailContainer/>
    </div>
  );
}
export default Main;

