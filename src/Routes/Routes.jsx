import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import Products from "../Pages/Products";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Overview from "../Pages/Dashboard/Overview";
import SellerRoute from "./PrivateRoute/SellerRoute";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts";
import AddProducts from "../Pages/Dashboard/Seller/AddProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div className="text-3xl text-red-500">This is error</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  // Dashboard Routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayouts />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview />,
      },
      // Seller Routes
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/add-products",
        element: (
          <SellerRoute>
            <AddProducts />
          </SellerRoute>
        ),
      },
    ],
  },
]);
