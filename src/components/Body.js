import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Browse from './Browse';
import Login from './login';

const Body = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;

