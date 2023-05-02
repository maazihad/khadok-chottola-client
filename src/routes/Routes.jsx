import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Pages/Home";
import Blog from "../components/Pages/Blog";
import ErrorPage from "../components/Pages/ErrorPage";

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: 'blog',
            element: <Blog />,
         }
      ]
   }
]);

export default router;