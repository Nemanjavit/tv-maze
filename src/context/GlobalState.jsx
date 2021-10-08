import React, { useEffect, useState } from "react";
import { getAllshows } from "../Api/Api";

export const ShowContext = React.createContext();

const GlobalState = (props) => {
	const [allShows, setAllshows] = useState([]);
	const [favorites, setFavorites] = useState([])



	useEffect(() => {
		getAllshows().then((res) => {
			setAllshows(res.data);
		});
	}, []);

	return (
		<ShowContext.Provider value={{ allShows, favorites, setFavorites }}>
			{props.children}
		</ShowContext.Provider>
	);
};

export default GlobalState;
