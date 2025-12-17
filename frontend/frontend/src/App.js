import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Admin from './pages/Admin';
import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
