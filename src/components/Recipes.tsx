import {Box} from "@mui/system";
import {FormControl, InputLabel, MenuItem, OutlinedInput, Pagination, Select} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment} from "@mui/material";
import {RecipeCard} from "./RecipeCard";
import {RecipeCardSM} from "./RecipeCardSM";
import {useAPI} from "../context/RecipesContext";
import {Key} from "react";


export const Recipes = () => {
    // @ts-ignore
    const {recipes} = useAPI()
    return <>
        <Box sx={{
            bgcolor: "#f6f6f6",
            width: "70%",
            height: "100vh",
        }}>

            <Box>
                <Box display="flex" sx={{justifyContent: "space-around"}}>
                    <OutlinedInput
                        sx={{
                            width: "555px",
                            borderRadius: "100px",
                            marginTop: "53px",
                            height: "45px",
                            marginLeft: "-111px",
                        }}
                        placeholder="Search for recipes and more..."
                        startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
                    />

                    <FormControl sx={{width: "150px", marginTop: "53px"}}>
                        <InputLabel id="sort-recipes-label">Sort by:</InputLabel>
                        <Select
                            labelId="sort-recipes-label"
                            id="sort-recipes-select"
                            label="Sort by:"
                            sx={{borderRadius: "100px", height: "45px"}}
                        >
                            <MenuItem value={10}> <b>Newest</b></MenuItem>
                            <MenuItem value={20}> <b>Popularity</b></MenuItem>
                            <MenuItem value={30}> <b>Oldest</b></MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box mt="50px" display="flex" flexWrap="wrap">
                    {recipes.map((recipe: {
                        image: string;
                        name: string;
                        description: string;
                        tags: string[];
                    }, index: number) => {
                        if (index % 3 === 0) {
                            return (
                                <Box key={index} display="flex">
                                    <RecipeCard image={recipe.image} name={recipe.name} description={recipe.description}
                                                tags={recipe.tags}/>
                                    <Box display="flex" flexDirection="column">
                                        <RecipeCardSM image={recipes[index + 1].image} name={recipes[index + 1].name}
                                                      tags={recipes[index + 1].tags}/>
                                        <RecipeCardSM image={recipes[index + 2].image} name={recipes[index + 2].name}
                                                      tags={recipes[index + 2].tags}/>
                                    </Box>
                                </Box>
                            );
                        } else {
                            return null;
                        }
                    })}
                </Box>
            </Box>
            <Pagination count={2}/>
        </Box>
    </>
}