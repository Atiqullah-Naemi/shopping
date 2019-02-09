import React, { Component } from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container
} from 'reactstrap'

class AppNavbar extends Component {
	state = {
		isOpen: false
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return (
		   <>
				<Navbar color="info" light expand="sm">
					<Container>
						<NavbarBrand href="/">reactstrap</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
						  	<NavItem>
						   	<NavLink href="/components/">Components</NavLink>
						  	</NavItem>
						  	<NavItem>
						   	<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
						  	</NavItem>
						</Nav>
					</Collapse>
					</Container>
				</Navbar>
		   </>
		)
	}
}

export default AppNavbar
