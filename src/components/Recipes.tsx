import {Box} from "@mui/system";
import {FormControl, InputLabel,MenuItem, OutlinedInput, Pagination, Select} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment} from "@mui/material";
import {RecipeCard} from "./RecipeCard";
import {RecipeCardSM} from "./RecipeCardSM";
import {useAPI} from "../context/RecipesContext";
import React, {Key, SetStateAction, useState} from "react";
import {SideBar} from "./SideBar";
import { Link } from "react-router-dom";


export const Recipes = () => {
    // @ts-ignore
    function Link(props: LinkProps): React.ReactElement;

    interface LinkProps
        extends Omit<
            React.AnchorHTMLAttributes<HTMLAnchorElement>,
            "href"
        > {
        replace?: boolean;
        state?: any;
        to: To;
        reloadDocument?: boolean;
        preventScrollReset?: boolean;
        relative?: "route" | "path";
    }

    type To = string | Partial<Path>;

    interface Path {
        pathname: string;
        search: string;
        hash: string;
    }

    const [recipeQuery, setRecipeQuery] = useState("")
    const [selectSort, setSelectSort] = useState("")
    // @ts-ignore
    const {recipes} = useAPI()
    const handleRecipeSearch = (e: { target: { value: string; }; }) => {
        setRecipeQuery(e.target.value)
    }
    const handleSortSelect = (e: { target: { value: string; }; }) => {
        setSelectSort(e.target.value)
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
            height: "82.5vh",
            width: "79.2vw",
        }}>
            <Box width="100%" display="flex">
                <SideBar/>
                <Box ml="100px">
                    <Box width="1150px" display="flex" sx={{justifyContent: "space-around",}}>
                        <OutlinedInput
                            onChange={handleRecipeSearch}
                            sx={{
                                width: "555px",
                                borderRadius: "100px",
                                marginTop: "53px",
                                height: "45px",
                                ml: "-15px",
                            }}
                            placeholder="Search for recipes and more..."
                            startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
                        />

                        <FormControl sx={{width: "150px", marginTop: "53px"}}>
                            <InputLabel id="sort-recipes-label" sx={{
                                marginTop: "-5px",
                                transition: "margin-top 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                ...(selectSort && {
                                    marginTop: "0px",
                                }),
                            }}
                                        shrink={!!selectSort}>Sort by:</InputLabel>
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
                    <Box ml="100px" height="500px" mt="50px" display="flex" flexWrap="wrap">
                        {filteredRecipes.map((recipe: {
                            id: number;
                            image: string;
                            name: string;
                            description: string;
                            tags: string[];
                        }, index: number) => {
                            if (index % 3 === 0) {
                                return (
                                    <Box key={index} display="flex">
                                        <Link style={{textDecoration:"none"}}  to={`${recipe.id}`}>
                                            <RecipeCard image={recipe.image} name={recipe.name}
                                                        description={recipe.description}
                                                        tags={recipe.tags}/>
                                        </Link>
                                        <Box display="flex" flexDirection="column">
                                            {filteredRecipes[index + 1] && (
                                                <Link to={`/${filteredRecipes[index + 1].id}`}>
                                                    <RecipeCardSM image={filteredRecipes[index + 1].image}
                                                                  name={filteredRecipes[index + 1].name}
                                                                  tags={filteredRecipes[index + 1].tags}/>
                                                </Link>
                                            )}
                                            {filteredRecipes[index + 2] && (
                                                <Link to={`/${filteredRecipes[index + 2].id}`}>
                                                    <RecipeCardSM image={filteredRecipes[index + 2].image}
                                                                  name={filteredRecipes[index + 2].name}
                                                                  tags={filteredRecipes[index + 2].tags}/>
                                                </Link>
                                            )}
                                        </Box>

                                    </Box>

                                )
                                    ;
                            } else {
                                return null;
                            }
                        })}
                    </Box>
                </Box>
            </Box>
            <Box sx={{mr: "auto", ml: "auto", width: "160px", mt: "-30px", pb: "30px"}}>
                <Pagination count={2}/>
            </Box>
        </Box>
    </>
}