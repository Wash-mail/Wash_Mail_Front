import React, { Component } from 'react';

//import Clean from './Clean';
import Final from './Final';
import Initial from './Initial';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends Component {

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<BrowserRouter>
						<Switch>
							<Route exact path="/" component={Initial} />
							<Route path="/final" component={Final} />
							/>
						</Switch>
					</BrowserRouter>
				</header>
			</div>
		);
	}
}

export default App;
