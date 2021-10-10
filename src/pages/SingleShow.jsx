import React, { useEffect, useState } from "react";
import { getSingleShow } from "../Api/Api";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	useRouteMatch,
} from "react-router-dom";
import SingleShowMain from "./SingleShowMain";
import SingleShowEpisodes from "./SingleShowEpisodes";
import SingleShowCast from "./SingleShowCast";
import { Container } from "react-grid-system";



const SingleShow = ({ match }) => {
	const [show, setShow] = useState({
		image: {},
		genres: [],
		network: {},
		schedule: {},
		rating: {},
	});
	const [episodes, setEpisodes] = useState([])
	const [seasons, setSeasons] = useState([])
	const [cast, setCast] = useState([])

	let { url, path } = useRouteMatch();

	useEffect(() => {
		getSingleShow(match.params.id).then((res) => {
			setShow(res.data);
			setEpisodes(res.data._embedded.episodes)
			setSeasons(res.data._embedded.seasons)
			setCast(res.data._embedded.cast)

		});
	}, []);


	return (
		<Container className="singleShow">

			<div className="singleShow__nav">
				<NavLink className="singleShow__nav__link" exact to={`${url}`}>Main</NavLink>
				<NavLink className="singleShow__nav__link" exact to={`${url}/episodes`}>Eisodes</NavLink>
				<NavLink className="singleShow__nav__link" exact to={`${url}/cast`}>Cast</NavLink>
			</div>

			<Switch>
				<Route path={`${path}/episodes`} exact render={(props) => (
					<SingleShowEpisodes {...props} episodes={episodes} seasons={seasons} />
				)} />
				<Route path={`${path}/cast`} exact render={(props) => (
					<SingleShowCast {...props} cast={cast} />
				)} />

				<Route path={`${path}`} exact render={(props) =>
					<SingleShowMain {...props} show={show} />
				} />

			</Switch>

		</Container>
	);
};

export default SingleShow;
