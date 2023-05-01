import {Container} from "@mui/material";
import {Box} from "@mui/system";
import {Header} from "../components/Header";
import {Hero} from "../components/Hero";
import {RecipesContextProvider} from "../context/RecipesContext";
import {Recipes} from "../components/Recipes";

export function Main(props: any) {
    return <Container maxWidth="xl">
        <Box>
            <Hero/>
        </Box>
        <RecipesContextProvider>
            <Box>
                <Recipes/>
            </Box>
        </RecipesContextProvider>
    </Container>



}