import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Register from "../pages/auth/Register";
import Categories from "../pages/admin/categories/Categories";
import CreateCategory from "../pages/admin/categories/CreateCategory";
import Login from "../pages/auth/Login";
import Products from "../pages/admin/products/Products";
import CreateProduct from "../pages/admin/products/CreateProduct";

const router = createBrowserRouter([
    {
        path: '',
        element: <AppLayout />,
        children: [
            { path: '', element: <Home /> },
            { path: 'kayit-ol', element: <Register /> },
            { path: 'giris-yap', element: <Login /> },
        ]
    },
    {
        path: 'admin',
        element: <AdminLayout />,
        children: [
            { path: '', element: <Dashboard /> },
            
            { path: 'kategoriler', element: <Categories /> },
            { path: 'kategoriler/ekle', element: <CreateCategory /> },

            { path: 'urunler', element: <Products /> },
            { path: 'urunler/ekle', element: <CreateProduct /> },
        ]
    }
])

export default router