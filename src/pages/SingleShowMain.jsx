import React from "react";
import { Col, Row } from "react-grid-system";
import { Markup } from "interweave";
import { RectShape } from "react-placeholder/lib/placeholders";


const SingleShowMain = ({ show }) => {
	return (
		<Row>

			<Col sm={6} md={6} lg={3}>
				<div className="img__container">
					{show.image ?
						<img
							className="singleShow__cover"
							src={show.image.medium}
							alt=""
						/> :
						<RectShape className="showcard__placeholder" />}
				</div>
			</Col>
			<Col sm={6} md={6} lg={6} className="singleShow__info">
				<h3>{show.name}</h3>
				<div>
					{show.genres.map((genre, i) => {
						return (
							<span key={i} className="singleShow__genre">
								{genre}
							</span>
						);
					})}
				</div>
				<Markup
					className="singleShow__info__summary"
					content={show.summary}
				/>

				<div className="singleShow__info__card">
					<p>
						Network:<span>{show.network.name}</span>
					</p>
					<p>
						Schedule:
						<span>
							{show.schedule.days} at {show.schedule.time}
						</span>
					</p>
					<p>
						Status:
						<span>{show.status}</span>
					</p>
					<p>
						Type:
						<span>{show.type}</span>
					</p>
					<p>
						Rating:
						<span>{show.rating.average}</span>
					</p>
					<p>
						Premiered:
						<span>{show.premiered}</span>
					</p>
				</div>
			</Col>
		</Row>
	)
};

export default SingleShowMain;
