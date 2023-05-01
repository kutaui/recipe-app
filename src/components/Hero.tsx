import {Box, styled} from "@mui/system";
import Recipes from "/recipes.png";
import Background from "/blob-scene-haikei.svg"
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
            width: "100%",
            minWidth:"79vw",
            height: "600px",
            marginTop: "-6rem",
            display: "flex",
            alignItems: "center",
            gap: "2rem",

        }}>
            <Box sx={{
                marginLeft:"11rem",
                "@media (max-width: 1440px)": {
                    marginLeft:"10rem",

                },
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
