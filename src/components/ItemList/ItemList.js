import React, { useEffect, useState } from 'react';
import Item from '../Item/Items'

  const ItemList = () => {
    const[localItems, setLocalItems] = useState ([])
    useEffect(() => {
        const items = [
            {id: 1, name: 'Pantalones rayados', price: 300, img:"./images/apple1.jpeg"},
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
                <Item id={element.id}  name = {element.name} price={element.price} img={element.img}/>
            </div>
            );
         })}
      </div>
    )
}

  export default ItemList;