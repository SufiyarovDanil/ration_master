import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

export default function Page(){
    return(
        <>
            <Container>
            <Header/>
                <div style={{ marginTop: "10px", minHeight: "100%"}}>
                    <Outlet />
                </div>
            </Container>
        </>
    )
}
