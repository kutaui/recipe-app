import {Box, styled} from "@mui/system";
import {Button, Typography} from "@mui/material";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import EggAltIcon from '@mui/icons-material/EggAlt';
import CakeIcon from '@mui/icons-material/Cake';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';

const Icon = styled("img")({
    fontSize: "large",
})

const categories = [
    {
        name: "breakfast",
        icon: <EggAltIcon sx={{backgroundColor:"white",borderRadius:"50%",width:"30px",height:"30px"}}/>,
    }, {
        name: "fastfood",
        icon: <LocalPizzaIcon sx={{backgroundColor:"white",borderRadius:"50%",width:"30px",height:"30px"}}/>,
    }, {
        name: "dessert",
        icon: <CakeIcon sx={{backgroundColor:"white",borderRadius:"50%",width:"30px",height:"30px"}}/>,
    }, {
        name: "drink",
        icon: <LocalBarIcon sx={{backgroundColor:"white",borderRadius:"50%",width:"30px",height:"30px"}}/>,
    }, {
        name: "salad",
        icon: <RiceBowlIcon sx={{backgroundColor:"white",borderRadius:"50%",width:"30px",height:"30px"}}/>,
    }]


export const SideBar = () => {
    return <>
        <Box sx={{
            bgcolor: "#f3f3f3",
            width: "30%",
            height: "60vh",
            display: "flex",
            alignItems: "center",

        }}>
            <Box sx={{marginLeft: "177px",}}>
                <Typography variant="h2" marginLeft="-10px" marginTop="-80px" marginBottom="30px"
                            fontFamily="Arvo">Recipes</Typography>

                {categories.map((category) => {
                    return <Button key={category.name} sx={{borderRadius: "100px", color: "black", width: "180px", justifyContent: "start",marginBottom: "20px",borderColor: "#929292","&:hover": {borderColor: "#000000"}}}
                            variant="outlined"> {category.icon} <span
                        style={{fontFamily: "Arvo", fontWeight: "800", marginLeft: "12px"}}>{category.name}</span></Button>
                })}

            </Box>
        </Box>
    </>
}