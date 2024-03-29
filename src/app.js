import React, { useEffect, useState } from "react"; //importing React from node module
import ReactDOM from "react-dom/client"; //importing React from node module of react
import Body from "./components/body/Body";
import Header from "./components/navbar/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/contact/Contact";
import AboutUs from "./components/about/AboutUs";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestuarantMenu from "./components/restuarantMenu/RestuarantMenu";

import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
import Cart from "./components/cart/Cart";
import { Auth0Provider } from "@auth0/auth0-react";
import SearchBar from "./components/search/SearchBar";

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
    <Auth0Provider
      domain="dev-jc6bd0mu1y5madbo.us.auth0.com"
      clientId="EHVveXAQTuFwZZVKya4erhdHfmg7p4wW"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
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
    </Auth0Provider>
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
        path: "/search",
        element: <SearchBar />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
