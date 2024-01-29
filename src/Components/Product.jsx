import React from 'react';
import { Item } from './Item';
import { ItemsList } from '../Items/itemsList';

function Product({ title, start, end }) {

  return (
    <div>
        <h5 className='title'>{title}</h5>
        <section  className='box'>
            {ItemsList.slice(start, end).map((item, index) => (
                <Item key={index} data={item} />
            ))}
        </section>
    </div>
  )
}

export default Product;