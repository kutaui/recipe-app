import React, {useState, useEffect,createContext,useContext} from 'react';
import axios from "axios";
// @ts-ignore
const RecipesContext = createContext();

// @ts-ignore
export function RecipesContextProvider({children}) {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const {data} = await axios.get(
                `https://recipesapi.kutaybekleric.com/recipes`
            );
            setRecipes(data);
        }

        fetchData();
    }, []);
    return (
        <RecipesContext.Provider
            value={{
                recipes
            }}
        >
            {children}
        </RecipesContext.Provider>
    );
}

export function useAPI() {
    const context = useContext(RecipesContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}
