import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import App from './App';
import './index.css';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
    </Route>,
  ),
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>,
);
