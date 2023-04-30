import {Card, CardContent, CardMedia, Chip, Typography} from "@mui/material";
import {Box} from "@mui/system";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export const RecipeCardSM = (props: { image: string ; name: string ; tags: string[] }) => {
    return <Card sx={{marginBottom:"30px",marginLeft:"30px",maxWidth: 400, display: "flex", height: "120px", borderRadius: 5}}>
        <CardMedia
            sx={{width: 200}}
            image={props.image}
            title={props.name}
        />
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <CardContent sx={{height: "100%", width: 200, position: "relative"}}>
                <Typography gutterBottom sx={{fontSize:"16px",fontWeight:"600"}}>{props.name}</Typography>

                <Typography sx={{display: "block", position: "absolute",bottom:"20px",fontSize:"12px"}}>Tags:{props.tags.map((tag) => (
                    <span key={tag} > <b>{tag}</b>, </span>))} </Typography>
            </CardContent>
        </Box>
    </Card>


}