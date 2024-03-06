import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import AdminLogin from './AdminLogin';
import AdminForgotPassword from './AdminForgotPassword';
import AdminChangePassword from './AdminChangePassword';
import AdminCategory from './AdminCategory';
import AdminAddCategory from './AdminAddCategory';
import AdminEditCategory from './AdminEditCategory';
import AdminProduct from './AdminProduct';
import AdminAddProduct from './AdminAddProduct';
import AdminEditProduct from './AdminEditProduct';
import AdminUsers from './AdminUsers';
import AdminViewProductDetail from './AdminViewProductDetail';
import AdminOrderPrint from './AdminOrderPrint';
import AdminHome from './AdminHome';
import AdminLogout from './AdminLogout';
import AdminOrdersDetail from './AdminOrdersDetail';
import AdminOrder from './AdminOrders'
import NotFound from './NotFound'; // Replace 'NotFound' with the actual component for 404 errors

const root = ReactDOM.createRoot(document.getElementById('root'));

function MyRouter() {
  console.log('myrouter');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/change-password" element={<AdminChangePassword />} />
        <Route path="/logout" element={<AdminLogout />} />
        <Route path="/forgot-password" element={<AdminForgotPassword />} />
        <Route path="/category" element={<AdminCategory />} />
        <Route path="/add-category" element={<AdminAddCategory />} />
        <Route path="/edit-category" element={<AdminEditCategory />} />
        <Route path="/product" element={<AdminProduct />} />
        <Route path="/add-product" element={<AdminAddProduct />} />
        <Route path="/edit-product" element={<AdminEditProduct />} />
        <Route path="/users" element={<AdminUsers />} />
        <Route path="/view-product-detail" element={<AdminViewProductDetail />} />
        <Route path="/orders" element={<AdminOrder />} />
        <Route path="/order-print" element={<AdminOrderPrint />} />
        <Route path="/home" element={<AdminHome />} />
        <Route path="/orders-detail" element={<AdminOrdersDetail />} />
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
https://sec.gujarat.gov.in/voter-rel-app-for.htm
root.render(<MyRouter />);