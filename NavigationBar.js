import {Container, Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
export function NavigationBar(){
  return (
    <>
      <Navbar bg="light" varient="dark" >
        <Container>
            <LinkContainer to="/">
               <Navbar.Brand >Student Assigment-App</Navbar.Brand>
            </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to="/"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
                <LinkContainer to="/create-task"><Nav.Link> Create Assigment</Nav.Link></LinkContainer>
                <LinkContainer to="/tasks"><Nav.Link> Views Assigment</Nav.Link></LinkContainer>
                {/* <LinkContainer to="/Profile"><Nav.Link> Profile</Nav.Link></LinkContainer>
                <LinkContainer to="/Signup"><Nav.Link> Signup</Nav.Link></LinkContainer>
                <LinkContainer to="/Login"><Nav.Link> Login</Nav.Link></LinkContainer> */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
