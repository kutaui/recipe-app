import {Box} from "@mui/system";
import {OutlinedInput} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment} from "@mui/material";
import {RecipeCard} from "./RecipeCard";
import {RecipeCardSM} from "./RecipeCardSM";
import {useAPI} from "../RecipesContext";
import {Key} from "react";


export const Recipes = () => {
    // @ts-ignore
    const {recipes} = useAPI()
    console.log("recipesdeyi", recipes)
    return <>
        <Box sx={{
            bgcolor: "#f6f6f6",
            width: "70%",
            height: "100vh",
        }}>
            <Box>
                <OutlinedInput
                    sx={{
                        width: "555px",
                        borderRadius: "100px",
                        marginTop: "65px",
                    }}
                    placeholder="Search for recipes and more..."
                    startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
                />
                <Box display="flex" flexWrap="wrap">
                    {recipes.map((recipe, index) => {
                        if (index % 3 === 0) {
                            return (
                                <>
                                    <RecipeCard image={recipe.image} name={recipe.name} description={recipe.description}
                                                tags={recipe.tags}/>
                                    <Box display="flex" flexDirection="column">
                                        <RecipeCardSM image={recipes[index + 1].image} name={recipes[index + 1].name}
                                                      tags={recipes[index + 1].tags}/>
                                        <RecipeCardSM image={recipes[index + 2].image} name={recipes[index + 2].name}
                                                      tags={recipes[index + 2].tags}/>
                                    </Box>
                                </>
                            );
                        } else {
                            return null;
                        }
                    })}
                </Box>
            </Box>
        </Box>
    </>
}