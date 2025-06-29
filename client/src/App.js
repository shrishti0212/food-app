import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart.js";
import PaymentSuccessful from "./components/PaymentSuccessful.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import { useLocation } from "react-router-dom";
import SplashScreen from "./components/SplashScreen.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
import Grocery from "./components/Grocery.js";
import About from "./components/About.js"

const AppLayout = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/", "/login", "/register"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <Provider store={appStore}>
      <div className="app">
        {!shouldHideHeader && <Header />}
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      
      {
        path: "/",
        element: <SplashScreen />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Body />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
              <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
      },
      {
        path: "/grocery",
        element: (
          <ProtectedRoute>
              <Grocery />
          </ProtectedRoute>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <ProtectedRoute>
            <RestaurantMenu />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/payment-success",
        element: (
          <ProtectedRoute>
            <PaymentSuccessful />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default appRouter;
