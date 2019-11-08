import React from 'react';

class AddBuilding extends React.Component {
	render() {
		return (
			<div>
					<button type="button">Add Building</button>
			</div>
		);
	}
}
class RemoveBuilding extends React.Component {
	render() {
		return (
			<div>
					<button type="button">Remove Building</button>
			</div>
		);
	}
}


/*
	TO DO:
	- Captured building ID to look-up the additional information for the building
	- Return additional details of the building to be rendered on the screen for the user
*/

class ViewBuilding extends React.Component {
	render() {
		const { data, id } = this.props;

		const buildingInfo = [];

		var i = 0;
		for (var key in data[id-1]) {
			if (typeof data[id-1][key] != "object")
			buildingInfo[i] = data[id-1][key];
			i++;
		}

		return (
			<div>
				<p>
					{' '}
					<i id="clickName">Click on a name to view more information</i>
				</p>

				<div>
					{buildingInfo.map(info => (
							<p key={info}>{info}</p>
					))}
				</div>

				<div id="buttonContainer">
					<AddBuilding />
					<RemoveBuilding />
				</div>
			</div>

		);
	}
}
export default ViewBuilding;
