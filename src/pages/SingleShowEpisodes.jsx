import React from "react";
import { Col, Row } from "react-grid-system";

const SingleShowEpisodes = ({ seasons, episodes }) => {

	return <Row className="seasons">

		{seasons &&
			[...Array(seasons.length)].map((e, i) => {
				return (
					<Col lg={8} offset={{ lg: 2 }} key={i}>
						<h3 >Season {i + 1}</h3>
						<table className="seasons__table" key={i}>
							<thead>
								<tr className="seasons__header">
									<th>Number</th>
									<th>Date</th>
									<th>Name</th>
								</tr>
							</thead>

							{episodes.map((episode) => {
								if (episode.season === i + 1) {
									return (
										<tr key={episode.id}>
											<td>{episode.number}</td>
											<td>{episode.airdate}</td>
											<td>{episode.name}</td>
										</tr>
									);
								}
								return false;
							})}

						</table>
					</Col>
				);
			})}
	</Row>;
};

export default SingleShowEpisodes;
