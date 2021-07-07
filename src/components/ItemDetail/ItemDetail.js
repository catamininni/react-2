/*import React from 'react';
import './ItemDetail.css';
import Counter from '../Counter/Counter';
import Item from '../Item/Items'
import {NavLink} from 'react-router-dom';


const ItemDetail = ({stock, name, price, img, description}) => {
    
    const comprado= () => {
        console.log('comprado')
       }
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
     <p><b>Precio </b>: $ {price}</p>
     <p><b>Descripcion</b>:{description}</p>
 </div>
 <p><b>Stock</b>: {stock}</p>
     <Counter initial={1} stock={10} onAdd={comprado}/>

                    </div>  
                    </div>
                    </div>
        </div>
    );

};

export default ItemDetail;*/

import React, { useState, useContext } from 'react';
import PropTypes from "prop-types";
import {NavLink} from 'react-router-dom';
import Counter from '../Counter/Counter';
import ZeroInitialSelected from '../ZeroInitialSelected/ZeroInitialSelected'

  const ItemDetail = ({product}) => {
  const [initial,onAdd] = useState (0);
  const [localProducts, setLocalProducts] = useState(0);
  const {addToCache} = useContext(CartContext); 
  const handleAddItem = (e) => {
    e.preventDefault();
    const numberOfItems = Number(e.target.elements[1].value);
    const itemTitle = product.title;
    const price = product.price;
    const finalPrice = product.numberOfItems*price;
    const productID = product.id;

    const item = { productID, itemTitle, numberOfItems, price, finalPrice };
    if (item.numberOfItems > 0){
      setLocalProducts(initial);
      addToCache(item)
    }

  };

  return (
      <Container fluid>

      <p>Title:{product.title}</p>
      <p>Description:{product.description}</p>
      <Image src={product.pictureURL}/>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock} units</p>
      <p>finalPrice = product.numberOfItems*price</p>

   <Form onSubmit={handleAddItem}>
       <Counter
        initial={initial}
        stock={product.stock}
        onAdd={onAdd}
       />
      {localProducts > 0  ?
      <NavLink activeClassName="selected">
      <Button type="button" variant="primary" size="lg">
           Finish shop
      </Button>
       </NavLink>
: initial > 0?
     <Button type="submit" variant="success" size="lg">
   Add {initial} to cart
     </Button>
:
     <ZeroInitialSelected />
}
  </Form>
</Container>

  );
}

ItemDetail.propTypes = {
    product: PropTypes.object,
};

export default ItemDetail;