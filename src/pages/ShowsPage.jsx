import React, { useEffect, useState } from "react";
import { getAllshows } from "../Api/Api";
import ReactPaginate from "react-paginate";
import { Col, Row } from "react-grid-system";
import ShowCard from "../components/ShowCard";

const ShowsPage = () => {
	const [allShows, setAllshows] = useState([]);

	const [pageNumber, setPageNumber] = useState(0);
	const showsPerPage = 12;
	const pagesVisited = pageNumber * showsPerPage;
	const pageCount = Math.ceil(allShows.length / showsPerPage);

	useEffect(() => {
		getAllshows().then((res) => setAllshows(res.data));
	}, []);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	const display = allShows
		.slice(pagesVisited, pagesVisited + showsPerPage)
		.map((show) => {
			return <ShowCard key={show.id} show={show} />;
		});

	return (
		<Row gutterWidth={-30}>
			{/* left side */}
			<Col md={3} lg={2}>
				<h3>side bar</h3>
			</Col>
			{/* right side */}
			<Col md={7} lg={10}>
				<Row justify="center" nogutter className="shows__row">
					{display}
					<ReactPaginate
						previousLabel={"Previous"}
						nextLabel={"Next"}
						pageCount={pageCount}
						onPageChange={changePage}
						containerClassName={"pagination"}
						previousLinkClassName={"previousBttn"}
						nextLinkClassName={"nextBttn"}
						disabledClassName={"paginationDisabled"}
						activeClassName={"paginationActive"}
					/>
				</Row>
			</Col>
		</Row>
	);
};

export default ShowsPage;
