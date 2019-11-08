import React from 'react';


class BuildingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
			.filter(directory => {
				//remove directories that do not match current input

				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
			})
			.map(directory => {
				return (
					<tr
						key={directory.id}
						onClick={() => selectedUpdate(directory.id)}
					>
						<td>{directory.code} </td>
						<td> {directory.name} </td>
					</tr>
				)
			})
			return (
				<div>
					{ buildingList }
				</div>
			);
	}
}
export default BuildingList;
