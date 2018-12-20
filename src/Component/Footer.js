import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import '../App.css';
class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const titre = 'Footer';

		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">{titre}</NavbarBrand>
				</Navbar>
			</div>
		);
	}
}

export default Footer;
