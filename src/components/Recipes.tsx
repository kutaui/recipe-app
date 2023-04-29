import {Box} from "@mui/system";
import {OutlinedInput} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment} from "@mui/material";
import {RecipeCard} from "./RecipeCard";


export const Recipes = () => {

    return <>
        <Box sx={{
            bgcolor: "#f6f6f6",
            width: "70%",
            height: "100vh",
        }}>
            <Box>
                <OutlinedInput sx={{
                    width: "555px",
                    borderRadius: "100px",
                    marginTop: "65px",
                }}
                               placeholder="Search for recipes and more..."
                               startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
                />
            </Box>
            <Box>

                <RecipeCard/>
            </Box>
        </Box>
    </>
}