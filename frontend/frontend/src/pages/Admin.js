import { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const token = localStorage.getItem('token');

  const loadProducts = () => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addProduct = async () => {
    await axios.post(
      'http://localhost:5000/api/products',
      { title, price, description },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    setTitle('');
    setPrice('');
    setDescription('');
    loadProducts();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin panel</h2>

      <h3>Add product</h3>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} /><br />
      <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} /><br />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} /><br />
      <button onClick={addProduct}>Add</button>

      <hr />

      <h3>Products</h3>
      {products.map(p => (
        <div key={p.id}>
          <b>{p.title}</b> — {p.price} ₽
        </div>
      ))}
    </div>
  );
}

export default Admin;
