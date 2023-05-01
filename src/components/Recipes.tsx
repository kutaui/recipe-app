import {Box} from "@mui/system";
import {FormControl, InputLabel, MenuItem, OutlinedInput, Pagination, Select} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment} from "@mui/material";
import {RecipeCard} from "./RecipeCard";
import {RecipeCardSM} from "./RecipeCardSM";
import {useAPI} from "../context/RecipesContext";
import {Key, SetStateAction, useState} from "react";


export const Recipes = () => {
    const [recipeQuery, setRecipeQuery] = useState("")
    const [selectSort, setSelectSort] = useState("")
    // @ts-ignore
    const {recipes} = useAPI()
    const handleRecipeSearch = (e: { target: { value: string; }; }) => {
        setRecipeQuery(e.target.value)
    }
    const handleSortSelect = (e: { target: { value: string; }; }) => {
        setSelectSort(e.target.value)
        console.log(selectSort)
    }

    let filteredRecipes = recipes.filter((recipe: {
        name: string;
    }) => recipe.name.toLowerCase().includes(recipeQuery.toLowerCase()))

    if (selectSort === "New") {
        filteredRecipes.sort((a: { id: number }, b: { id: number }) => b.id - a.id);
    } else if (selectSort === "Old") {
        filteredRecipes.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
    }

    return <>
        <Box sx={{
            bgcolor: "#f6f6f6",
            width: "70%",
            height: "100vh",
        }}>

            <Box>
                <Box display="flex" sx={{justifyContent: "space-around"}}>
                    <OutlinedInput
                        onChange={handleRecipeSearch}
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
                            onChange={handleSortSelect}
                            value={selectSort}
                        >
                            <MenuItem value="New"> <b>Newest</b></MenuItem>
                            <MenuItem value="Old"> <b>Oldest</b></MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box mt="50px" display="flex" flexWrap="wrap">
                    {filteredRecipes.map((recipe: {
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
                                        {filteredRecipes[index + 1] && (
                                            <RecipeCardSM image={filteredRecipes[index + 1].image}
                                                          name={filteredRecipes[index + 1].name}
                                                          tags={filteredRecipes[index + 1].tags}/>
                                        )}
                                        {filteredRecipes[index + 2] && (
                                            <RecipeCardSM image={filteredRecipes[index + 2].image}
                                                          name={filteredRecipes[index + 2].name}
                                                          tags={filteredRecipes[index + 2].tags}/>
                                        )}
                                    </Box>
                                </Box>
                            );
                        } else {
                            return null;
                        }
                    })}
                </Box>
            </Box>
            <Box sx={{mr: "auto", ml: "auto", width: "160px", mt: "30px"}}>
                <Pagination count={2}/>
            </Box>
        </Box>
    </>
}