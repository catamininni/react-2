import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {
    const [localProduct, setLocalProduct] = useState([]);
    const {id} = useParams();
    
    useEffect(  () => {
        const producto = [
            {
              id: 1, 
              title: 'Computadora Mac',
              price: 300000,
              img:"./images/apple1.jpeg",
              description:"Computadora Mac. Caracteristicas color grey space 13 inch. Estado: usada pero en perfectas condiciones."
            },
            {
              id: 2, 
              title: 'Computadora Lenovo',
              price: 250000,
              img:"./images/lenovo-01-2.jpeg",
              description:"Computadora Lenovo. Color gris oscuro, sin usar y con 258 espacio de memoria."
             },
             {
              id: 3, 
              title: 'Computadora Asus',
              price: 200000,
              img:"./images/asus.jpg",
              description:"Computadora Asus. Color gris claro, espaciado, usada con caja abierta, 13 inch ."
             }
                        ]

 const productId = producto.filter(item => item.id == id);
 const [filteredProduct] = productId; 
                          
 const fakeRequest = new Promise((resolve, reject) => {
       setTimeout(() => {
       resolve(productId)
    }, 2000)
    });
       fakeRequest.then((result)=> {
       setLocalProduct(filteredProduct)
    }, (error) => {
    throw new Error("Ha habido un error")
    }
       ).catch((error) =>{
        console.log(error.message)
    });
    }, [id])
                    
    return (
      <> { product.hasOwnProperty("id") &&
    <ItemDetail 
       product={localProduct}
    />
    }
    </>
    )
    }
                
export default ItemDetailContainer;