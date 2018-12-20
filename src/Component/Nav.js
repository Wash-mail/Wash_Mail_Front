import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import '../App.css';
class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const titre = 'mon application';

		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">{titre}</NavbarBrand>
				</Navbar>
			</div>
		);
	}
}

export default Nav;
