import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import RestaurantCard from "./components/RestaurantCard.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
import PaymentSuccessful from "./components/PaymentSuccessful.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import { useLocation } from "react-router-dom";
import  SplashScreen  from "./components/SplashScreen.js";

const Grocery = lazy(() => import("./components/Grocery.js")); 
const About = lazy(() => import("./components/About.js"  ));

const AppLayout =()=> {

     const location = useLocation();
     const hideHeaderRoutes = ["/login", "/register","/"];
     const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

    return(
       <Provider store={appStore}>
        <div className="app">
          {!shouldHideHeader && <Header />}
            < Outlet/>
        </div>
        </Provider>
    );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      
      {
        path:"/home",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path:"/contact",
        element:<Contact/>,
      }, 
      {
        path: "/grocery",
        element: <Suspense fallback = {<h1>Loading.....</h1>} ><Grocery /></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/payment-success",
        element: <PaymentSuccessful/>,
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/register",
        element:<Register/>,
      },
      {
         path: "/",
         element: <SplashScreen />,
      }
    ],
    errorElement:<Error/>,
  },
  
  ]
);

export default appRouter;
