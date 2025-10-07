import {lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestrauMenuPage from "./components/RestrauMenuPage";

// dynamic loading/ lazy loading...
const Contact = lazy(()=> import("./components/Contact"));

const AppLayout = () => {
  
  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaraunts/:resId",
        element: <RestrauMenuPage/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
