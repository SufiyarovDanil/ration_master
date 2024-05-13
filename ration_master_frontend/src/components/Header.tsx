import { Container, NavLink, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header(){

    return(
        <>
        <Container>
            <Navbar className="mt-3 w-100">
                {//<Navbar.Brand >
                    //<NavLink href="/">
                    //<img src = "images/Logo.png" style={{width:"280px"}}></img> 
                  //  </NavLink>
                //</Navbar.Brand>
                 }
                <Navbar.Collapse className="justify-content-center ">
                    <div className="container">
                        <div className="row w-100">
                            <div className="col-md d-flex justify-content-center">
                                <Link to="/home"> 
                                    <img src="images/icons/home.png" style={{width:"80px"}}></img>
                                </Link>
                            </div>
                            <div className="col-md d-flex justify-content-center">
                                <Link to="/calc"> 
                                    <img src="images/icons/calc.png" style={{width:"80px"}}></img>
                                </Link>
                            </div>
                            <div className="col-md d-flex justify-content-center">
                                <Link to="/ration"> 
                                    <img src="images/icons/menu.png" style={{width:"80px"}}></img>
                                </Link>
                            </div>
                        </div>
                        <div className=" mt-2 row">
                            <hr className="w-100" style={{borderWidth:"6px", color:"#008F20"}}></hr>
                        </div>
                        <div className="row w-100">
                            <div className="col-md d-flex justify-content-center">
                                <Link className="text-decoration-none  text-black" to="/home"> 
                                    <h3>Главная</h3>
                                </Link>
                            </div>
                            <div className="col-md d-flex justify-content-center">
                                <Link className="text-decoration-none  text-black" to="/calc">
                                    <h3>Калькулятор</h3>
                                </Link>
                            </div>
                            <div className="col-md d-flex justify-content-center">
                                <Link className="text-decoration-none text-black" to="/ration"> 
                                    <h3>Меню</h3>                                
                                </Link>
                            </div>
                        </div>
                    </div>

                </Navbar.Collapse>
            </Navbar>
        </Container>
        </>
    )
} 
