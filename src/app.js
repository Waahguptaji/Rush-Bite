import React, { useEffect, useState } from "react"; //importing React from node module
import ReactDOM from "react-dom/client"; //importing React from node module of react
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestuarantMenu from "./components/RestuarantMenu";
import { Suspense } from "react";

import { lazy } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
import Cart from "./components/Cart";

//We will not do this because we want it to load when it clicked

/*import Grocery from "./components/Grocery";*/

//Dynamic Import / LazyLoading
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //Authentication
  useEffect(() => {
    //Make an API call to get Username and data
    const data = {
      name: "Sahil Gupta",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
            <Header />
          </UserContext.Provider>
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restuarants/:resId",
        element: <RestuarantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
