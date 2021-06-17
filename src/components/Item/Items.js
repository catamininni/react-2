import React from 'react'
import './Item.css'
import '../ItemList/ItemList'

const Items = ({id, name, price, img}) => {
    return(
        <div className='card'>
            <h1>{name}</h1>
            <img src>{img}</img>
            <h2>${price}</h2>

        </div>
    )
}

export default Items;