class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mail: [''],
			mailselect: []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/api/mail/get')
			.then(response => {
				const mail = response.data;
				this.setState({
					mail: mail
				});
			})
			.catch(error => {
				throw error;
			});
	}

	onSelect = e => {
		this.setState({ mailselect: this.state.mailselect.concat(e.target.name) });
	};

	componentDidUpdate() {}
	getMail() {
		return this.state.mail.map(mail => {
			return (
				<Form>
					<FormGroup check inline>
						<Label check>
							<Input type="checkbox" defaultChecked={false} onClick={true} name={mail.id} />{' '}
							{mail.expéditeur}
						</Label>
					</FormGroup>
				</Form>
			);
		});
	}

	render() {
		console.log(this.state.mailselect);
		return (
			<div>
				<Nav />
				{this.getMail()}
			</div>
		);
	}
}
