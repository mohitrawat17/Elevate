import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Cart from './components/Cart'
import AboutUs from './components/AboutUs'
import Help from './components/Help'
import Contact from './components/Contact'
import Deals from './components/Deals'
import Error from './components/ErrorElement'

const App=()=>{
    return(
        <div className=" bg-slate-100 overflow-x-hidden">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
             path:"/contact",
             element:<Contact/>
            },
            {
                path: "/",
                element: <Body/>
              },
            {
            path:"/about",
            element:<AboutUs/>
            },
            {
            path:"deals",
            element:<Deals/>
            },
            {
              path:"help",
              element:<Help/>
            },{
                path:"cart",
                element:<Cart/>
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)