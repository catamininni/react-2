import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {
    const [localProduct, setLocalProduct] = useState([]);

    useEffect(  () => {
        const producto = {id: 1, name: 'Computadora Mac', price: 300000, img:"./images/apple1.jpeg", description:"Computadora Mac. Caracteristicas color grey space 13 inch. Estado: usada pero en perfectas condiciones."}

        const getProducto = (producto) =>{
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(producto);
                }, 1000);
            });
        }
        getProducto(producto)
            .then(result=>setLocalProduct(result))
    },[])

    return (
        <div className="container-fluid container__IDT">{
            <ItemDetail id= {localProduct.id}  name= {localProduct.name} price={localProduct.price} img={localProduct.img} description={localProduct.description}/>
        }</div>
    );
};

export default ItemDetailContainer;