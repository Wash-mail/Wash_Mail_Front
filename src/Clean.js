import React, { Component } from 'react';
import { Form, FormGroup, Label, Button } from 'reactstrap';
import Nav from './Component/Nav';
/* eslint-disable */
const axios = require('axios');

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			historique: [''],
			cookies: [''],
			mail: [''],
			telechargement: [''],
			extensions: [''],
			mailselect: [],
			histSelect: [],
			cacheSelect: [],
			downlSelect: [],
			extSelect: []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:8080/api/historique/get')
			.then(response => {
				const historique = response.data;
				this.setState({
					historique: historique
				});
			})
			.catch(error => {
				throw error;
			});

		axios
			.get('http://localhost:8080/api/cache/get')
			.then(response => {
				const cookies = response.data;
				this.setState({
					cookies: cookies
				});
			})
			.catch(error => {
				throw error;
			});

		axios
			.get('http://localhost:8080/api/mail/getall')
			.then(response => {
				const mail = response.data;
				this.setState({
					mail: mail
				});
			})
			.catch(error => {
				throw error;
			});

		axios
			.get('http://localhost:8080/api/telechargement/get')
			.then(response => {
				const telechargement = response.data;
				this.setState({
					telechargement: telechargement
				});
			})
			.catch(error => {
				throw error;
			});

		axios
			.get('http://localhost:8080/api/extension/getall')
			.then(response => {
				const extensions = response.data;
				this.setState({
					extensions: extensions
				});
			})
			.catch(error => {
				throw error;
			});
	}

	getHistorique() {
		return this.state.historique.map(historique => {
			return (
				<Form>
					<FormGroup>
						<Label check>
							<input
								type="checkbox"
								id="exampleCustomCheckbox"
								defaultChecked={false}
								onClick={this.onSelectMail}
								name={historique.id}
							/>{' '}
							{historique.url}
						</Label>
					</FormGroup>
				</Form>
			);
		});
	}
	getCookies() {
		return this.state.cookies.map(cookies => {
			return (
				<Form>
					<FormGroup>
						<Label check>
							<input
								type="checkbox"
								id="exampleCustomCheckbox"
								defaultChecked={false}
								onClick={this.onSelectCache}
								name={cookies.id}
							/>{' '}
							{cookies.cookies}
						</Label>
					</FormGroup>
				</Form>
			);
		});
	}
	getMail() {
		return this.state.mail.map(mail => {
			return (
				<Form>
					<FormGroup>
						<Label check>
							<input
								type="checkbox"
								id="exampleCustomCheckbox"
								defaultChecked={false}
								onClick={this.onSelectMail}
								name={mail.id}
							/>{' '}
							{mail.expediteur}
						</Label>
					</FormGroup>
				</Form>
			);
		});
	}

	getExtensions() {
		return this.state.extensions.map(extensions => {
			return (
				<Form>
					<FormGroup>
						<Label check>
							<input
								type="checkbox"
								id="exampleCustomCheckbox"
								defaultChecked={false}
								onClick={this.onExtlSelect}
								name={extensions.id}
							/>{' '}
							{extensions.nom}
						</Label>
					</FormGroup>
				</Form>
			);
		});
	}

	getTelechargement() {
		return this.state.telechargement.map(telechargement => {
			return (
				<Form>
					<FormGroup>
						<Label check>
							<input
								type="checkbox"
								id="exampleCustomCheckbox"
								defaultChecked={false}
								onClick={this.onDownlSelect}
								name={telechargement.id}
							/>{' '}
							{telechargement.url}
						</Label>
					</FormGroup>
				</Form>
			);
		});
	}

	onSelectCache = e => {
		this.setState({ cacheSelect: this.state.cacheSelect.concat(e.target.name) });
	};
	onSelectHist = e => {
		this.setState({ histSelect: this.state.histSelect.concat(e.target.name) });
	};
	onSelectMail = e => {
		this.setState({ mailselect: this.state.mailselect.concat(e.target.name) });
	};
	onDownlSelect = e => {
		this.setState({ downlSelect: this.state.downlSelect.concat(e.target.name) });
	};
	onExtlSelect = e => {
		this.setState({ extSelect: this.state.extSelect.concat(e.target.name) });
	};

	render() {
		/* 		const { histSelect } = this.state;
		const { cacheSelect } = this.state;
		const { mailselect } = this.state;
		const { downlSelect } = this.state;
		const { extSelect } = this.state;

		console.log(histSelect, mailselect, cacheSelect, downlSelect, extSelect); */
		return (
			<div>
				<Nav />
				<h1>Historique</h1>
				{this.getHistorique()}
				<h1>Cookies</h1>
				{this.getCookies()}
				<h1>Email</h1>
				{this.getMail()}
				<h1>Telechargement</h1>
				{this.getTelechargement()}
				<h1>Extensions</h1>
				{this.getExtensions()}

				<Button>Validé</Button>
			</div>
		);
	}
}

export default Header;
