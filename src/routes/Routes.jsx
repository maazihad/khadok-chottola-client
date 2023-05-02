import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Pages/Home";
import Blog from "../components/Pages/Blog";

const router = createBrowserRouter([
   {
      path: '/',
      element: <App></App>,
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