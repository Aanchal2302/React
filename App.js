import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/errorHandle";
import RestMenu from "./src/components/RestMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./src/components/Cart";

const Grocery = lazy(()=>import("./src/components/Grocery"));

const AppLayout = () => {
    return (
    <Provider store={appStore}>
        <div className="header-items">
            <Heading />
            <Outlet/>
        </div>
    </Provider>)
}
const appProvider = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/About",
                element:<About />
            },
            {
                path:"/Contact",
                element:<Contact />
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
            },
            {
                path:"/restaurant/:resId",
                element:<RestMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }

        ]
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appProvider}/>);