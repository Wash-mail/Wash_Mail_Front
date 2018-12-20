import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, input } from 'reactstrap';
import '../css/Form.css';
export default class Forms extends Component {
	render() {
		return (
			<Container>
				<Form className="forms">
					<p> Fait du tri !</p>

					<FormGroup>
						<FormGroup check>
							<Label check>
								<input type="radio" name="radio1" />
								Tout Selectionner
							</Label>
						</FormGroup>
						<FormGroup>
							<i class="far fa-times" />

							<Label for="exampleEmail">Historique</Label>
							<FormGroup check className="formgroup">
								<Label check>
									<input type="radio" name="radio1" />
									Historique
								</Label>
							</FormGroup>
						</FormGroup>
						<FormGroup className="formgroup">
							<Label for="exampleEmail">Cookies</Label>
							<FormGroup check>
								<Label check>
									<input type="radio" name="radio1" />
									Cookies
								</Label>
							</FormGroup>
						</FormGroup>
						<FormGroup className="formgroup">
							<Label for="exampleEmail">Email</Label>
							<FormGroup check>
								<Label check>
									<input type="radio" name="radio1" />
									Email
								</Label>
							</FormGroup>
						</FormGroup>
						<FormGroup className="formgroup">
							<Label for="exampleEmail">telechargement</Label>
							<FormGroup check>
								<Label check>
									<input type="radio" name="radio1" />
									Telechargement
								</Label>
							</FormGroup>
						</FormGroup>
					</FormGroup>
					<Button>Validé</Button>
					<Button>Supprimé et se desincrire</Button>
				</Form>
			</Container>
		);
	}
}
