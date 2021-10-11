import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Container } from "react-grid-system";
import { Link } from "react-router-dom";
import { getSchedule } from "../Api/Api";
import Loader from "../components/Loader";
import ScheduleList from "../components/ScheduleList";
import ShowCard from "../components/ShowCard";
import { ShowContext } from "../context/GlobalState";


const HomePage = () => {
	const [schedule, setSchedule] = useState([]);
	const [showAll, setShowAll] = useState(false);
	const [isLoading, setIsLoading] = useState(true)
	const context = useContext(ShowContext);
	const { allShows } = context;

	const today = new Date();
	const date = today.toISOString().slice(0, 10);
	const time = today.toLocaleTimeString("en-IT", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});




	useEffect(() => {


		getSchedule(date).then((res) => {
			setSchedule(res.data);
		});
	}, [date]);

	let mostPopular = allShows.filter((show) => show.weight === 100);
	mostPopular.length = 8;


	let showsToday = [...schedule];
	if (showAll) {
		showsToday.length = schedule.length;
	} else {
		showsToday.length = 8;
	}

	return (
		<div>
			{allShows.length !== 0 ?
				<Container>
					<Row gutterWidth={30} className="homePage">
						<Col xs={12} sm={12} md={6} lg={8} >
							<h3>Most poular shows</h3>
							<Row gutterWidth={10}>
								{mostPopular.map((show) => {
									return (
										<Col key={show.id} xs={6} sm={6} md={6} lg={3} xl={3}>
											<ShowCard show={show} />
										</Col>
									);
								})}
							</Row>
							<Link className="homePage__link__button" to="./shows">
								All Shows
							</Link>
							<h3>Shows showing today</h3>
							<Row gutterWidth={10}>
								{showsToday.map((item) => {
									return (

										<Col key={item.id} xs={6} sm={6} md={6} lg={3} xl={3}>
											<ShowCard show={item.show} />
										</Col>
									);
								})}
							</Row>
							<button
								onClick={() => setShowAll(!showAll)}
								className="homePage__link__button"
							>
								See all
							</button>
						</Col>

						<Col xs={12} sm={12} md={6} lg={4}>
							<ScheduleList schedule={schedule} />
						</Col>
					</Row>
				</Container>
				:
				<Loader />
			}
		</div>
	);
};

export default HomePage;
