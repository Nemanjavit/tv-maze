import React from "react";
import { Col } from "react-grid-system";
import { Markup } from "interweave";

const ShowCard = ({ show }) => {
	console.log(show);
	return (
		<Col sm={3}>
			<div className="showcard">
				<div className="showcard__container">
					<div className="showcard__front">
						<img src={show.image.medium} alt="" />
					</div>
					<div className="showcard__back">
						<Markup content={show.summary} />
					</div>
				</div>
			</div>
		</Col>
	);
};

export default ShowCard;
