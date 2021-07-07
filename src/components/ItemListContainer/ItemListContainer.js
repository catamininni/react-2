/*import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import Counter from '../Counter/Counter'

const ItemListContainer = () =>{

    return(
        <section className="container ">
              <ItemList />
        </section>
    );

};

export default  ItemListContainer;*/

import React, {useEffect, useState} from "react";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import ItemList from "../ItemList";
import {useParams} from 'react-router-dom';


const center = {
  textAlign: "center",
}

const shadowH1 = {
    width: "fit-content",
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
    paddingBottom: "0.8rem",
    paddingLeft: "1rem",
    margin: "2rem",
    "boxShadow": "-0.7rem 0.7rem 0.3rem grey",
}


const ItemListContainer= ({ greeting, description }) => {
  const [localProducts, products] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const {category} = useParams()

  useEffect(  () => {
    const producto = [
        {
          id: 1, 
          name: 'Computadora Mac',
          price: 300000,
          img:"./images/apple1.jpeg",
          description:"Computadora Mac. Caracteristicas color grey space 13 inch. Estado: usada pero en perfectas condiciones."
        },
        {
          id: 2, 
          name: 'Computadora Lenovo',
          price: 250000,
          img:"./images/lenovo-01-2.jpeg",
          description:"Computadora Lenovo. Color gris oscuro, sin usar y con 258 espacio de memoria."
         },
         {
          id: 3, 
          name: 'Computadora Asus',
          price: 200000,
          img:"./images/asus.jpg",
          description:"Computadora Asus. Color gris claro, espaciado, usada con caja abierta, 13 inch ."
         }
                    ]



    const fakeRequest = new Promise((resolve, reject) => {
        setTimeout(() => {
          if(category) {
            const productCategory = producto.filter(item => item.idCategory == category);
            resolve(productCategory);
          }else{
            resolve(producto);
          }
        }, 2000)
    });
    fakeRequest.then((result)=> {
      category === "" ? localProducts(result): setFilteredProduct(result);
    }, (error) => {
        throw new Error("Ha habido un error")
    }
    ).catch((error) =>{
        console.log(error.message)
    });
  }, [category] )

  return (
    <>
        <ItemList products={products} filteredProduct={filteredProduct}/>
    </>
  );
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string,
  description: PropTypes.string,
};

export default ItemListContainer;
