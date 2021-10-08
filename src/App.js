import "./css/main.css";
import Nav from "./components/Nav";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	BrowserRouter,
} from "react-router-dom";
import ShowsPage from "./pages/ShowsPage";
import SingleShow from "./pages/SingleShow";
import { Container } from "react-grid-system";
import HomePage from "./pages/HomePage";
import GlobalState from "./context/GlobalState";
import SearchResult from "./pages/SearchResult";

function App() {
	return (
		<GlobalState>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<div className="App">
					<Nav />
					<Container>
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/shows" exact component={ShowsPage} />
							<Route path="/shows/:id" component={SingleShow} />
							<Route
								exact
								path="/search/shows/:query"
								component={SearchResult}
							/>
						</Switch>
					</Container>
				</div>
			</BrowserRouter>
		</GlobalState>
	);
}

export default App;
