import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {
    const [localProduct, setLocalProduct] = useState([]);

    useEffect(  () => {
        const producto = {id: 1, name: 'Computadora Mac', price: 300000, img:"./images/apple1.jpeg"},

        const getProducto = (producto) =>{
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(producto);
                }, 6000);
            });
        }
        getProducto(producto)
            .then(result=>setLocalProduct(result))
    },[])

    return (
        <div className="container-fluid container__IDT">{
            <ItemDetail id= {localProduct.id}  name= {localProduct.name} price={LocalProduct.price} img={LocalProduct.img}/>
        }</div>
    );
};

export default ItemDetailContainer;