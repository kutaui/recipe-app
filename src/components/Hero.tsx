import {Box, styled} from "@mui/system";
import Recipes from "/recipes.png";
import Background from "/blob-scene-haikei.svg"
import {Typography, useMediaQuery, useTheme} from "@mui/material";

const HeroImage = styled("img")({
    maxWidth: "32rem",
    minWidth: "22rem",
    marginTop: "2rem",
})

export const Hero = () => {
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    return <>
        <Box sx={{
            backgroundImage: `url(${Background})`,
            maxWidth: "95rem",
            minWidth: "70rem",
            height: "600px",
            marginTop: "-6rem",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
        }}>
            <Box marginLeft={!isLargeScreen ? "8rem" : "11rem"}
                 sx={{}}>
                <Typography variant="h1" fontFamily="Arvo" fontWeight="800"
                            width="5px">TASTE</Typography>
                <Typography variant="h1" fontFamily="Arvo" fontWeight="800" marginLeft="10rem"
                            width="5px">THE</Typography>
                <Typography variant="h1" fontFamily="Arvo" fontWeight="800" marginLeft="15rem"
                            width="5px">MAGIC</Typography>
            </Box>
            <Typography  paddingLeft={!isLargeScreen ? "8rem" : "11rem"} marginTop="-12rem" minWidth="135px" maxWidth="200px"
                        fontFamily="Crimson Text" fontWeight="600" variant="subtitle1">Experience Flavorful
                and Creative Recipes</Typography>


            <HeroImage src={Recipes}/>
        </Box>
    </>
}
