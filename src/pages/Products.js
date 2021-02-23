import React from 'react'
import { useShopify } from "../hooks"

export const Products = props => {
  const {
    products,
    fetchProducts,
  } = useShopify();

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ul>
        {products.map((p, i) => {
          return (<li className="p-item" key={p.id}>
            <img className="p-img" src={p.images[0].src} alt=""/>
            <div>
              <p>{i} - {p.title}</p>
              <p>{p.id}</p>
            </div>
          </li>)
        })}
      </ul>
    </div>
  )
};
