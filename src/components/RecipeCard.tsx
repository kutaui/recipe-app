import {Card, CardContent, CardMedia, Chip, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {ReactElement, JSXElementConstructor, ReactFragment, ReactPortal} from "react";

export const RecipeCard = (props: { image: string; name: string; description: string; tags: string[] }) => {
    return <Card sx={{
        minWidth:"300px",maxWidth:"555px", display: "flex", height: "241px", borderRadius: 5,
    }}>
        <CardMedia
            sx={{maxWidth: "225px",minWidth:"150px"}}
            image={props.image}
            title={props.name}
        />
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <CardContent sx={{width:"90%",height:"100%",  position: "relative"}}>
                <Typography gutterBottom variant="h5" fontWeight="600">{props.name}</Typography>
                <Typography variant="body1">{props.description} </Typography>

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