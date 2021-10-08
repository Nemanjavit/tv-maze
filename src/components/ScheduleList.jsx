import React, { useEffect } from "react";
import { Row, Col } from "react-grid-system";


const ScheduleList = ({ schedule }) => {



	let input = ["21:00", "22:00", "23:00", "23:59"]



	const sorting =
		input.map((time, i) => {

			return (
				<ul className="schedule__list" key={i}>
					{i === input.length - 1 ? null : <h3>{time}</h3>}

					{
						schedule.filter((obj) => obj.airtime >= time && obj.airtime < input[i + 1]).map(show => {
							return (
								<li className="schedule__list__item" key={show.id}>
									<div className="schedule__list__item__left">
										<p className="time">{show.airtime}</p>
										{show.show.network ?
											<p className="network">{Object.values(show.show.network)[1]}</p> : ""
										}

									</div>
									<div className="schedule__list__item__right">
										<p className="showName">{show.show.name}</p>
										<p className="event">{show.name}</p>
									</div>
								</li>
							)
						})
					}
				</ul>
			)
		})



	return <Row >
		<Col lg={12}>
			{sorting}
		</Col>
	</Row>
};

export default ScheduleList;
