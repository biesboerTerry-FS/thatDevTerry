import React, { useEffect } from "react";

const Contact = () => {
	useEffect(() => {
		document.title = "Contact | Terence Biesboer";
	}, []);

	return (
		<div className="page">
			<header className="pageHeader">
				<span className="pageNumber">05</span>
				<h1>
					<span className="accent">contact</span>
				</h1>
				<p>Placeholder. Tell visitors what kinds of projects you're open to.</p>
			</header>

			<div className="pageBody">
				<p>
					Email:{" "}
					<a className="accentLink" href="mailto:hello@example.com">
						hello@example.com
					</a>
				</p>
				<p>
					Location: <span className="accent">San Diego, CA</span>
				</p>
			</div>
		</div>
	);
};

export default Contact;
