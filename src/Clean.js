import React, { Component } from 'react';
import Nav from './Component/Nav';
import Forms from './Component/Forms';
import Footer from './Component/Footer';
class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<Nav />
				<Forms />
				<Footer />
			</div>
		);
	}
}

export default Header;
