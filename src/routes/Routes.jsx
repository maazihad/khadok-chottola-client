import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Pages/Home";
import Blog from "../components/Pages/Blog";
import ErrorPage from "../components/Pages/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Terms from "../components/Pages/Terms";
import MainLayout from "../components/layout/MainLayout";
import RecipesLayout from "../components/layout/RecipesLayout";
import ChefRecipeDetails from "../components/Pages/ChefRecipeDetails";
import ProtectRoute from "./ProtectRoute";

const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: 'blog',
            element: <Blog />,
         },
         {
            path: 'login',
            element: <Login />
         },
         {
            path: 'register',
            element: <Register />
         },
         {
            path: 'terms',
            element: <Terms></Terms>,
         },

      ]
   },
   {
      path: 'chefs',
      element: <RecipesLayout />,
      children: [
         {
            path: ':id',
            element: <ProtectRoute><ChefRecipeDetails></ChefRecipeDetails></ProtectRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
         }
      ]
   },

]);

export default router;