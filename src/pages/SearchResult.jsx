import React, { useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import { useParams } from "react-router";
import { searchShows } from "../Api/Api";
import ShowCard from "../components/ShowCard";

const SearchResult = () => {
	const [searchedShows, setSearchedShows] = useState([]);

	let params = useParams();

	useEffect(() => {
		searchShows(params.query).then((res) => {
			const newArr = [];
			res.data.map((obj) => {
				return newArr.push(obj.show);
			});
			setSearchedShows(newArr);
		});
	}, [params.query]);

	return (
		<Row>
			{searchedShows.map((show) => {
				return (
					<Col key={show.id} lg={2}>
						<ShowCard show={show} />
					</Col>
				);
			})}
		</Row>
	);
};

export default SearchResult;
