import {Card, CardContent, CardMedia, Chip, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Box} from "@mui/system";
import {ReactElement, JSXElementConstructor, ReactFragment, ReactPortal} from "react";

export const RecipeCardSM = (props: { image: string; name: string; tags: string[] }) => {
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    return <Card sx={{
        marginBottom: "30px",
        marginLeft: "30px",
        minWidth: "300px",
        maxWidth: "400px",
        display: "flex",
        height: "105px",
        borderRadius: 5,
        "@media (max-width: 1200px)": {
            width: "350px",
        },
    }}>
        <CardMedia
            sx={{maxWidth: 200, minWidth: 150}}
            image={props.image}
            title={props.name}
        />
        <Box sx={{display: "flex", flexDirection: "column", width: "100%",height: "100%",}}>
            <CardContent sx={{height: "100%", maxWidth: "450px", minWidth: "200px", position: "relative"}}>
                <Typography gutterBottom
                            sx={{fontSize: "16px", fontWeight: "600", width: "100%"}}>{props.name}</Typography>

                <Typography sx={{
                    display: "block",
                    maxWidth: "450px", minWidth: "200px",
                    position: "absolute",
                    bottom: "20px",
                    fontSize: "12px"
                }}>Tags:{props.tags.map((tag) => (
                    <span key={tag}> <b>{tag}</b>, </span>))} </Typography>
            </CardContent>
        </Box>
    </Card>


}