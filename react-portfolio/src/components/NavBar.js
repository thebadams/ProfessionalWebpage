import React  from 'react';
import NavBar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'

const NavBarComponent = () => {
  return (
    <NavBar>
      <NavBar.Brand href="/">Brian P. Adams</NavBar.Brand>
      <Nav className="mx-auto">
        <Nav.Link href="/aboutme">About</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </NavBar>
    // <nav class="navbar navbar-dark navbar-expand-lg sticky-top">
    //     <a class="navbar-brand" href="#">Brian P. Adams</a>
    //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
    //         aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    //         <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarText">
    //         <ul class="navbar-nav mr-auto">
    //             <li class="nav-item">
    //                 <a class="nav-link" href="./assets/html/about-me.html">About Me</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="./assets/html/portfolio-content.html">Portfolio</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="./assets/html/contact-info.html">Contact</a>
    //             </li>
    //         </ul>
    //     </div>
    // </nav>
  )
}

export default NavBarComponent;
