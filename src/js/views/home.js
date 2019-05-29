import React from "react";
import { SmallJumbotron } from "../component/smalljumbo";

export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<SmallJumbotron
					jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
					containerClass="pl-3  container"
					headerClass="display-4 font-weight-bold  text-left"
					headerText="Manage Cohorts Streaming"
					pClass="lead  text-left"
				/>
			</React.Fragment>
		);
	}
}
