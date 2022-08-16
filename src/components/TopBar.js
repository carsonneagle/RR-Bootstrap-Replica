import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

export default function TopBar() {
    return (
<Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{margin: "5px"}} href="#home">
        <Image style = {{ height: "60px", width: "130px", border: "1px solid #E8E9EB" }} src = "https://images.squarespace-cdn.com/content/v1/5a42ecabedaed8b07382c381/1517426035629-C2KV3NEMUFIXUU3SZGP3/Group+66+Copy.jpg" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" style= {{marginLeft:"1600px"}}>
        <Nav className="mr-auto"> 
        </Nav>
        <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
        </Nav>
    </Navbar.Collapse>
</Navbar>
            )
                                   }
