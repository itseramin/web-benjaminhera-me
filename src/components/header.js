import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { FaGithub } from '@react-icons/all-files/fa/FaGithub'

export default function Header() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Navbar.Brand href="/">Benjamin Hera</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="#cv">CV</Nav.Link>
					<Nav.Link href="/contact">Contact</Nav.Link>
					<NavDropdown title="Life history" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Early child trauma</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Teenage depression</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Mid life crisis</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Death</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link href="https://github.com/itseramin" target="_blank"><FaGithub /></Nav.Link>
					<Nav.Link href="#secretdanklink">(idk some other icon)</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}