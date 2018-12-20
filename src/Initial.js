import React, { Component } from 'react';
import Nav from './Component/Nav';
import Bread from './Component/Bread';
import Footer from './Component/Footer';
class Initial extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<Nav />
				<Bread />
				<Footer />
			</div>
		);
	}
}

export default Initial;
