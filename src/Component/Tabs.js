import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
class Tabs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: '1'
		};
	}

	toggle = tab => {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	};
	render() {
		return (
			<div>
				<Nav tabs>
					<NavItem>
						<NavLink
							onClick={() => {
								this.toggle('1');
							}}
						>
							Historique
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							onClick={() => {
								this.toggle('2');
							}}
						>
                        Cookies
						</NavLink>
					</NavItem>
                    <NavItem>
						<NavLink
							onClick={() => {
								this.toggle('2');
							}}
						>
                        Mail
						</NavLink>
					</NavItem>
                    <NavItem>
						<NavLink
							onClick={() => {
								this.toggle('3');
							}}
						>
                        Telechargement
						</NavLink>
					</NavItem>
                    <NavItem>
						<NavLink
							onClick={() => {
								this.toggle('4');
							}}
						>
                        Extension
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<Row>
							<Col sm="12">
								<h4>Tab 1 Contents</h4>
							</Col>
						</Row>
					</TabPane>
					<TabPane tabId="2">
						<Row>
							<Col sm="6">
								<Card body>
									<CardTitle>Special Title Treatment</CardTitle>
									<CardText>
										With supporting text below as a natural lead-in to additional content.
									</CardText>
									<Button>Go somewhere</Button>
								</Card>
							</Col>
							<Col sm="6">
								<Card body>
									<CardTitle>Special Title Treatment</CardTitle>
									<CardText>
										With supporting text below as a natural lead-in to additional content.
									</CardText>
									<Button>Go somewhere</Button>
								</Card>
							</Col>
						</Row>
					</TabPane>
				</TabContent>
			</div>
		);
	}
}
export default Tabs;
