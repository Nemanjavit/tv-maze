import React, { useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import { getSingleShow } from "../Api/Api";
import { Markup } from "interweave";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	useRouteMatch,
} from "react-router-dom";
import SingleShowMain from "./SingleShowMain";
import SingleShowEpisodes from "./SingleShowEpisodes";
import SingleShowCast from "./SIngleShowCast";

const SingleShow = ({ match }) => {
	const [show, setShow] = useState({
		image: {},
		genres: [],
		network: {},
		schedule: {},
		rating: {},
	});
	let { url, path } = useRouteMatch();

	useEffect(() => {
		getSingleShow(match.params.id).then((res) => {
			setShow(res.data);
		});
	}, []);
	console.log(show);

	return (
		<div className="singleShow">
			<Router>
				<div className="singleShow__nav">
					<NavLink to={`${url}/main`}>Main</NavLink>
					<NavLink to={`${url}/episodes`}>Eisodes</NavLink>
					<NavLink to={`${url}/cast`}>Cast</NavLink>
				</div>
				{/* <h3>{show.name}</h3> */}
				<Switch>
					<Route exact path={path} component={SingleShowMain} />
					<Route path={`${path}/episodes`} component={SingleShowEpisodes} />
					<Route path={`${path}/cast`} component={SingleShowCast} />
				</Switch>
			</Router>
			{/* <Row>
				<Col lg={3}>
					<div className="img__container">
						<img
							className="singleShow__cover"
							src={show.image.medium ? show.image.original : show.image.medium}
							alt=""
						/>
					</div>
				</Col>
				<Col lg={6} className="singleShow__info">
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
			</Row> */}
		</div>
	);
};

export default SingleShow;
