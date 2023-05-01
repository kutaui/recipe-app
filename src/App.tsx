import './App.css'
import {Main} from "./Main/Main";
import {Hero} from "./components/Hero";
import {Header} from "./components/Header";
import {SideBar} from "./components/SideBar";
import {Recipes} from "./components/Recipes";
import {Box} from "@mui/system";
import {RecipesContextProvider} from "./context/RecipesContext";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./pages/RootLayout";
import {RecipeDetails} from "./pages/RecipeDetails";

function App() {
const router =createBrowserRouter([{
    path: '/',
    element: <RootLayout/>,
    children: [
        {path: '/', element: <Main/>},
        {path: '/:id', element: <RecipeDetails/>},
    ]
}])






    return <RouterProvider router={router}/>

}

export default App
