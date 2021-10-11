import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShowsPage from "./pages/ShowsPage";
import SingleShow from "./pages/SingleShow";
import { Container } from "react-grid-system";
import HomePage from "./pages/HomePage";
import GlobalState from "./context/GlobalState";
import SearchResult from "./pages/SearchResult";
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import "./css/main.css";
import FavoritesPage from "./pages/FavoritesPage";
import { Scrollbars } from 'react-custom-scrollbars';

// basename={process.env.PUBLIC_URL}
function App() {
	return (
		<GlobalState>
			<Scrollbars style={{ height: "100%", width: "100%" }} autoHide>
				<Router basename="/tv-maze/">
					<div className="App">
						<Nav />
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/shows" exact component={ShowsPage} />
							<Route path="/shows/:id" component={SingleShow} />
							<Route path="/favorites" component={FavoritesPage} />
							<Route exact path="/search/shows/:query" component={SearchResult} />
						</Switch>

					</div>
				</Router>
			</Scrollbars>
		</GlobalState >
	);
}

export default App;
