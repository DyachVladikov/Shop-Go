import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx';
import Shop from './pages/Shop/Shop.jsx';
import Order from './pages/Order/Order.jsx';
import CountProductsContentProvider from "./context/countProductsContext.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { index: true, element: <Home /> }, // '/' — главная
      {path: "productdetails/:id", element: <ProductDetails />},
      {path: "shop/:category", element: <Shop />},
      {path: "order", element: <Order />}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountProductsContentProvider>
        <RouterProvider router={router} />
    </CountProductsContentProvider>
  </StrictMode>,
)
