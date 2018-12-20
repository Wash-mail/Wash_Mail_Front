import React, { Component } from 'react';
import { Form, FormGroup, Label, CustomInput } from 'reactstrap';
import Nav from './Component/Nav';
import Forms from './Component/Forms';
import Footer from './Component/Footer';
const axios = require('axios');


class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			historique: [""],
			cookies: [""],
			mail: [""],
			telechargement: [""],
			extensions: [""]
		};
	}


	componentDidMount() {
		axios.get('http://localhost:5000/api/historique/get')
			.then(response => {
				const historique = response.data
				this.setState({
					historique: historique
				})
				console.log(this.state.historique.url)
			})
			.catch(error => {
				throw (error);
			});

		axios.get('http://localhost:5000/api/cache/get')
			.then(response => {
				const cookies = response.data
				this.setState({
					cookies: cookies
				})
			})
			.catch(error => {
				throw (error);
			});

		axios.get('http://localhost:5000/api/mail/getall')
			.then(response => {
				const mail = response.data
				this.setState({
					mail: mail
				})
			})
			.catch(error => {
				throw (error);
			});


		axios.get('http://localhost:5000/api/mail/getall')
			.then(response => {
				const mail = response.data
				this.setState({
					mail: mail
				})
			})
			.catch(error => {
				throw (error);
			});


		axios.get('http://localhost:5000/api/telechargement/get')
			.then(response => {
				const telechargement = response.data
				this.setState({
					telechargement: telechargement
				})
			})
			.catch(error => {
				throw (error);
			});


		axios.get('http://localhost:5000/api/extensions/getall')
			.then(response => {
				const extensions = response.data
				this.setState({
					extensions: extensions
				})
			})
			.catch(error => {
				throw (error);
			});
	}

/*
	getHistorique() {
		return this.state.historique.map((historique) => {
			return (
				<Label for="exampleCheckbox">Historique</Label>
				<div>
					<CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
				</div>

            );

		});

	}
*/
	render() {
		return (
			<div>
				<Nav />
				<FormGroup>
					<Label for="exampleCheckbox">Emails</Label>
					<div>
						<CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
						<CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
						<CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />
					</div>


				</FormGroup>

				<Label for="exampleCheckbox">Cookies</Label>
				<div>
					<CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
					<CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
					<CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />
				</div>

				<Label for="exampleCheckbox">Téléchargements</Label>
				<div>
					<CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
					<CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
					<CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />
				</div>
				<Label for="exampleCheckbox">Extensions</Label>
				<div>
					<CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
					<CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
					<CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />
				</div>
			</div>
		);
	}
}

export default Header;
