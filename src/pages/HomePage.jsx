import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import { getSchedule } from "../Api/Api";
import ScheduleList from "../components/ScheduleList";
import ShowCard from "../components/ShowCard";
import { ShowContext } from "../context/GlobalState";

const HomePage = () => {
	const [schedule, setSchedule] = useState([]);
	const [showAll, setShowAll] = useState(false);
	const context = useContext(ShowContext);
	const { allShows } = context;

	const today = new Date();
	const date = today.toISOString().slice(0, 10);
	const time = today.toLocaleTimeString("en-IT", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});

	const filter = () => {
		let newList = schedule.filter((obj) => obj.airtime > time);
		// console.log("time", time);
		// console.log("newlist", newList);
	};

	console.log("schedule", schedule);

	useEffect(() => {
		getSchedule(date).then((res) => {
			setSchedule(res.data);
		});
	}, []);

	let mostPopular = allShows.filter((show) => show.weight == 100);
	mostPopular.length = 6;

	let showsToday = [...schedule];
	if (showAll) {
		showsToday.length = schedule.length;
	} else {
		showsToday.length = 6;
	}

	return (
		<Row gutterWidth={30} className="homePage">
			<Col sm={8}>
				<h3>Most poular shows</h3>
				<Row gutterWidth={10}>
					{mostPopular.map((show) => {
						return (
							<Col key={show.id} sm={2}>
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
							<Col key={item.id} sm={2}>
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

			<Col sm={4}>
				<ScheduleList />
			</Col>
		</Row>
	);
};

export default HomePage;
