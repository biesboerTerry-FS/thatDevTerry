import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Work from "./pages/Work";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<Navigation />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/work" element={<Work />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
