import React from 'react';


export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.img} alt={product.title} />
      <h3>{product.title}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
