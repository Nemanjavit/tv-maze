import React, { useState } from "react";
import { Container, Row } from "react-grid-system";
import { NavLink, useHistory } from "react-router-dom";
import { BsSearch } from "react-icons/bs";


const Nav = () => {
	const [search, setSearch] = useState("");
	let history = useHistory();

	const onSearch = (e) => {
		e.preventDefault();
		if (search) {
			history.push(`/search/shows/${search}`);
			setSearch("");
		}
	};
	return (
		<nav>
			<Container>
				<Row nogutter className="top__nav">
					<div className="logo">TV MAZE</div>
					<form className="nav__form" onSubmit={onSearch}>
						<input
							className="nav__form__input"
							type="text"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<button className="nav__form__button" type="submit">
							<BsSearch />
						</button>
					</form>
				</Row>
			</Container>
			<div className="site__nav">
				<Container>
					<NavLink className="site__nav__link" exact to="/">
						Home
					</NavLink>
					<NavLink className="site__nav__link" to="/shows">
						Shows
					</NavLink>
					<NavLink className="site__nav__link" to="/favorites">
						Favorites
					</NavLink>
				</Container>
			</div>
		</nav>
	);
};

export default Nav;
