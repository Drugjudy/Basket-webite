import { Nav, Navbar } from "react-bootstrap";

const CenterNav = () => {
    return(
                    <Nav className="justify-content-center" activeKey="/home">

                      <Navbar.Brand href="/">DrugBasket</Navbar.Brand>
                          
      <Nav.Link href="/items">Items</Nav.Link>
      
      <Nav.Link href="/login">Login</Nav.Link>
   
  </Nav>
    );
};

export default CenterNav;