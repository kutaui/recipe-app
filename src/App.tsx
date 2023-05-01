import './App.css'
import {Main} from "./components/Main";
import {Hero} from "./components/Hero";
import {Header} from "./components/Header";
import {SideBar} from "./components/SideBar";
import {Recipes} from "./components/Recipes";
import {Box} from "@mui/system";
import {RecipesContextProvider} from "./context/RecipesContext";

function App() {
    return <Main>
        <Box>
            <Header/>
            <Hero/>
        </Box>
        <RecipesContextProvider>
            <Box>
                <Recipes/>
            </Box>
        </RecipesContextProvider>
    </Main>

}

export default App
