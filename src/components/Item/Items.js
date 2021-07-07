/*import React from 'react'
import PropTypes from "prop-types";
import './Item.css'
import '../ItemList/ItemList'
import Counter from'../Counter/Counter'

const Items = ({name, price, img, stock}) => {
    return(
        <div className='card'>
            <h1>{name}</h1>
            <img src={img} alt='' width='700px' height='300px'/>
            <h2>${price}</h2>
            <h1>{stock}</h1>

        </div>
    )
}

export default Items;*/


import React, { useState } from "react";
import PropTypes from "prop-types";
import {Link, NavLink} from 'react-router-dom';
import Counter from "../Counter/Counter";
import ZeroInitialSelected from '../ZeroInitialSelected';


const Item = ({ title, stock, id, price, img, description }) => {
  const [initial, onAdd] = useState(0);
  const [localProducts, setLocalProducts] = useState(0);

  const handleAddItem = (e) => {
    e.preventDefault();
    const numberOfItems = Number(e.target.elements[1].value);
    const itemName = title;
    const finalPrice = numberOfItems*price;

    const item = { id, numberOfItems, itemName, price, finalPrice };
    if (item.numberOfItems > 0){
      setLocalProducts(initial);
    }
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Link to={`/item/${id}`}>
        <Card.Img variant="top" src={img} />
      </Link>
      <ProductCardBody>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Stock: <i> {stock} </i></Card.Text>
        <Card.Text>Price: $ <b> {price} </b> with IVA included</Card.Text>
      </ProductCardBody>
      <Form onSubmit={handleAddItem}>

        <Counter
          initial={initial}
          stock={stock}
          onAdd={onAdd}
        />

        <Form.Group className="d-flex justify-content-between p-2">

        </Form.Group>
          {localProducts > 0  ?
            <NavLink activeClassName="selected" style={{textDecoration:"none"}} to={'/cart'}>
              <Button type="button" variant="primary" size="lg">
              Finish shop
              </Button>
            </NavLink>
            :
            initial > 0?
           <Button type="submit" variant="success" size="lg">
            Add {initial} to cart
            </Button>
            :
            <ZeroInitialSelected />
          }
      </Form>

    </Card>
  );
};

Item.propTypes = {
  price: PropTypes.number,
  stock: PropTypes.number,
  id: PropTypes.number,
  pictureURL: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Item;
