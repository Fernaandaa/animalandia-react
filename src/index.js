import React from 'react'; //para usar react
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route , Link , Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Error404 from './pages/error404/Error404'
import Dogs from './pages/dogs/Dogs'

const root = ReactDOM.createRoot(document.getElementById('root'));//traer el html y lo renderiza 
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Dogs' element={<Dogs />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    
    {/*<Header/> como llamar componentes */}
  </React.StrictMode>
);

