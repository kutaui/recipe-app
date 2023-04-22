import {Box} from "@mui/system";
import {Link, Typography} from "@mui/material";

export const Header = () => {
    return <>
        <Box sx={{

            opacity: "1",
            width: "100%",
            height: "10vh",
            marginTop: "-1.4rem",

            display: "flex",
            alignItems: "center",
            gap: "2rem",
            justifyContent: "space-evenly",
            fontSize: "1.2rem"

        }}>

            <Typography  marginLeft="5rem" color="black" variant="h5" fontFamily="Rubik Wet Paint">RecipeApp</Typography>
            <Link sx={{
                color: "black",
                textDecoration: "none",
                fontWeight: "800",
                fontFamily: "Roboto Slab",
                cursor: "pointer",
            }}>Home</Link> <Link sx={{
            color: "black",
            textDecoration: "none",
            fontFamily: "Roboto Slab",
            cursor: "pointer",

        }}>Shop</Link> <Link sx={{
            color: "black",
            textDecoration: "none",
            cursor: "pointer",
            fontFamily: "Roboto Slab",
        }}>Contact</Link> <Link sx={{
            color: "black",
            textDecoration: "none",
            fontFamily: "Roboto Slab",
            cursor: "pointer",
            marginRight: "20rem"
        }}>About Us</Link>
        </Box>
    </>
}