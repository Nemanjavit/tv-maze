import axios from "axios";
import { resolve } from "./resolver";

export const getAllshows = async () => {
	return await resolve(
		axios.get("https://api.tvmaze.com/shows").then((res) => res.data)
	);
};

export const getSchedule = async (date) => {
	return await resolve(
		axios
			.get(`https://api.tvmaze.com/schedule?country=US&date=${date}`)
			.then((res) => res.data)
	);
};

export const searchShows = async (query) => {
	return await resolve(
		axios
			.get(`https://api.tvmaze.com/search/shows?q=${query}`)
			.then((res) => res.data)
	);
};

export const getSingleShow = async (id) => {
	return await resolve(
		axios.get(`https://api.tvmaze.com/shows/${id}`).then((res) => res.data)
	);
};
