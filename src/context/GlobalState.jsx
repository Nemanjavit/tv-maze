import React, { createContext, useEffect, useState } from "react";
import { getAllshows } from "../Api/Api";

export const ShowContext = React.createContext();

const GlobalState = (props) => {
	const [allShows, setAllshows] = useState([]);
	useEffect(() => {
		getAllshows().then((res) => {
			let ids = res.data.map((o) => o.id);
			let uni = res.data.filter(
				({ id }, index) => !ids.includes(id, index + 1)
			);
			console.log("uni", uni);
			setAllshows(uni);
		});
	}, []);

	return (
		<ShowContext.Provider value={{ allShows }}>
			{props.children}
		</ShowContext.Provider>
	);
};

export default GlobalState;
