import React, { useState } from "react";
import { Col } from "react-grid-system";
import { genreList } from "../Utils/genres";
import { langList } from "../Utils/languages";

const SideBar = ({ fillterShows }) => {
	const [filters, setFilters] = useState({
		genres: "",
		language: "",
		rating: "",
	});

	let languages = langList();
	let genres = genreList();
	let ratings = [2, 3, 4, 5, 6, 7, 8, 9];
	const updateField = (e) => {
		setFilters({ ...filters, [e.target.name]: e.target.value });
	};

	const setFillters = (e) => {
		e.preventDefault();
		Object.keys(filters).forEach((k) => filters[k] === "" && delete filters[k]);
		fillterShows(filters);
	};

	return (
		<Col className="sideBar" md={3} lg={2}>
			<form className="sideBar__form" onSubmit={setFillters}>
				<div className="sideBar__form__group">
					<label htmlFor="language">Language:</label>
					<select
						className="sideBar__form__language"
						name="language"
						id="language"
						value={filters.language}
						onChange={updateField}
					>
						<option disabled value=""></option>
						{languages.map((language, i) => {
							return (
								<option key={i} value={language}>
									{language}
								</option>
							);
						})}
					</select>
				</div>

				<div className="sideBar__form__group">
					<label htmlFor="genres">Genre:</label>
					<select
						value={filters.genres}
						name="genres"
						id="genres"
						className="sideBar__form__genres"
						onChange={updateField}
					>
						<option value=""></option>
						{genres.map((genre, i) => {
							return (
								<option key={i} value={genre}>
									{genre}
								</option>
							);
						})}
					</select>
				</div>

				<div className="sideBar__form__group">
					<label htmlFor="rating">Rating:</label>
					<select
						value={filters.rating}
						name="rating"
						id="rating"
						className="sideBar__form__rating"
						onChange={updateField}
					>
						<option value=""></option>
						{ratings.map((rating, i) => {
							return (
								<option key={i} value={rating}>
									{`${rating}+`}
								</option>
							);
						})}
					</select>
				</div>
				<button className="sideBar__form__submit">Filter</button>
			</form>
		</Col>
	);
};

export default SideBar;
