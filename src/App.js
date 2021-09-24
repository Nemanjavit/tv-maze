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

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				<Switch>
					<Route exact path="/" component={ShowsPage} />
					<Route path="/singleshow" component={SingleShow} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
