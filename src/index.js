import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      { index: true, path: '/', element: <Home /> },
      {path:'/products', element: <AllProducts/>},
      {path:'/products/new', element: <NewProduct/>},
      {path:'/products/:id', element: <ProductDetail/>},
      {path:'/carts', element: <MyCart/>},
      {path:'/login', element: <Login/>},
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

