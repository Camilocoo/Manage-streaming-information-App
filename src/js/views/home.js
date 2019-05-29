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
				<div className="row sticky-top bg-white border-top border-bottom">
					<div className="container">
						<div className="row">
							<div className="col d-flex justify-content-start pl-1  py-1">
								<div className="pl-1">filter</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col border p-3 my-2 rounded mx-auto">
							<div className="h3 ">Miami Dowtown VII</div>
							<div className="row">
								<div className="col">bdge</div>
								<div className="ml-auto mr-2">dropdown</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
