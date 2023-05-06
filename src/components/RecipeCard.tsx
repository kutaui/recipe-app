import {Card, CardContent, CardMedia, Chip, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Box} from "@mui/system";
import {ReactElement, JSXElementConstructor, ReactFragment, ReactPortal} from "react";

export const RecipeCard = (props: { image: string; name: string; description: string; tags: string[] }) => {
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    return <Card sx={{
        width:"600px", display: "flex", height: "241px", borderRadius: 5, ml:"20px",
        "@media (max-width: 1200px)": {
            width:"400px",
        }
,    }}>
        <CardMedia
            sx={{width:"300px",        "@media (max-width: 1200px)": {
                    width:"200px",
                }}}
            image={props.image}
            title={props.name}
        />
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <CardContent sx={{width:"240px",height:"100%",  position: "relative"}}>
                <Typography gutterBottom variant="h5" fontWeight="600">{props.name}</Typography>
                <Typography variant="body2">{props.description} </Typography>

                <Typography variant="button"
                            sx={{
                                display: "block",
                                position: "absolute",
                                bottom: "20px"
                            }}>Tags: {props.tags.map((tag) => (
                    <Chip key={tag} label={tag} sx={{mr: 1, mb: 1}}/>
                ))} </Typography>
            </CardContent>
        </Box>
    </Card>


}