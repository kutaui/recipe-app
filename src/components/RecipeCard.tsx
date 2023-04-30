import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Box} from "@mui/system";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export const RecipeCard = (props: { image: string ; name: string ; description: string ; tags: string[] }) => {
    return <Card sx={{maxWidth: 555, display: "flex", height: "272px", borderRadius: 5}}>
        <CardMedia
            sx={{width: 225}}
            image={props.image}
            title={props.name}
        />
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <CardContent sx={{height: "100%", width: 300, position: "relative"}}>
                <Typography gutterBottom variant="h5">{props.name}</Typography>
                <Typography gutterBottom variant="body1">{props.description} </Typography>

                <Typography variant="button" sx={{display: "block", position: "absolute",bottom:"20px"}}>Tags: {props.tags}</Typography>
            </CardContent>
        </Box>
    </Card>


}