import React from 'react';
import './ItemDetail.css';
import Counter from '../Counter/Counter';
import Item from '../Item/Items'


const ItemDetail = ({stock, name, price, img, description}) => {
    
    return (
        <div className= 'detail'>
<div className='titulo'><p className="title__item"> {name}</p></div>
<div className="container">
 <div className="row">
<div className="col-lg">
     <img className="" src={img}/>
</div>
<div className=" col-sm div__item div__detalle_producto ">
<div className="div__info_producto">
     <p><b>Precio </b>: $ {price},00</p>
    <p><b>Descripcion</b>: Computadora Mac.
                           Caracteristicas: color grey space, 13 inch, 13 pulgadas.
                           Estado: usada, pero en perfectas condiciones.{description}</p>
 </div>
 <p><b>Stock</b>: {stock}</p>
     <Counter initial={1} stock={10}/>

                        </div>  
                    </div>
                </div>
        </div>
    );
};


export default ItemDetail;