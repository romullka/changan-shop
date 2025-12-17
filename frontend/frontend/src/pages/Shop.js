import { useEffect, useState } from 'react';
import axios from 'axios';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>CHANGAN Auto Parts</h2>

      {products.map(p => (
        <div key={p.id} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <b>{p.price} ₽</b>
        </div>
      ))}
    </div>
  );
}

export default Shop;
