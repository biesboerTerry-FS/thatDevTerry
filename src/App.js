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

// import styled from "styled-components";
// import Homepage from "./components/Homepage";
// import Navigation from "./components/Navigation";

// const Container = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: flex-start;
// 	width: 100%;
// 	height: 100vh;
// 	position: relative;
// 	flex-direction: column;
// 	background-color: #000;
// 	color: #fff;
// `;

// function App() {
// 	return (
// 		<Container>
// 			<Navigation />
// 			<Homepage />
// 		</Container>
// 	);
// }

// export default App;

// import styled from "styled-components";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Homepage from "./components/Homepage";
// import Navigation from "./components/Navigation";

// const Container = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: flex-start;
// 	width: 100%;
// 	height: 100vh;
// 	position: relative;
// 	flex-direction: column;
// 	background-color: #000;
// 	color: #fff;
// `;

// function App() {
// 	return (
// 		<Router>
// 			<Container>
// 				<Navigation />
// 				<Routes>
// 					<Route exact path="/" element={<Homepage />} />
// 				</Routes>
// 			</Container>
// 		</Router>
// 	);
// }

// export default App;
