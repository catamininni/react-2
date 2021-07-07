import React, { useState }from "react";
import './Counter.css';
import '../Main/Main.js'
import ItemList from '../ItemList/ItemList'

const Counter = ({initial, stock, onAdd}) => {

    const [items, setItems] = useState(initial)

    const addItems = () => {
      
        items < stock ? setItems(items+1) : alert('no hay mas stock')
    }

    const removeItem = () => {

        items > 0 && setItems (items-1)
    }

    return (
        <div className='container counter mt-3 '>
            <div className='d-flex align-items-center justify-content-center mb1'>
            <i className="far fa-minus-square counterButton" onClick={removeItem}></i>
            <span className="counterAmount">{items}</span>
            <i className="far fa-plus-square counter Button" onClick={addItems}></i>
            </div>
           <div className='botonA'> <button className='btn btn-secondary w-100' onClick={() => onAdd(items)}>Agregar</button></div>
        </div>
    )
}

Counter.propTypes = {
    initial: PropTypes.number,
    stock: PropTypes.number,
    onAdd: PropTypes.func.isRequired,
  };

export default Counter;