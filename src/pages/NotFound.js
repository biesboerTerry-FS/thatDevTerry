import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	useEffect(() => {
		document.title = "Page Not Found | Terence Biesboer";
	}, []);

	return (
		<div className="page">
			<header className="pageHeader">
				<span className="pageNumber">404</span>
				<h1>
					<span className="accent">page</span> not found
				</h1>
				<p>The page you’re looking for doesn’t exist.</p>
			</header>
			<div className="pageBody">
				<Link className="accentLink" to="/">
					Back to home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
