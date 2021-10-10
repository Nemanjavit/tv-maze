import React, { useEffect, useState } from "react";
import { getAllshows } from "../Api/Api";
import { ToastContainer, toast, cssTransition } from 'react-toastify';

export const ShowContext = React.createContext();

const GlobalState = (props) => {
	const [allShows, setAllshows] = useState([]);
	const [favorites, setFavorites] = useState([])

	const bounce = cssTransition({
		enter: "animate__animated animate__bounceIn",
		exit: "animate__animated animate__bounceOut"
	});


	const addFavorites = (show) => {
		if (favorites.some(favorite => favorite.id === show.id)) {
			let newList = favorites.filter(favorites => favorites.id !== show.id)
			setFavorites(newList)
			toast.error(`Show ${show.name} removed from your farvorites`, {
				transition: bounce,
				autoClose: 2000,
				hideProgressBar: true,
				className: "toast__error"
			})

		} else {
			setFavorites([...favorites, show])

			toast.success(`Show ${show.name} added to your favorites!`, {
				transition: bounce,
				autoClose: 2000,
				hideProgressBar: true,
				className: "toast__succes"

			});

		}
	}


	useEffect(() => {
		getAllshows().then((res) => {
			setAllshows(res.data);
		});
	}, []);

	return (
		<ShowContext.Provider value={{ allShows, favorites, addFavorites }}>
			<ToastContainer />
			{props.children}
		</ShowContext.Provider>
	);
};

export default GlobalState;
