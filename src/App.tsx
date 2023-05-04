import './App.css'
import {Main} from "./Main/Main";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./pages/RootLayout";
import {RecipeDetails} from "./pages/RecipeDetails";
import {RecipesContextProvider} from "./context/RecipesContext";

function App() {
    const router = createBrowserRouter([{
        path: '/',
        element: <RootLayout/>,
        children: [
            {path: '/', element: <Main/>},
            {path: '/:id', element: <RecipeDetails/>},
        ]
    }])


    return <RecipesContextProvider>
    <RouterProvider router={router}/>
    </RecipesContextProvider>
}

export default App
