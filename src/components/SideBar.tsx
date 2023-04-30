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
        name: "Breakfast",
        icon: <EggAltIcon sx={{backgroundColor:"white",borderRadius:"50%",width:"30px",height:"30px"}}/>,
    }, {
        name: "Dinner",
        icon: <LocalPizzaIcon sx={{backgroundColor:"white",borderRadius:"50%",width:"30px",height:"30px"}}/>,
    }, {
        name: "Dessert",
        icon: <CakeIcon sx={{backgroundColor:"white",borderRadius:"50%",width:"30px",height:"30px"}}/>,
    }, {
        name: "Drink",
        icon: <LocalBarIcon sx={{backgroundColor:"white",borderRadius:"50%",width:"30px",height:"30px"}}/>,
    }, {
        name: "Salad",
        icon: <RiceBowlIcon sx={{backgroundColor:"white",borderRadius:"50%",width:"30px",height:"30px"}}/>,
    }]


export const SideBar = () => {
    return <>
        <Box sx={{
            bgcolor: "#f6f6f6",
            width: "30%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
        }}>
            <Box sx={{marginLeft: "175px",marginTop:"-370px"}}>
                <Typography variant="h2" marginLeft="-5px" marginTop="-80px" marginBottom="30px"
                            fontFamily="Arvo">Recipes</Typography>

                {categories.map((category) => {
                    return <Button key={category.name} sx={{borderRadius: "100px",textTransform:"none", color: "black", width: "180px", justifyContent: "start",marginBottom: "20px",borderColor: "#929292","&:hover": {borderColor: "#000000"}}}
                            variant="outlined"> {category.icon} <span
                        style={{fontFamily: "Arvo", fontWeight: "800", marginLeft: "12px"}}>{category.name}</span></Button>
                })}

            </Box>
        </Box>
    </>
}