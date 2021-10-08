import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import { ShowContext } from "../context/GlobalState";
import ShowList from "../components/ShowList";
import SideBar from "../components/SideBar";

const ShowsPage = () => {
	const [filtered, setFiltered] = useState([]);

	const context = useContext(ShowContext);
	const { allShows } = context;

	// filtering

	const fillterShows = (inputValues) => {
		const filters = {
			genres: (genres) => genres.includes(inputValues.genres),
			language: (language) => language === inputValues.language,
			rating: (rating) => rating.average > parseInt(inputValues.rating),
		};

		const filterKeys = Object.keys(inputValues);
		const result = allShows.filter((item) => {
			// validates all filter criteria
			return filterKeys.every((key) => {
				// ignores non-function predicates
				if (typeof filters[key] !== "function") return true;
				return filters[key](item[key]);
			});
		});
		setFiltered(result);
	};

	// };
	useEffect(() => {
		setFiltered(allShows);
	}, [allShows]);

	return (
		<Row gutterWidth={30} className="shows__page">
			<SideBar fillterShows={fillterShows} />

			<Col md={7} lg={10}>
				<ShowList shows={filtered} />
			</Col>
		</Row>
	);
};

export default ShowsPage;
