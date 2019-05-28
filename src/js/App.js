import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//include images into your bundle

//create your first component
export class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<BrowserRouter>
					<Switch>
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</BrowserRouter>
			</React.Fragment>
		);
	}
}

export default App;
