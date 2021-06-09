import React from 'react'
import Counter from '../Counter/Counter'

const ItemList = () => {

  const onAdd = (amount) => 
{
       console.log('compraste ${amount}productos') 
}    
return(
      <div className='mt-3'>
      <div className='titulo'><h2>Ah!Cucu</h2>
      < Counter initial={1} stock={6} onAdd={onAdd} /> 
      </div>
      </div>

    );
  }

  export default ItemList;