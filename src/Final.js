import React, { Component } from 'react';
import { Alert, Progress } from 'reactstrap';
import check from './img/check.png';
import './Final.css';
import './App.css';
const axios = require('axios');

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			score: ['']
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/api/score/get')
			.then(response => {
				const sc = response.data;
				this.setState({
					score: sc
				});
			})

			.catch(error => {
				throw error;
			});
	}

	render() {
		return (
			<div className="App">
				<Progress animated color="success" value={this.state.score[0].nombre} />
				<img src={check} />
				<h1> C'est fait </h1>
				<p>Vous avez supprimé l'équivalent de XX Co2 ! Bravo !</p>

				<Alert color="success">
					<h4 className="alert-heading">
						L'astuce du jour ! Vous pouvez réduire votre impact en évitant de stocker trop de données en
						email !
					</h4>
				</Alert>
			</div>
		);
	}
}

export default App;
