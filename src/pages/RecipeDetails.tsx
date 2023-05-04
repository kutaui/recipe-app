import {useParams} from "react-router";
import {useAPI} from "../context/RecipesContext";
import {Container, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {ReactElement, JSXElementConstructor, ReactFragment, ReactPortal} from "react";

export const RecipeDetails = () => {
    // @ts-ignore
    const {recipes} = useAPI()

    const {id} = useParams()
    const recipe = recipes.find((recipe: { id: number; }) => recipe.id === Number(id))

    return <>
        <Container sx={{mt: "25px", display: "flex"}}>
            <Box sx={{maxWidth: "400px", minWidth: "300px"}}>
                <img src={recipe.image} alt="" style={{width: "100%", maxHeight: "700px", minHeight: "350px"}}/>
            </Box>
            <Box ml="25px">
                <Typography variant="h3" mb="25px">{recipe.name}</Typography>
                <Typography variant="body1" mb="25px">{recipe.description}</Typography>
                <Box display="flex">
                    <Box  width="300px">
                        <Typography variant="h5" mb="25px">Ingredients</Typography>
                        {recipe.ingredients.map((recipe: string) => <Typography >{recipe}</Typography>)}
                    </Box>
                    <Box width="400px">
                        <Typography variant="h5" mb="25px">Steps</Typography>
                        {recipe.steps.map((recipe: string, index:number) => <Typography><b>{index+1}</b>. {recipe}</Typography>)}
                    </Box>
                </Box>
            </Box>
        </Container>
    </>
}