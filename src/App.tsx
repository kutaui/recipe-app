import './App.css'
import {Main} from "./components/Main";
import {Hero} from "./components/Hero";
import {Header} from "./components/Header";
import {SideBar} from "./components/SideBar";
import {Recipes} from "./components/Recipes";
import {Box} from "@mui/system";
import {RecipesContextProvider} from "./RecipesContext";

function App() {
    return <Main>
        <div>
            <Header/>
            <Hero/>
        </div>
        <RecipesContextProvider>
        <Box sx={{display:"flex"}}>
            <SideBar/>
            <Recipes/>
        </Box>
        </RecipesContextProvider>
    </Main>

}

export default App
