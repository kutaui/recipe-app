import {Container} from "@mui/material";

export function Main(props: any) {
    return <Container maxWidth="xl">
        {props.children}
    </Container>



}