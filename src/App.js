import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./components/Intro.scss";
import Intro, { shouldShowIntro, markIntroSeen } from "./components/Intro";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Work from "./pages/Work";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
	const [showIntro, setShowIntro] = useState(() => shouldShowIntro());
	const finishIntro = useCallback(() => {
		markIntroSeen();
		setShowIntro(false);
	}, []);

	return (
		<BrowserRouter>
			{showIntro ? <Intro onDone={finishIntro} /> : null}
			<div className="container">
				<Navigation />
				<main>
					<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/work" element={<Work />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
