import axios from "axios";
import { resolve } from "./resolver";

export const getAllshows = async () => {
	return await resolve(
		axios.get("https://api.tvmaze.com/shows").then((res) => res.data)
	);
};
