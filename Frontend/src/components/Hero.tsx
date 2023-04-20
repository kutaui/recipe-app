import {Box, styled} from "@mui/system";
import Recipes from "../../public/recipes.png";
import Background from "../../public/blob-scene-haikei.svg"
import {Typography} from "@mui/material";

const HeroImage = styled("img")({
    maxWidth: "32rem",
    minWidth: "20rem",
    marginTop: "2rem",
})

export const Hero = () => {

    return <>
        <Box sx={{
            backgroundImage: `url(${Background})`,
            opacity: "1",
            width: "100%",
            height: "61vh",
            marginTop: "-6rem",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
        }}>
            <Box sx={{
                marginLeft:"11rem",
            }}>
                <Typography variant="h1" fontFamily="Arvo" fontWeight="800" width="5px">TASTE</Typography>
                <Typography variant="h1" fontFamily="Arvo" fontWeight="800" marginLeft="10rem" width="5px">THE</Typography>
                <Typography variant="h1" fontFamily="Arvo" fontWeight="800" marginLeft="15rem" width="5px">MAGIC</Typography>
            </Box>
            <Typography paddingLeft="11rem" marginTop="-12rem"  minWidth="200px" maxWidth="200px" fontFamily="Crimson Text" fontWeight="600" variant="subtitle1" >Experience Flavorful
                and Creative Recipes</Typography>


            <HeroImage src={Recipes}/>
        </Box>
    </>
}
