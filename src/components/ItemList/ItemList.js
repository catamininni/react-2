/*import React, { useEffect, useState } from 'react';
import Item from '../Item/Items'
import Counter from '../Counter/Counter'

  const ItemList = () => {
    const[localItems, setLocalItems] = useState ([])
    useEffect(() => {
        const items = [
            {id: 1, 
            name: 'Computadora Mac', 
            price: 300000, 
            img:"./images/apple1.jpeg"},

            {id: 2, 
            name: 'Computadora Lenovo', 
            price: 250000, 
            img:"./images/lenovo-01-2.jpeg"},

            {id: 3, 
            name: 'Computadora Asus', 
            price: 200000, 
            img:"./images/asus.jpg"},
        ]
        const getItems = (productos) => {
            return new Promise ((resolve, reject) =>{
                setTimeout(() => {
                    resolve(productos)
                }, 2000)
            })
        }
        getItems(items)
            .then(result => setLocalItems(result))
            .catch(error => console.log(error.message))
    },[])
    
return (
      <div className='row'>
                   {localItems.map ((element) =>{
            return (
                <div className="col-4 row__itemlist">
                <Item id={element.id}  
                name = {element.name} 
                price={element.price} 
                img={element.img}/>
            </div>
            );
         })}
      </div>
    )
}

  export default ItemList;*/

import React from 'react';
import PropTypes from "prop-types";
import Item from '../Item/Items';
import Counter from '../Counter/Counter';

const ItemList = ({ products, filteredProduct }) => {
    // Will show X Items. Each Item has an ItemCount.
    // console.log("Filtered product dede ItemList", filteredProduct);
    // console.log("filteredproduct length:", filteredProduct.length, "products length:", products.length);
    return (
      <>
        { products.length ?
            products.map( ({title, id, stock,category, price, img, description}) => {
                return (
                        <Item
                            id={id}
                            title={title}
                            category={category}
                            stock={stock}
                            price={price}
                            img={img}
                            description={description}
                        />
                )
            })
            :
             filteredProduct.map( ({title, id, stock,category, price, img, description}) => {
                return (
                        <Item
                            id={id}
                            title={title}
                            category={category}
                            stock={stock}
                            price={price}
                            img={img}
                            description={description}
                        />
                )
            })
        }
      </>
    )
}

ItemList.propTypes = {
   products: PropTypes.array,
};

export default ItemList;