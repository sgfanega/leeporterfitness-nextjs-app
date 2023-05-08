import Image from "next/image";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../public/logo.svg';
import data from '../json/data.json'

export default function Header() {
  const menuLinks = data?.data[0].menuLinks;

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo} alt="Lee Porter Fitness Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuLinks.map(menuLink => (
             <Nav.Link key={menuLink.id} href={menuLink.url}>{menuLink.label}</Nav.Link> 
            ))}
            <Nav.Link href="https://www.instagram.com/leeporterfitness/" target="_blank"><i className="bi bi-instagram fc-halloween-orange"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}