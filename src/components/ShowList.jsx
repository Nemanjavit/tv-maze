import React, { useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import ShowCard from "../components/ShowCard";
import ReactPaginate from "react-paginate";

const ShowList = ({ shows }) => {
	// pagination
	const [pageNumber, setPageNumber] = useState(0);
	const showsPerPage = 12;
	const pagesVisited = pageNumber * showsPerPage;
	const pageCount = Math.ceil(shows.length / showsPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	const display = shows
		.slice(pagesVisited, pagesVisited + showsPerPage)
		.map((show) => {
			return (
				<Col sm={3}>
					<ShowCard key={show.id} show={show} />
				</Col>
			);
		});

	return (
		<Row className="shows__row">
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
	);
};

export default ShowList;
