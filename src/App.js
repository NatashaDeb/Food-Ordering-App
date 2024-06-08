import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = ()=> {
    return(
            
       <Provider store={appStore()}>{/*Provided redux store to our application*/}
         <div className="app">
          <Header/>
          <Outlet />
          <Footer />
        </div>
       </Provider>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading ...</h1>} >
                  <Grocery />
                 </Suspense>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />
  },
]) ;


 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);